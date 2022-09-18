  // SPDX-License-Identifier: GPL-3.0

  pragma solidity ^0.8.15;
  
  import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
  import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
  import "@openzeppelin/contracts/utils/Counters.sol";
  
  /**
  *  @title ColombianDaoMarket
  *  
  *  NOTE: 
  *  
  */

  contract ColombianDaoMarketContract is ReentrancyGuard {
    using Counters for Counters.Counter;

    Counters.Counter public ItemCounter;
   
    address payable public immutable account;
  
    /* Storege */

    struct Item {
      uint itemId;
      IERC721 nft;
      uint tokenId;
      uint price;
      address payable seller;
      bool sold;
    }

    mapping(uint => Item) public items;

    /* Modifiers */

    /** @dev Only owners can intetactive with the contract.
    */
    modifier onlyOwner() {
        require(msg.sender == account, "Colombian Dao Market: caller is not the owner");
        _;
    }

    /* Events */

    /** @dev Offerd Emit when an NFT is for sale.
    * @param _itemId Item ID.
    * @param _nft NFT address.
    * @param _tokenId NFT ID.
    * @param _price NFT price.
    */
    event Offerd(uint _itemId, address indexed _nft, uint _price, uint _tokenId);

    /** @dev Bought Emit when an NFT was purchased.
    * @param _itemId Item ID.
    * @param _nft NFT address.
    * @param _price NFT price.
    * @param _tokenId NFT ID.
    * @param _buyer buyer address.
    */
    event Bought(uint _itemId, address indexed _nft, uint _price, uint _tokenId, address indexed _buyer);
    
    /** @dev Constructor
    */
    constructor() {
      account = payable(msg.sender);
    } 

    // ************************ //
    // *      Functions       * //
    // ************************ //
      
    /** @dev Put an NFT for sale.
    * @param _nft NFT address.
    * @param _tokenId NFT ID.
    * @param _price NFT price.
    */
    function sellItem(IERC721 _nft, uint _tokenId, uint _price) external onlyOwner nonReentrant {
      require(_price > 0, "Price must be greater that 0");

      ItemCounter.increment();
      uint256 itemId = ItemCounter.current();

      _nft.transferFrom(msg.sender, address(this), _tokenId);

      items[itemId] = Item(itemId, _nft, _tokenId,  _price, payable(msg.sender), false);
      
      emit Offerd(itemId, address(_nft), _price,  _tokenId);
    }

    /** @dev Generate NFT purchase.
    * @param _itemId Item ID.
    */
    function buyItem(uint _itemId) payable external nonReentrant {
      uint price = items[_itemId].price;
      Item storage item = items[_itemId];

      require(_itemId > 0 && _itemId <= ItemCounter.current(), "Item don't exist");
      require(msg.value >= price, "Insufficient funds");
      require(!item.sold, "Item already sold");  
      
      payable(account).transfer(price);  
      item.nft.transferFrom(address(this), msg.sender, item.tokenId);
      items[_itemId].sold = true;
      
      emit Bought(item.itemId, address(item.nft), item.price, item.tokenId, payable(msg.sender));
    }
  }