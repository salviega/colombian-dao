  // SPDX-License-Identifier: GPL-3.0

  pragma solidity ^0.8.15;
  
  import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
  import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
  import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
  import "@openzeppelin/contracts/utils/Counters.sol";
  
  /**
  *  @title ColombianDaoMarket
  *  
  *  NOTE: 
  *  
  */

  contract ColombianDaoMarketContract is ERC721URIStorage, ReentrancyGuard {
    using Counters for Counters.Counter;

    Counters.Counter public ItemCounter;
    Counters.Counter public tokenIdCounter;
    
    /* Constants and immutable */
    address payable public immutable account;
  
    /* Storege */
    struct Token {
      uint id;
      string URI;
    }

    struct Item {
      uint itemId;
      IERC721 nft;
      uint tokenId;
      string tokenURI;
      uint price;
      bool sold;
      address payable seller;
    }

    mapping(uint => Item) public items;
    mapping(uint => Token) public tokens; 

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
    * @param _tokenURI NFT metadata.
    * @param _price NFT price.
    * @param _seller Seller address.
    */
    event Offerd(uint _itemId, address indexed _nft,  uint _tokenId, string _tokenURI, uint _price, address indexed _seller);

    /** @dev Bought Emit when an NFT was purchased.
    * @param _itemId Item ID.
    * @param _nft NFT address.
    * @param _tokenId NFT ID.  
    * @param _tokenURI NFT metadata.
    * @param _price NFT price.
    * @param _buyer Buyer address.
    */
    event Bought(uint _itemId, address indexed _nft,  uint _tokenId, string _tokenURI, uint _price, address indexed _buyer);
    
    /** @dev Constructor
    * @param _name token name.
    * @param _symbol acronym token name .
    */
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
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
      
      Token memory token = tokens[_tokenId]; 
      Item memory newItem = Item(itemId, _nft, _tokenId, token.URI, _price, false, payable(msg.sender));
      items[itemId] = newItem; 
      
      emit Offerd(itemId, address(_nft), _tokenId, token.URI, _price, payable(msg.sender));
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
      
      Item storage purchasedItem = items[_itemId];
      purchasedItem.sold = true;
      Token memory purchasedToken = tokens[purchasedItem.tokenId];
      
      emit Bought(item.itemId, address(item.nft), item.tokenId, purchasedToken.URI, item.price, payable(msg.sender));
    }

    /** @dev Generate NFT mint.
    * @param _tokenURI NFT metadata.
    */
    
    function mint(string memory _tokenURI) public onlyOwner returns (uint) {
      uint256 tokenId = tokenIdCounter.current();
      tokenIdCounter.increment();

      _safeMint(msg.sender, tokenId);
      _setTokenURI(tokenId, _tokenURI);
      tokens[tokenId] = Token(tokenId, _tokenURI);
      
      return tokenId;
    }

    function withdraw() payable external onlyOwner nonReentrant {
     payable(account).transfer(address(this).balance);   
    }

    // ************************ //
    // *   Getters & Setters  * //
    // ************************ //

    function totalAsserts() view public returns(uint256) {
        return address(this).balance;
    }
  }