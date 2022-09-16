const fs = require('fs')
const { ethers } = require('hardhat')

async function main () {
  const ColombianDao = await ethers.getContractFactory()
  const colombianDao = await ColombianDao.deploy()
  await colombianDao.deployed()
  console.log('The Colombian Dao Contract was deployed to: ' + colombianDao.address)
  console.log('The Colombian Dao Contract was deployein to block number: ' + await colombianDao.provider.getBlockNumber())

  const addresses = {
    colombianDao: colombianDao.address,
    blocknumber: await colombianDao.provider.getBlockNumber()
  }
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
