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
        uint256 bidTime;
        uint256 amount;
    }

    // mapping：courseId => batchId => Auction
    mapping(uint256 => mapping(uint256 => Auction)) public auctions;
    // mapping：courseId => batchId => All Bids
    mapping(uint256 => mapping(uint256 => Bid[])) public bids;

    event AuctionCreated(
        uint256 courseId,
        uint256 batchId,
        uint256 startTime,
        uint256 endTime,
        uint256 minPrice
    );
    event BidPlaced(
        uint256 courseId,
        uint256 batchId,
        address bidder,
        uint256 bidTime,
        uint256 amount
    );
    event AuctionFinalized(uint256 courseId, uint256 batchId);

    constructor(address _courseCertificate) {
        courseCertificate = CourseCertificate(_courseCertificate);
    }

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

    function placeBid(uint256 courseId, uint256 batchId) external payable {
        Auction storage auction = auctions[courseId][batchId];
        require(auction.isActive, "Auction is not active");
        require(block.timestamp >= auction.startTime, "Auction not started");
        require(block.timestamp < auction.endTime, "Auction ended");
        require(msg.value >= auction.minPrice, "Bid too low");

        bids[courseId][batchId].push(
            Bid({
                bidder: msg.sender,
                bidTime: block.timestamp,
                amount: msg.value
            })
        );

        emit BidPlaced(courseId, batchId, msg.sender, block.timestamp, msg.value);
    }

    // Close the bidding and confirm the winning bidder.
    function finalizeAuction(uint256 courseId, uint256 batchId) external {
        Auction storage auction = auctions[courseId][batchId];
        require(auction.isActive, "Auction not active");
        require(block.timestamp >= auction.endTime, "Auction not ended");

        Bid[] storage auctionBids = bids[courseId][batchId];
        require(auctionBids.length > 0, "No bids placed");

        // Sort the bids.
        for (uint i = 0; i < auctionBids.length - 1; i++) {
            for (uint j = 0; j < auctionBids.length - i - 1; j++) {
                if (auctionBids[j].amount < auctionBids[j + 1].amount) {
                    Bid memory temp = auctionBids[j];
                    auctionBids[j] = auctionBids[j + 1];
                    auctionBids[j + 1] = temp;
                }
            }
        }

        // Get the maximum number of students.
        (, , , uint256 maxStudents, ) = courseCertificate.batches(
            courseId,
            batchId
        );

        // Mint NFTs for the winners.
        uint256 winnerCount = maxStudents < auctionBids.length
            ? maxStudents
            : auctionBids.length;
        for (uint256 i = 0; i < winnerCount; i++) {
            courseCertificate.mintForWinner(
                auctionBids[i].bidder,
                courseId,
                batchId
            );
        }

        // Return the bids of the non-winning bidders.
        for (uint256 i = winnerCount; i < auctionBids.length; i++) {
            payable(auctionBids[i].bidder).transfer(auctionBids[i].amount);
        }

        auction.isActive = false;
        emit AuctionFinalized(courseId, batchId);
    }

    function getBids(
        uint256 courseId,
        uint256 batchId
    ) public view returns (Bid[] memory) {
        return bids[courseId][batchId];
    }
}
