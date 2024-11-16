// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./CourseCertificate.sol";

contract CourseAuction {
    CourseCertificate public courseCertificate;

    struct Auction {
        uint256 courseId;
        uint256 batchId;
        uint256 startTime;
        uint256 endTime;
        uint256 minPrice;
        bool isActive;
    }

    struct Bid {
        address bidder;
        uint256 amount;
    }

    // 映射：courseId => batchId => Auction
    mapping(uint256 => mapping(uint256 => Auction)) public auctions;
    // 映射：courseId => batchId => 所有競標
    mapping(uint256 => mapping(uint256 => Bid[])) public bids;

    event AuctionCreated(uint256 courseId, uint256 batchId, uint256 startTime, uint256 endTime, uint256 minPrice);
    event BidPlaced(uint256 courseId, uint256 batchId, address bidder, uint256 amount);
    event AuctionFinalized(uint256 courseId, uint256 batchId);

    constructor(address _courseCertificate) {
        courseCertificate = CourseCertificate(_courseCertificate);
    }

    // 創建競標
    function createAuction(
        uint256 courseId,
        uint256 batchId,
        uint256 startTime,
        uint256 endTime,
        uint256 minPrice
    ) external {
        require(startTime > block.timestamp, "Start time must be in future");
        require(endTime > startTime, "End time must be after start time");

        auctions[courseId][batchId] = Auction({
            courseId: courseId,
            batchId: batchId,
            startTime: startTime,
            endTime: endTime,
            minPrice: minPrice,
            isActive: true
        });

        emit AuctionCreated(courseId, batchId, startTime, endTime, minPrice);
    }

    // 投標
    function placeBid(uint256 courseId, uint256 batchId) external payable {
        Auction storage auction = auctions[courseId][batchId];
        require(auction.isActive, "Auction is not active");
        require(block.timestamp >= auction.startTime, "Auction not started");
        require(block.timestamp < auction.endTime, "Auction ended");
        require(msg.value >= auction.minPrice, "Bid too low");

        bids[courseId][batchId].push(Bid({
            bidder: msg.sender,
            amount: msg.value
        }));

        emit BidPlaced(courseId, batchId, msg.sender, msg.value);
    }

    // 結束競標並確定得標者
    function finalizeAuction(uint256 courseId, uint256 batchId) external {
        Auction storage auction = auctions[courseId][batchId];
        require(auction.isActive, "Auction not active");
        require(block.timestamp >= auction.endTime, "Auction not ended");

        Bid[] storage auctionBids = bids[courseId][batchId];
        require(auctionBids.length > 0, "No bids placed");

        // 排序競標（簡單的氣泡排序）
        for (uint i = 0; i < auctionBids.length - 1; i++) {
            for (uint j = 0; j < auctionBids.length - i - 1; j++) {
                if (auctionBids[j].amount < auctionBids[j + 1].amount) {
                    Bid memory temp = auctionBids[j];
                    auctionBids[j] = auctionBids[j + 1];
                    auctionBids[j + 1] = temp;
                }
            }
        }

        // 獲取最大學生數量
        (, , , uint256 maxStudents, ) = courseCertificate.batches(courseId, batchId);

        // 為得標者鑄造 NFT
        uint256 winnerCount = maxStudents < auctionBids.length ? maxStudents : auctionBids.length;
        
        for (uint256 i = 0; i < winnerCount; i++) {
            courseCertificate.mintForWinner(auctionBids[i].bidder, courseId, batchId);
        }

        // 退還未得標者的競標金額
        for (uint256 i = winnerCount; i < auctionBids.length; i++) {
            payable(auctionBids[i].bidder).transfer(auctionBids[i].amount);
        }

        auction.isActive = false;
        emit AuctionFinalized(courseId, batchId);
    }
}