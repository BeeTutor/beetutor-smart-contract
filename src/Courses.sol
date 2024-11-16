// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract CourseCertificate is ERC1155, Ownable, Pausable {
    // 課程資訊結構
    struct Course {
        string name;
        uint256 level;
        bool exists;
    }
    
    // 時間梯次結構
    struct Batch {
        uint256 startTime;
        uint256 endTime;
        uint256 maxStudents;
        uint256 enrolledStudents;
        bool exists;
    }
    
    // 映射：tokenId => Course
    mapping(uint256 => Course) public courses;
    
    // 映射：courseId => batchId => Batch
    mapping(uint256 => mapping(uint256 => Batch)) public courseBatches;
    
    // 映射：courseId => 該課程的梯次數量
    mapping(uint256 => uint256) public batchCounters;
    
    // 映射：courseId => batchId => student => 是否已報名
    mapping(uint256 => mapping(uint256 => mapping(address => bool))) public isEnrolled;
    
    // 記錄已創建的課程數量
    uint256 private _courseCounter;
    
    // 事件
    event CourseCreated(uint256 indexed tokenId, string name, uint256 level);
    event BatchCreated(uint256 indexed courseId, uint256 indexed batchId, uint256 startTime, uint256 endTime);
    event StudentEnrolled(uint256 indexed courseId, uint256 indexed batchId, address indexed student);
    event CertificateUpgraded(uint256 indexed fromTokenId, uint256 indexed toTokenId, address indexed student);

    constructor() ERC1155("https://api.yourcourseplatform.com/metadata/{id}.json") Ownable(msg.sender) {
        _courseCounter = 0;
    }

    // 創建新課程
    function createCourse(string memory name, uint256 level) external onlyOwner {
        uint256 newCourseId = _courseCounter;
        courses[newCourseId] = Course(name, level, true);
        
        emit CourseCreated(newCourseId, name, level);
        _courseCounter++;
    }

    // 新增課程梯次
    function createBatch(
        uint256 courseId,
        uint256 startTime,
        uint256 endTime,
        uint256 maxStudents
    ) external onlyOwner {
        require(courses[courseId].exists, "Course does not exist");
        require(startTime > block.timestamp, "Start time must be in the future");
        require(endTime > startTime, "End time must be after start time");
        
        uint256 batchId = batchCounters[courseId];
        courseBatches[courseId][batchId] = Batch({
            startTime: startTime,
            endTime: endTime,
            maxStudents: maxStudents,
            enrolledStudents: 0,
            exists: true
        });
        
        emit BatchCreated(courseId, batchId, startTime, endTime);
        batchCounters[courseId]++;
    }

    // 學生報名課程
    function enroll(uint256 courseId, uint256 batchId) 
        external 
        whenNotPaused 
    {
        Batch storage batch = courseBatches[courseId][batchId];
        require(courses[courseId].exists, "Course does not exist");
        require(batch.exists, "Batch does not exist");
        require(!isEnrolled[courseId][batchId][msg.sender], "Already enrolled");
        require(batch.enrolledStudents < batch.maxStudents, "Batch is full");
        require(block.timestamp >= batch.startTime, "Course has not started");
        require(block.timestamp <= batch.endTime, "Course has ended");

        isEnrolled[courseId][batchId][msg.sender] = true;
        batch.enrolledStudents++;
        
        emit StudentEnrolled(courseId, batchId, msg.sender);
    }

    // 鑄造課程憑證（只能在課程結束後鑄造）
    function mintCertificate(
        address student, 
        uint256 courseId, 
        uint256 batchId
    ) external onlyOwner whenNotPaused {
        Batch storage batch = courseBatches[courseId][batchId];
        require(courses[courseId].exists, "Course does not exist");
        require(batch.exists, "Batch does not exist");
        require(isEnrolled[courseId][batchId][student], "Student not enrolled");
        require(block.timestamp > batch.endTime, "Course not finished yet");
        
        _mint(student, courseId, 1, "");
    }

    // 升級課程憑證
    function upgradeCertificate(uint256 fromCourseId, uint256 toCourseId) 
        external 
        whenNotPaused 
    {
        require(courses[fromCourseId].exists && courses[toCourseId].exists, "Invalid course");
        require(courses[toCourseId].level > courses[fromCourseId].level, "Invalid upgrade path");
        require(balanceOf(msg.sender, fromCourseId) > 0, "No certificate to upgrade");

        _burn(msg.sender, fromCourseId, 1);
        _mint(msg.sender, toCourseId, 1, "");

        emit CertificateUpgraded(fromCourseId, toCourseId, msg.sender);
    }

    // 批量鑄造憑證
    function mintBatchCertificates(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) external onlyOwner whenNotPaused {
        for (uint256 i = 0; i < ids.length; i++) {
            require(courses[ids[i]].exists, "Course does not exist");
        }
        _mintBatch(to, ids, amounts, "");
    }

    // URI 設定
    function setURI(string memory newuri) external onlyOwner {
        _setURI(newuri);
    }

    // 暫停/恢復合約功能
    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    // 查詢梯次資訊
    function getBatchInfo(uint256 courseId, uint256 batchId) 
        external 
        view 
        returns (
            uint256 startTime,
            uint256 endTime,
            uint256 maxStudents,
            uint256 enrolledStudents,
            bool exists
        ) 
    {
        Batch storage batch = courseBatches[courseId][batchId];
        return (
            batch.startTime,
            batch.endTime,
            batch.maxStudents,
            batch.enrolledStudents,
            batch.exists
        );
    }
}
