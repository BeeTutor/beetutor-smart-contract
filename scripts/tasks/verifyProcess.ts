import fs from 'fs'
import { task } from 'hardhat/config'

task('verify:contract', 'Verify deployed contract')
  .addParam('contract')
  .setAction(async ({ contract }, hre) => {
    try {
      const contractAddress = fs.readFileSync(`scripts/address/${hre.network.name}/${contract}.json`)
      const addressData = JSON.parse(contractAddress.toString())
      await hre.run('verify:verify', {
        address: addressData.main,
        constructorArguments: [],
        contract: `src/${contract}.sol:${contract}`,
      })
    } catch (e) {
      console.log(e)
    }
  },
  )