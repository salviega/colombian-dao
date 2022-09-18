// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.15;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

 /**
  *  @title NFTContract by ColombianDaoMarket
  *  
  *  NOTE: 
  *  
  */

contract NFTContract is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;

  Counters.Counter public tokenIdCounter;

  /* Constants and immutable */
  address public immutable account;

  /* Modifiers */

  /** @dev Only owners can intetactive with the contract.
  */
  // modifier onlyOwner() {
  //   require(_owner == account, "NFT contract: caller is not the owner");
  //   _;
  // }

 /** @dev Constructor
  * @param _name token name.
  * @param _symbol acronym token name .
  */
  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
    account = msg.sender;
  }

  /** @dev Generate NFT mint.
  * @param _tokenURI NFT metadata.
  */
  function mint(string memory _tokenURI) external onlyOwner returns (uint) {
    uint tokenId = tokenIdCounter.current();
    tokenIdCounter.increment();

    _safeMint(msg.sender, tokenId);
    _setTokenURI(tokenId, _tokenURI);
      
    return tokenId;
  }
}
