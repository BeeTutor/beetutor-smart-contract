import { task } from 'hardhat/config'
import { writeFileSync } from '../../helpers/pathHelper'

task('deploy:contract', 'Deploy contract')
  .addParam('contract')
  .setAction(async ({ contract }, hre) => {
    await hre.run('compile')
    const [signer] = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory(contract)
    // if you mint in constructor, you need to add value in deploy function
    const deployContract = await contractFactory.connect(signer).deploy()
    console.log(`${contract} deployed to`, await deployContract.getAddress())

    const address = {
      main: deployContract.address,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, `${contract}.json`, addressData)

    await deployContract.waitForDeployment()
  },
  )

task('deploy:Counter', 'Deploy Counter contract')
  .addFlag('verify', 'Validate contract after deploy')
  .setAction(async ({ verify }, hre) => {
    await hre.run('compile')
    const [signer]: any = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory('Counter')
    const deployContract = await contractFactory.connect(signer).deploy()
    console.log(`Counter deployed to`, await deployContract.getAddress())

    const address = {
      main: await deployContract.getAddress(),
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, `Counter.json`, addressData)

    await deployContract.waitForDeployment()

    if (verify) {
      console.log('Verifying contract...')
      // await deployContract.deployTransaction.wait(3)
      try {
        await hre.run('verify:verify', {
          address: await deployContract.getAddress(),
          constructorArguments: [],
          contract: 'src/Counter.sol:Counter',
        })
      } catch (e) {
        console.log(e)
      }
    }
  })

task('deploy:HoneyToken', 'Deploy HoneyToken contract')
  .addFlag('verify', 'Validate contract after deploy')
  .setAction(async ({ verify }, hre) => {
    await hre.run('compile')
    const [signer]: any = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory('HoneyToken')
    const deployContract = await contractFactory.connect(signer).deploy(signer.address)
    console.log(`HoneyToken deployed to`, await deployContract.getAddress())

    const address = {
      main: await deployContract.getAddress(),
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, `HoneyToken.json`, addressData)

    await deployContract.waitForDeployment()

    if (verify) {
      console.log('Verifying contract...')
      // await deployContract.deployTransaction.wait(3)
      try {
        await hre.run('verify:verify', {
          address: await deployContract.getAddress(),
          constructorArguments: [signer.address],
          contract: 'src/HoneyToken.sol:HoneyToken',
        })
      } catch (e) {
        console.log(e)
      }
    }
  })

task('deploy:CourseCertificate', 'Deploy CourseCertificate contract')
  .addFlag('verify', 'Validate contract after deploy')
  .setAction(async ({ verify }, hre) => {
    await hre.run('compile')
    const [signer]: any = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory('CourseCertificate')
    const deployContract = await contractFactory.connect(signer).deploy()
    console.log(`CourseCertificate deployed to`, await deployContract.getAddress())

    const address = {
      main: await deployContract.getAddress(),
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, `CourseCertificate.json`, addressData)

    await deployContract.waitForDeployment()

    if (verify) {
      console.log('Verifying contract...')
      try {
        await hre.run('verify:verify', {
          address: await deployContract.getAddress(),
          constructorArguments: [],
          contract: 'src/CourseCertificate.sol:CourseCertificate',
        })
      } catch (e) {
        console.log(e)
      }
    }
  })

task('deploy:CourseAuction', 'Deploy CourseAuction contract')
  .addParam('coursecertificateaddress')
  .addParam('honeytokenaddress')
  .addFlag('verify', 'Validate contract after deploy')
  .setAction(async ({ coursecertificateaddress, honeytokenaddress, verify }, hre) => {
    await hre.run('compile')
    const [signer]: any = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory('CourseAuction')
    const deployContract = await contractFactory.connect(signer).deploy(coursecertificateaddress, honeytokenaddress)
    console.log(`CourseAuction deployed to`, await deployContract.getAddress())

    const address = {
      main: await deployContract.getAddress(),
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, `CourseAuction.json`, addressData)

    await deployContract.waitForDeployment()

    if (verify) {
      console.log('Verifying contract...')
      try {
        await hre.run('verify:verify', {
          address: await deployContract.getAddress(),
          constructorArguments: [coursecertificateaddress, honeytokenaddress],
          contract: 'src/CourseAuction.sol:CourseAuction',
        })
      } catch (e) {
        console.log(e)
      }
    }
  })
