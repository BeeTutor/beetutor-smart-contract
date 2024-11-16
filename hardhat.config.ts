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
    'linea-sepolia': 59141,
    'flow-evm-testnet': 545,
    'scroll-sepolia': 534351,
    'mantle-sepolia': 5003,
    'zircuit-testnet': 48899,
    'base-sepolia': 84532,
    'rootstock-testnet': 31,
    'morph-holesky': 2810,
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
    case 'flow-evm-testnet':
      jsonRpcUrl = `https://testnet.evm.nodes.onflow.org`
      break
    case 'zircuit-testnet':
      jsonRpcUrl = `https://zircuit1-testnet.p2pify.com/`
      break
    case 'rootstock-testnet':
      jsonRpcUrl = `https://public-node.testnet.rsk.co`
      break
    case 'morph-holesky':
      jsonRpcUrl = `https://rpc-quicknode-holesky.morphl2.io`
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
    'linea-sepolia': getChainConfig('linea-sepolia'),
    'flow-evm-testnet': getChainConfig('flow-evm-testnet'),
    'scroll-sepolia': getChainConfig('scroll-sepolia'),
    'mantle-sepolia': getChainConfig('mantle-sepolia'),
    'zircuit-testnet': getChainConfig('zircuit-testnet'),
    'base-sepolia': getChainConfig('base-sepolia'),
    'rootstock-testnet': getChainConfig('rootstock-testnet'),
    'morph-holesky': getChainConfig('morph-holesky'),
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
      lineaSepolia: process.env.ETHERSCAN_API_KEY || '',
      flowEvmTestnet: 'NO_API_KEY',
      scrollSepolia: process.env.ETHERSCAN_API_KEY || '',
      mantleSepolia: process.env.ETHERSCAN_API_KEY || '',
      zircuitTestnet: process.env.ZIRCUIT_EXPLORER_API_KEY || '',
      baseSepolia: process.env.ETHERSCAN_API_KEY || '',
      rootstockTestnet: 'NO_API_KEY',
      morphHolesky: 'NO_API_KEY',
    },
    customChains: [
      {
        network: 'flowEvmTestnet',
        chainId: chainIds['flow-evm-testnet'],
        urls: {
        apiURL: 'https://evm-testnet.flowscan.io/api',
        browserURL: 'https://evm-testnet.flowscan.io/',
        },
      },
      {
        network: 'zircuitTestnet',
        chainId: chainIds['zircuit-testnet'],
        urls: {
          apiURL: 'https://explorer.testnet.zircuit.com/api/contractVerifyHardhat',
          browserURL: 'https://explorer.testnet.zircuit.com/',
        },
      },
      {
        network: 'rootstockTestnet',
        chainId: chainIds['rootstock-testnet'],
        urls: {
          apiURL: 'https://rootstock-testnet.blockscout.com/api/',
          browserURL: 'https://rootstock-testnet.blockscout.com/',
        },
      },
      {
        network: 'morphHolesky',
        chainId: chainIds['morph-holesky'],
        urls: {
          apiURL: 'https://explorer-api-holesky.morphl2.io/api',
          browserURL: 'https://explorer-holesky.morphl2.io/',
        },
      }
    ]
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