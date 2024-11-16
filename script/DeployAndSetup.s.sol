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
    address public student2;
    address public student3;
    address public student4;
    address public student5;
    address public student6;
    address public student7;
    address public student8;

    function setUp() public {
        deployer = vm.rememberKey(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80);
        teacher = vm.rememberKey(0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d);
        student = vm.rememberKey(0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a);
        student2 = vm.rememberKey(0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6);
        student3 = vm.rememberKey(0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a);
        student4 = vm.rememberKey(0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba);
        student5 = vm.rememberKey(0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e);
        student6 = vm.rememberKey(0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356);  
        student7 = vm.rememberKey(0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97);
        student8 = vm.rememberKey(0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6);
    }

    function getRandomBid(address bidder) internal view returns (uint256) {
        return 10 ether + (uint256(keccak256(abi.encodePacked(block.timestamp, bidder))) % 91 ether);
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

        console2.log("honeyToken: %s", address(honeyToken));
        console2.log("courseCertificate: %s", address(courseCertificate));
        console2.log("courseAuction: %s", address(courseAuction));

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
        for (uint256 i = 0; i < 3; i++) {
            courseAuction.placeBid(courseId, i, getRandomBid(student));
        }

        vm.stopBroadcast();

        vm.startBroadcast(student2);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student2));

        // student place bid
        for (uint256 i = 0; i < 3; i++) {
            courseAuction.placeBid(courseId, i, getRandomBid(student2));
        }

        vm.stopBroadcast();

        vm.startBroadcast(student3);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student3));

        // student place bid
        for (uint256 i = 0; i < 3; i++) {
            courseAuction.placeBid(courseId, i, getRandomBid(student3));
        }

        vm.stopBroadcast();

        vm.startBroadcast(student4);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student4));

        // student place bid
        for (uint256 i = 0; i < 3; i++) {
            courseAuction.placeBid(courseId, i, getRandomBid(student4));
        }

        vm.stopBroadcast();

        vm.startBroadcast(student5);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student5));

        // student place bid
        for (uint256 i = 0; i < 3; i++) {
            courseAuction.placeBid(courseId, i, getRandomBid(student5));
        }

        vm.stopBroadcast();

        vm.startBroadcast(student6);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student6));

        // student place bid
        for (uint256 i = 0; i < 3; i++) {
            courseAuction.placeBid(courseId, i, getRandomBid(student6));
        }

        vm.stopBroadcast();

        vm.startBroadcast(student7);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student7));

        // student place bid
        for (uint256 i = 0; i < 3; i++) {
            courseAuction.placeBid(courseId, i, getRandomBid(student7));
        }

        vm.stopBroadcast();

        vm.startBroadcast(student8);

        // approve CourseAuction contract to use student's HoneyToken
        honeyToken.approve(address(courseAuction), honeyToken.balanceOf(student8));

        // student place bid
        for (uint256 i = 0; i < 3; i++) {
            courseAuction.placeBid(courseId, i, getRandomBid(student8));
        }

        vm.stopBroadcast();
        // switch to teacher
        vm.startBroadcast(teacher);

        courseAuction.finalizeAuction(courseId, 0);

        vm.stopBroadcast();
    }
}