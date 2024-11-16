import { HardhatUserConfig } from 'hardhat/config'
import { NetworkUserConfig } from 'hardhat/types'
import '@nomicfoundation/hardhat-ethers'
import '@nomicfoundation/hardhat-toolbox'
import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'
import { loadTasks } from './helpers/hardhatConfigHelpers'
dotenvConfig({ path: resolve(__dirname, './.env') })
const taskFolder = ['tasks']
loadTasks(taskFolder)
const chainIds = {
    hardhat: 31337,
    'arbitrum-sepolia': 421614,
    // TODO: Add other chains that ETHGlobal Hackathon Sponsors
}
// Ensure that we have all the environment variables we need.
const pk: string | undefined = process.env.PRIVATE_KEY
if (!pk) {
  throw new Error('Please set your pk in a .env file')
}
const infuraApiKey: string | undefined = process.env.INFURA_API_KEY
if (!infuraApiKey) {
  throw new Error('Please set your INFURA_API_KEY in a .env file')
}
function getChainConfig (chain: keyof typeof chainIds): NetworkUserConfig {
  let jsonRpcUrl: string
  switch (chain) {
    case 'arbitrum-sepolia':
      jsonRpcUrl = `https://arbitrum-sepolia.infura.io/v3/${infuraApiKey}`
      break
    default:
      jsonRpcUrl = `https://${chain}.infura.io/v3/${infuraApiKey}`
  }
  return {
    accounts: [`0x${pk}`],
    chainId: chainIds[chain],
    url: jsonRpcUrl,
  }
}
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: chainIds.hardhat,
    },
    local: {
      url: 'http://127.0.0.1:8545',
    },
    'arbitrum-sepolia': getChainConfig('arbitrum-sepolia'),
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './src',
    tests: './test',
  },
  solidity: {
    version: '0.8.28',
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/hardhat-template/issues/31
        bytecodeHash: 'none',
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: process.env.ARBITRUMSCAN_API_KEY || '',
    },
    customChains: [{
      network: 'arbitrumSepolia',
      chainId: chainIds['arbitrum-sepolia'],
      urls: {
        apiURL: 'https://api-sepolia.arbitrum.io/api',
        browserURL: 'https://sepolia.arbitrum.io/',
      },
    }],
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS as string === 'true',
    excludeContracts: [],
    src: './src',
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v6',
  },
}
export default config