// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HoneyToken is ERC20, Ownable {
    constructor(address initialOwner) 
        ERC20("HoneyToken", "HNT") 
        Ownable(initialOwner)
    {}

    /**
     * @dev Mint new tokens
     * @param to The address to receive the tokens
     * @param amount The amount of tokens to mint
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
