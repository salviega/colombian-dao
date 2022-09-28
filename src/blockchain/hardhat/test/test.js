const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Colombian Dao Market", () => {
  const colombianDaoMarketSetup = async (
    name = "Colombian Dao Market",
    symbol = "CDM"
  ) => {
    const [owner, account1, account2] = await ethers.getSigners();
    const ColombianDaoMarketContract = await ethers.getContractFactory(
      "ColombianDaoMarketContract"
    );
    const deployed = await ColombianDaoMarketContract.deploy(name, symbol);

    return {
      owner: owner,
      addr1: account1,
      addr2: account2,
      deployed,
    };
  };

  describe("Testing", () => {
    it("Set name to passed param", async () => {
      const name = "Colombian Dao Market";
      const symbol = "CDM";
      const { deployed: colombianDeployed } = await colombianDaoMarketSetup(
        name,
        symbol
      );
      const returnedName = await colombianDeployed.name();
      expect(name).to.equal(returnedName);
    });

    it("Mints a new token and assigns it to owner", async () => {
      const name = "Colombian Dao Market";
      const symbol = "CDM";
      const { owner, deployed: colombianDeployed } =
        await colombianDaoMarketSetup(name, symbol);
      await colombianDeployed.mint("first token");
      await colombianDeployed.mint("two");

      const tokenOwner = await colombianDeployed.ownerOf(1);
      expect(tokenOwner).to.equal(owner.address);
    });

    it("Approve another contract so that the contranct can transfer token", async () => {
      const name = "Colombian Dao Market";
      const symbol = "CDM";
      const { deployed: colombianDeployed } = await colombianDaoMarketSetup(
        name,
        symbol
      );
      await colombianDeployed.mint("first token");

      assert(
        await colombianDeployed.approve(colombianDeployed.address, 0),
        "This approve was successful"
      );
      // await expect(await colombianDeployed.connect(addr1).approve(colombianDeployed.address, 0)).to.be.revertedWith('ERC721: approve caller is not token owner nor approved for all')
    });

    // it('Verify onlyOwner modifier', async () => {
    //   const name = "Colombian Dao Market"
    //   const symbol ="CDM"
    //   const { addr1, deployed: nftDeployed } = await nftSetup(name, symbol)
    //   await expect(await nftDeployed.connect(addr1).mint("first token")).to.be.revertedWith('Ownable: caller is not the owner')
    // })

    it("Mint an NFT and putting it up for sale in Colombian Dao Market", async () => {
      const name = "Colombian Dao Market";
      const symbol = "CDM";
      const { deployed: colombianDeployed } = await colombianDaoMarketSetup(
        name,
        symbol
      );
      await colombianDeployed.mint("first token");
      await colombianDeployed.approve(colombianDeployed.address, 0);

      assert(
        await colombianDeployed.sellItem(colombianDeployed.address, 0, 5),
        "It was put-up for sale to NFT"
      );
    });

    it("Buy an NFT on Colombian Dao Market", async () => {
      const name = "Colombian Dao Market";
      const symbol = "CDM";
      const { deployed: colombianDeployed } = await colombianDaoMarketSetup(
        name,
        symbol
      );
      await colombianDeployed.mint("first token");

      await colombianDeployed.approve(colombianDeployed.address, 0);
      await colombianDeployed.sellItem(colombianDeployed.address, 0, 5);

      //const item = await colombianDeployed.items(0);

      assert(
        await colombianDeployed.buyItem(1, {
          value: ethers.utils.parseUnits("5", "wei"),
        }),
        "It was bought an NFT"
      );
    });
  });
});
