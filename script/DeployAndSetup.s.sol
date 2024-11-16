// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {HoneyToken} from "../src/HoneyToken.sol";
import {CourseCertificate} from "../src/CourseCertificate.sol";
import {CourseAuction} from "../src/CourseAuction.sol";


contract DeployAndSetupScript is Script {
    HoneyToken public honeyToken;
    CourseCertificate public courseCertificate;
    CourseAuction public courseAuction;

    address constant HONEY_TOKEN_ADDRESS = 0x98Fb90cc2a0A62Ea13d026b86160Db6Cc37d9567;  
    address constant COURSE_CERTIFICATE_ADDRESS = 0x6CD1Fb9220741B20a560289638097F5B691CF09c;
    address constant COURSE_AUCTION_ADDRESS = 0x4c32cc158Bcc32fBbdd26A842917c01431dA063C;

    address public deployer;
    address public teacher;
    address public student;
    address public student2;
    address public student3;
    address public student4;
    address public student5;
    address public student6;
    address public student7;
    address public student8;

    function setUp() public {
        honeyToken = HoneyToken(HONEY_TOKEN_ADDRESS);
        courseCertificate = CourseCertificate(COURSE_CERTIFICATE_ADDRESS);
        courseAuction = CourseAuction(COURSE_AUCTION_ADDRESS);

        deployer = vm.rememberKey(0xe303c14ef39df3d9261e95097b6a220719b1d9364e516cc9f93ff572b5ca21fb);
        teacher = vm.rememberKey(0xdeb7670fb0b2727fb322e64a14144950e25e80b22ba32b8ca49abd2dd6a2241c);
        student = vm.rememberKey(0xd6bd9c3a5f2d64e54e1d7aec9bdb5d81d6b318908f73be9afb4b11f79aeebcb7);
        student2 = vm.rememberKey(0x350ffd0a7398c548c1c793b745b09213b504833163db45b27d07b4f188f35f16);
        student3 = vm.rememberKey(0x5de9c11f3fb9aa019fbcc51058c9da5a8971c633c926db3c8451f88b78ecdd65);
        student4 = vm.rememberKey(0x33ffd1b1061abd7461b08341d9460b2fd6e83e4a21cb19ffef0ac0fd981e545d);
        student5 = vm.rememberKey(0x9f57d51749a1c2d92910c595a797acb87b34779e4a3c17e184c0f1733c8270d5);
        student6 = vm.rememberKey(0xe8be4e127e763a982eee303ef6c9e6e51e89f8d8a6157e2acb36d0a19d346ef7);  
        student7 = vm.rememberKey(0x5144c247490ae5b2e432822b7e6e35b559588279b8b465114170e7886c39a44d);
        student8 = vm.rememberKey(0xfc8b10fb3900c06d11ad041e6a8c0f0b9bf73b430fc6f0836f73a5ecad43d4b1);
    }

    function run() public {
        vm.startBroadcast(deployer);
        // set contract relationships
        courseCertificate.setAuctionContract(address(courseAuction));
        // mint some HoneyToken to student
        honeyToken.mint(student, 1000 ether);
        honeyToken.mint(student2, 1000 ether);
        honeyToken.mint(student3, 1000 ether);
        honeyToken.mint(student4, 1000 ether);
        honeyToken.mint(student5, 1000 ether);
        honeyToken.mint(student6, 1000 ether);
        honeyToken.mint(student7, 1000 ether);
        honeyToken.mint(student8, 1000 ether);

        vm.stopBroadcast();
        // switch to teacher
        vm.startBroadcast(teacher);

        // create course
        uint256 courseId = courseCertificate.createCourse(
            "Blockchain Framework & Platforms",
            "Learn essential principles of blockchain platforms as well as their growth, progress, and important use cases. Dive deep into fundamental parts of developing apps on commonly used platforms including Ethereum, Hyperledger, and Quorum."
        );

        // create course batches
        for (uint256 i = 0; i < 3; i++) {
            courseCertificate.addCourseBatch(
                courseId,
                i,
                block.timestamp + i * 1 hours,
                block.timestamp + (i + 1) * 1 hours,
                5
            );
        }

        // create auctions
        for (uint256 i = 0; i < 3; i++) {
            courseAuction.createAuction(
                courseId,
                i,
                block.timestamp,
                block.timestamp + 1 hours,
                10 ether // minimum bid price
            );
        }

        vm.stopBroadcast();
        // switch to student
        vm.startBroadcast(student);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student));

        // student place bid
        courseAuction.placeBid(courseId, 0, 17 ether);
        courseAuction.placeBid(courseId, 1, 10 ether);
        courseAuction.placeBid(courseId, 2, 19 ether);

        vm.stopBroadcast();

        vm.startBroadcast(student2);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student2));

        // student place bid
        courseAuction.placeBid(courseId, 0, 18 ether);
        courseAuction.placeBid(courseId, 1, 18 ether);
        courseAuction.placeBid(courseId, 2, 20 ether);

        vm.stopBroadcast();

        vm.startBroadcast(student3);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student3));

        // student place bid
        courseAuction.placeBid(courseId, 0, 19 ether);
        courseAuction.placeBid(courseId, 1, 22 ether);
        courseAuction.placeBid(courseId, 2, 28 ether);

        vm.stopBroadcast();

        vm.startBroadcast(student4);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student4));

        // student place bid
        courseAuction.placeBid(courseId, 0, 27 ether);
        courseAuction.placeBid(courseId, 1, 27 ether);
        courseAuction.placeBid(courseId, 2, 40 ether);

        vm.stopBroadcast();

        vm.startBroadcast(student5);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student5));

        // student place bid
        courseAuction.placeBid(courseId, 0, 54 ether);
        courseAuction.placeBid(courseId, 1, 43 ether);
        courseAuction.placeBid(courseId, 2, 52 ether);

        vm.stopBroadcast();

        vm.startBroadcast(student6);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student6));

        // student place bid
        courseAuction.placeBid(courseId, 0, 81 ether);
        courseAuction.placeBid(courseId, 1, 52 ether);
        courseAuction.placeBid(courseId, 2, 68 ether);

        vm.stopBroadcast();

        vm.startBroadcast(student7);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student7));

        // student place bid
        courseAuction.placeBid(courseId, 0, 90 ether);
        courseAuction.placeBid(courseId, 1, 58 ether);
        courseAuction.placeBid(courseId, 2, 87 ether);

        vm.stopBroadcast();

        vm.startBroadcast(student8);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student8));

        // student place bid
        courseAuction.placeBid(courseId, 0, 94 ether);
        courseAuction.placeBid(courseId, 1, 66 ether);
        courseAuction.placeBid(courseId, 2, 94 ether);

        vm.stopBroadcast();

        vm.startBroadcast(teacher);

        courseAuction.finalizeAuction(courseId, 0);

        vm.stopBroadcast();
    }
}