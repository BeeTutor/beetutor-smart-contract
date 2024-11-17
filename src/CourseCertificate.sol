// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CourseCertificate is ERC1155, Ownable {
    // Course structure
    struct Course {
        address teacher;           // Teacher address
        string name;              // Course name
        string description;       // Course description
        uint256 courseId;         // Course ID
        bool isActive;            // Whether the course is active
    }

    // Course Batch structure
    struct BatchInfo {
        uint256 startTime;        // Start time
        uint256 endTime;          // End time
        uint256 maxStudents;      // Maximum number of students
        uint256 enrolledStudents; // Number of enrolled students
        bool isActive;           // Whether the batch is active
    }

    // NFT Level structure
    struct NFTLevel {
        uint256 level;           // Current level
        uint256 lastUpgradeTime; // Last upgrade time
        bool isCompleted;        // Whether the course is completed
    }

    // 映射：courseId => Course
    mapping(uint256 => Course) public courses;
    // 映射：courseId => batchId => BatchInfo
    mapping(uint256 => mapping(uint256 => BatchInfo)) public batches;
    // 映射：tokenId => NFTLevel
    mapping(uint256 => mapping(address => NFTLevel)) public nftLevels;

    // Upgrade event
    event NFTUpgraded(
        uint256 indexed tokenId,
        address indexed student,
        uint256 oldLevel,
        uint256 newLevel,
        bool isCompleted
    );
    
    // Course counter
    uint256 private _courseIdCounter;
    
    // Modifier to only allow the auction contract to call
    modifier onlyAuction() {
        require(msg.sender == auctionContract, "Only auction contract can call this");
        _;
    }

    address public auctionContract;

    constructor() ERC1155("https://your-metadata-uri/{id}.json") Ownable(msg.sender) {
        _courseIdCounter = 0;
    }

    // Set the auction contract address
    function setAuctionContract(address _auctionContract) external onlyOwner {
        auctionContract = _auctionContract;
    }

    // Create a new course
    function createCourse(
        string memory name,
        string memory description
    ) external returns (uint256) {
        uint256 courseId = _courseIdCounter++;
        
        courses[courseId] = Course({
            teacher: msg.sender,
            name: name,
            description: description,
            courseId: courseId,
            isActive: true
        });

        return courseId;
    }

    // Add a course batch
    function addCourseBatch(
        uint256 courseId,
        uint256 batchId,
        uint256 startTime,
        uint256 endTime,
        uint256 maxStudents
    ) external {
        require(courses[courseId].teacher == msg.sender, "Only teacher can add batch");
        require(courses[courseId].isActive, "Course is not active");
        require(startTime < endTime, "Invalid time range");

        batches[courseId][batchId] = BatchInfo({
            startTime: startTime,
            endTime: endTime,
            maxStudents: maxStudents,
            enrolledStudents: 0,
            isActive: true
        });
    }

    // Mint NFTs for the winners (only the auction contract can call)
    function mintForWinner(
        address winner,
        uint256 courseId,
        uint256 batchId
    ) external onlyAuction returns (bool) {
        // require(courses[courseId].isActive, "Course is not active");
        // require(batches[courseId][batchId].isActive, "Batch is not active");
        require(batches[courseId][batchId].enrolledStudents < batches[courseId][batchId].maxStudents, "Batch is full");
        
        _mint(winner, courseId, 1, "");
        batches[courseId][batchId].enrolledStudents++;
        return true;
    }

    // Upgrade NFT
    function upgradeNFT(
        uint256 courseId,
        address student,
        uint256 newLevel
    ) external {
        // Check if the caller is the course teacher
        require(courses[courseId].teacher == msg.sender, "Only teacher can upgrade NFT");
        
        // Check if the student owns the NFT
        require(balanceOf(student, courseId) > 0, "Student does not own this NFT");

        // Get the current NFT level information
        NFTLevel storage nftLevel = nftLevels[courseId][student];
        
        // Ensure the new level is higher than the current level
        require(newLevel > nftLevel.level, "New level must be higher than current level");
        
        // If marking as completed, ensure it hasn't been completed before
        require(!nftLevel.isCompleted, "Course already completed");

        // Record the old level for the event
        uint256 oldLevel = nftLevel.level;

        // Update the NFT level information
        nftLevel.level = newLevel;
        nftLevel.lastUpgradeTime = block.timestamp;
        nftLevel.isCompleted = true;
        // Trigger the upgrade event
        emit NFTUpgraded(
            courseId,
            student,
            oldLevel,
            newLevel,
            nftLevel.isCompleted
        );
    }

    function getNFTLevel(
        uint256 courseId,
        address student
    ) external view returns (uint256 level, uint256 lastUpgradeTime, bool isCompleted) {
        NFTLevel memory nftLevel = nftLevels[courseId][student];
        return (nftLevel.level, nftLevel.lastUpgradeTime, nftLevel.isCompleted);
    }

    function getBatchInfo(
        uint256 courseId,
        uint256 batchId
    ) external view returns (
        uint256 startTime,
        uint256 endTime,
        uint256 maxStudents,
        uint256 enrolledStudents,
        bool isActive
    ) {
        BatchInfo memory batch = batches[courseId][batchId];
        return (batch.startTime, batch.endTime, batch.maxStudents, batch.enrolledStudents, batch.isActive);
    }

    // Override the _update function to implement transfer restrictions
    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal virtual override {
        // If minting (from is zero address), no need to check
        if (from != address(0)) {
            // Check each token to be transferred
            for (uint256 i = 0; i < ids.length; i++) {
                // If transferring (not destroying), check if transfer is allowed
                if (to != address(0)) {
                    uint256 tokenId = ids[i];
                    NFTLevel memory nftLevel = nftLevels[tokenId][from];
                    // If the NFT is completed, transfer is not allowed
                    require(!nftLevel.isCompleted, "Completed course NFT cannot be transferred");
                }
            }
        }

        // Call the implementation of the parent contract
        super._update(from, to, ids, values);
    }
}
