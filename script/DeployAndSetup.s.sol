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

    address public deployer;
    address public teacher;
    address public student;

    function setUp() public {
        deployer = vm.addr(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80);
        teacher = vm.addr(0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d);
        student = vm.addr(0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a);
    }

    function run() public {
        vm.startBroadcast(deployer);

        // deploy contracts
        honeyToken = new HoneyToken(deployer);
        courseCertificate = new CourseCertificate();
        courseAuction = new CourseAuction(
            address(courseCertificate),
            address(honeyToken)
        );

        // set contract relationships
        courseCertificate.setAuctionContract(address(courseAuction));

        // mint some HoneyToken to student
        honeyToken.mint(student, 100 ether);

        vm.stopBroadcast();
        // switch to teacher
        vm.startBroadcast(teacher);

        // create course
        uint256 courseId = courseCertificate.createCourse(
            "Blockchain Framework & Platforms",
            "Learn essential principles of blockchain platforms as well as their growth, progress, and important use cases. Dive deep into fundamental parts of developing apps on commonly used platforms including Ethereum, Hyperledger, and Quorum."
        );

        // create course batches
        for (uint256 i = 1; i < 4; i++) {
            courseCertificate.addCourseBatch(
                courseId,
                i,
                block.timestamp + i * 1 hours,
                block.timestamp + (i + 1) * 1 hours,
                5
            );
        }

        // create auctions
        for (uint256 i = 1; i < 4; i++) {
            courseAuction.createAuction(
                courseId,
                i,
                block.timestamp + 1 seconds,
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
        courseAuction.placeBid(courseId, 1, 10 ether);

        vm.stopBroadcast();
        // switch to teacher
        vm.startBroadcast(teacher);

        courseAuction.finalizeAuction(courseId, 1);

        vm.stopBroadcast();
    }
}