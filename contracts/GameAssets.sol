// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameAssets is ERC1155, Ownable {
    uint256 public constant EPIC_SWORD = 1;
    uint256 public constant GOLDEN_AXE = 2;

    constructor(string memory uri) ERC1155(uri) Ownable(msg.sender) {
        _mint(msg.sender, EPIC_SWORD, 1, "");
        _mint(msg.sender, GOLDEN_AXE, 1, ""); // optional initial mint to contract owner
    }

    function mintEpicSword(address to, uint256 amount) public onlyOwner {
        _mint(to, EPIC_SWORD, amount, "");
    }

    function mintGoldenAxe(address to, uint256 amount) public onlyOwner {
        _mint(to, GOLDEN_AXE, amount, "");
    }

    function setBaseURI(string memory newURI) public onlyOwner {
        _setURI(newURI);
    }
}
