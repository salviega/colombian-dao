const fs = require('fs')
const { ethers } = require('hardhat')

async function main () {
  const FeedContract = await ethers.getContractFactory('FeedContract')
  const feedContract = await FeedContract.deploy()
  await feedContract.deployed()
  console.log('Feed contract was deployed to: ' + feedContract.address)
  console.log('Feed contract was deployein to block number: ' + await feedContract.provider.getBlockNumber())
    
  const ColombianDaoMarketContract = await ethers.getContractFactory('ColombianDaoMarketContract')
  const colombianDaoMarketContract = await ColombianDaoMarketContract.deploy("Colombian Dao Market", "CDM")
  await colombianDaoMarketContract.deployed()
  console.log('Colombian Dao market contract was deployed to: ' + colombianDaoMarketContract.address)
  console.log('Colombian Dao market contract was deployein to block number: ' + await colombianDaoMarketContract.provider.getBlockNumber())

  const addresses = [
    { feedcontract: feedContract.address,
      blocknumber: await feedContract.provider.getBlockNumber()
    },
    {
      colombiandaomarketcontract: colombianDaoMarketContract.address,
      blocknumber: await colombianDaoMarketContract.provider.getBlockNumber()
    }
  ]
  const addressesJSON = JSON.stringify(addresses)
  fs.writeFileSync('src/blockchain/environment/contract-address.json', addressesJSON)
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
