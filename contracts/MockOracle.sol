// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/access/Ownable.sol";
contract MockOracle is Ownable { int256 public price; constructor(int256 _price){ price = _price; } function setPrice(int256 p) external onlyOwner { price = p; } function getPrice() external view returns(int256){ return price; } }
