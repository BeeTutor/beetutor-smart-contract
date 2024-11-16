// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CourseCertificate is ERC1155, Ownable {
    // 課程結構
    struct Course {
        address teacher;           // 老師地址
        string name;              // 課程名稱
        string description;       // 課程描述
        uint256 courseId;         // 課程 ID
        bool isActive;            // 課程是否有效
    }

    // 課程梯次結構
    struct BatchInfo {
        uint256 startTime;        // 開始時間
        uint256 endTime;          // 結束時間
        uint256 maxStudents;      // 學生人數上限
        uint256 enrolledStudents; // 已註冊學生數
        bool isActive;            // 梯次是否有效
    }

    // NFT 等級結構
    struct NFTLevel {
        uint256 level;           // 目前等級
        uint256 lastUpgradeTime; // 最後升級時間
        bool isCompleted;        // 是否完成課程
    }

    // 映射：courseId => Course
    mapping(uint256 => Course) public courses;
    // 映射：courseId => batchId => BatchInfo
    mapping(uint256 => mapping(uint256 => BatchInfo)) public batches;
    // 映射：tokenId => NFTLevel
    mapping(uint256 => mapping(address => NFTLevel)) public nftLevels;

    // 升級事件
    event NFTUpgraded(
        uint256 indexed tokenId,
        address indexed student,
        uint256 oldLevel,
        uint256 newLevel,
        bool isCompleted
    );
    
    // 課程計數器
    uint256 private _courseIdCounter;
    
    // 只允許競標合約調用的修飾器
    modifier onlyAuction() {
        require(msg.sender == auctionContract, "Only auction contract can call this");
        _;
    }

    address public auctionContract;

    constructor() ERC1155("https://your-metadata-uri/{id}.json") Ownable(msg.sender) {
        _courseIdCounter = 1;
    }

    // 設置競標合約地址
    function setAuctionContract(address _auctionContract) external onlyOwner {
        auctionContract = _auctionContract;
    }

    // 創建新課程
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

    // 添加課程梯次
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

    // 為得標者鑄造 NFT（只能由競標合約調用）
    function mintForWinner(
        address winner,
        uint256 courseId,
        uint256 batchId
    ) external onlyAuction {
        require(courses[courseId].isActive, "Course is not active");
        require(batches[courseId][batchId].isActive, "Batch is not active");
        require(batches[courseId][batchId].enrolledStudents < batches[courseId][batchId].maxStudents, "Batch is full");
        
        _mint(winner, courseId, 1, "");
        batches[courseId][batchId].enrolledStudents++;
    }

    // 升級 NFT
    function upgradeNFT(
        uint256 courseId,
        address student,
        uint256 newLevel
    ) external {
        // 檢查呼叫者是否為課程老師
        require(courses[courseId].teacher == msg.sender, "Only teacher can upgrade NFT");
        
        // 檢查學生是否擁有該 NFT
        require(balanceOf(student, courseId) > 0, "Student does not own this NFT");

        // 獲取當前 NFT 等級資訊
        NFTLevel storage nftLevel = nftLevels[courseId][student];
        
        // 確保新等級大於當前等級
        require(newLevel > nftLevel.level, "New level must be higher than current level");
        
        // 如果要標記為完成，確保之前未完成
        require(!nftLevel.isCompleted, "Course already completed");

        // 記錄舊等級用於事件
        uint256 oldLevel = nftLevel.level;

        // 更新 NFT 等級資訊
        nftLevel.level = newLevel;
        nftLevel.lastUpgradeTime = block.timestamp;
        nftLevel.isCompleted = true;
        // 觸發升級事件
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

    // 覆寫 _update 函數來實現轉移限制
    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal virtual override {
        // 如果是鑄造（from 為零地址），則不需要檢查
        if (from != address(0)) {
            // 檢查每個要轉移的 token
            for (uint256 i = 0; i < ids.length; i++) {
                // 如果是轉移（非銷毀），則檢查是否允許轉移
                if (to != address(0)) {
                    uint256 tokenId = ids[i];
                    NFTLevel memory nftLevel = nftLevels[tokenId][from];
                    // 如果 NFT 已經完成課程，則不允許轉移
                    require(!nftLevel.isCompleted, "Completed course NFT cannot be transferred");
                }
            }
        }

        // 調用父合約的實現
        super._update(from, to, ids, values);
    }
}
