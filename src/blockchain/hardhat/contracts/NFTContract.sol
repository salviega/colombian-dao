// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTContract is ERC721URIStorage {
  using Counters for Counters.Counter;

  Counters.Counter public tokenIdCounter;

  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {

  }

  function mint(string memory _tokenURI) public returns(uint) {
    
    uint256 tokenId = tokenIdCounter.current();
    tokenIdCounter.increment();

    _safeMint(msg.sender, tokenId);
    _setTokenURI(tokenId, _tokenURI);
    return tokenId;
  }
}
