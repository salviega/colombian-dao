const { expect, assert } = require('chai')
const { ethers } = require('hardhat')

describe('Colombian Dao Market', () => {
  
  const nftSetup = async (name = "Colombian Dao Market", symbol = "CDM") => {
    const [owner, account1, account2] = await ethers.getSigners()
    const NFTContract = await ethers.getContractFactory('NFTContract')
    const deployed = await NFTContract.deploy(name, symbol)

    return {
      owner: owner,
      addr1: account1,
      addr2: account2,
      deployed
    }
  }

  const colombianDaoMarketSetup = async () => {
    const [owner, account1, account2] = await ethers.getSigners()
    const ColombianDaoMarketContract = await ethers.getContractFactory('ColombianDaoMarketContract')
    const deployed = await ColombianDaoMarketContract.deploy()

    return {
      owner: owner,
      addr1: account1,
      addr2: account2,
      deployed
    }
  }

  describe("NFT test", () => {
    it('Set name to passed param', async () => {
      const name = "Colombian Dao Market"
      const symbol ="CDM"
      const { deployed: nftDeployed } = await nftSetup(name, symbol)
      const returnedName = await nftDeployed.name()
      expect(name).to.equal(returnedName)
    })
  
    it('Mints a new token and assigns it to owner', async () => {
      const name = "Colombian Dao Market"
      const symbol ="CDM"
      const { owner, deployed: nftDeployed } = await nftSetup(name, symbol)
      await nftDeployed.mint("first oken")
      await nftDeployed.mint("two")
      
      const tokenOwner = await nftDeployed.ownerOf(1)
      expect(tokenOwner).to.equal(owner.address)
    })

    it('Approve another contract so that the contranct can transfer token', async () => {
      const name = "Colombian Dao Market"
      const symbol ="CDM"
      const { deployed: nftDeployed } = await nftSetup(name, symbol)
      await nftDeployed.mint("first token")

      const { deployed: colombianDeployed } = await colombianDaoMarketSetup()
      
      assert(await nftDeployed.approve(colombianDeployed.address, 0),'This approve was successful')
      // await expect(await nftDeployed.connect(addr1).approve(colombianDeployed.address, 0)).to.be.revertedWith('ERC721: approve caller is not token owner nor approved for all')
    })

    // it('Verify onlyOwner modifier', async () => {
    //   const name = "Colombian Dao Market"
    //   const symbol ="CDM"
    //   const { addr1, deployed: nftDeployed } = await nftSetup(name, symbol)
    //   await expect(await nftDeployed.connect(addr1).mint("first token")).to.be.revertedWith('Ownable: caller is not the owner')
    // })
  })

  describe("Colombian Dao Market test", () => {
    it('Mint an NFT and putting it up for sale in Colombian Dao Market', async () => {
      const name = "Colombian Dao Market"
      const symbol ="CDM"
      const { deployed: nftDeployed } = await nftSetup(name, symbol)
      await nftDeployed.mint("first token")

      const { deployed: colombianDeployed } = await colombianDaoMarketSetup()

      await nftDeployed.approve(colombianDeployed.address, 0)
     
      assert(await colombianDeployed.sellItem(nftDeployed.address, 0, 5),'It was put-up for sale to NFT')
    })

    it('Buy an NFT on Colombian Dao Market', async () => {
      const name = "Colombian Dao Market"
      const symbol ="CDM"
      const { deployed: nftDeployed } = await nftSetup(name, symbol)
      await nftDeployed.mint("first token")

      const { deployed: colombianDeployed } = await colombianDaoMarketSetup()

      await nftDeployed.approve(colombianDeployed.address, 0)
      await colombianDeployed.sellItem(nftDeployed.address, 0, 5)

      const item = await colombianDeployed.items(0)

      assert(await colombianDeployed.buyItem(1, { value: ethers.utils.parseUnits('5', 'wei') }),'It was bought an NFT')
    })
  })

})