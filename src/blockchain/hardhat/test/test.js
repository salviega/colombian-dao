const { expect } = require('chai')
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

  describe("NFT deployment", () => {
    it.skip('Set name to passed param', async () => {
      const name = "Colombian Dao Market"
      const symbol ="CDM"
      const { deployed: nftDeployed } = await nftSetup(name, symbol)
      const returnedName = await nftDeployed.name()
      expect(name).to.equal(returnedName)
    })
  })
  
  describe("Minting", () => {
    it.skip('Mints a new token and assigns it to owner', async () => {
      const name = "Colombian Dao Market"
      const symbol ="CDM"
      const { owner, deployed: nftDeployed } = await nftSetup(name, symbol)
      await nftDeployed.mint("one")
      await nftDeployed.mint("two")
      
      const tokenOwner = await nftDeployed.ownerOf(1)
      expect(tokenOwner).to.equal(owner)
    })

    // it('Verify onlyOwner modifier', async () => {
    //   const name = "Colombian Dao Market"
    //   const symbol ="CDM"
    //   const { addr1, deployed: nftDeployed } = await nftSetup(name, symbol)
    //   await expect(await nftDeployed.connect(addr1).mint("one")).to.be.revertedWith('Ownable: caller is not the owner')
    // })
  })

  describe("Colombian Dao Market deployment", () => {
    it('Set name to passed param', async () => {
      const { deployed: colombianDeployed } = await colombianDaoMarketSetup()
    })
  })
})