## Smart-contract address

1. linea-sepolia
[HoneyToken](https://explorer.sepolia.linea.build/address/0x98Fb90cc2a0A62Ea13d026b86160Db6Cc37d9567)
[CourseCertificate](https://explorer.sepolia.linea.build/address/0x6CD1Fb9220741B20a560289638097F5B691CF09c)
[CourseAuction](https://explorer.sepolia.linea.build/address/0x4c32cc158Bcc32fBbdd26A842917c01431dA063C)

2. flow-evm-testnet
[HoneyToken](https://evm-testnet.flowscan.io/address/0x42B08bA0335E47866D57f1902D9fb77a9188cB25)
[CourseCertificate](https://evm-testnet.flowscan.io/address/0x7BF9f689EA7e08c4257c75f58401Ecf534358AA2)
[CourseAuction](https://evm-testnet.flowscan.io/address/0xca0A039227cf13aDE516BAD1E1D465aa0b67aE8e)

3. scroll-sepolia
[HoneyToken](https://sepolia.scrollscan.com/address/0x42B08bA0335E47866D57f1902D9fb77a9188cB25)
[CourseCertificate](https://sepolia.scrollscan.com/address/0x7BF9f689EA7e08c4257c75f58401Ecf534358AA2)
[CourseAuction](https://sepolia.scrollscan.com/address/0xca0A039227cf13aDE516BAD1E1D465aa0b67aE8e)

4. mantle-sepolia
[HoneyToken](https://explorer.sepolia.mantle.xyz/address/0xca0A039227cf13aDE516BAD1E1D465aa0b67aE8e)

5. zircuit-testnet
[HoneyToken](https://explorer.testnet.zircuit.com/address/0x42B08bA0335E47866D57f1902D9fb77a9188cB25)
[CourseCertificate](https://explorer.testnet.zircuit.com/address/0x7BF9f689EA7e08c4257c75f58401Ecf534358AA2)
[CourseAuction](https://explorer.testnet.zircuit.com/address/0xca0A039227cf13aDE516BAD1E1D465aa0b67aE8e)

6. base-sepolia
[HoneyToken](https://base-sepolia.blockscout.com/address/0x42B08bA0335E47866D57f1902D9fb77a9188cB25)
[CourseCertificate](https://base-sepolia.blockscout.com/address/0x6611741f399813F5b1A69c5d7834fd3dec2b5Ba5)
[CourseAuction](https://base-sepolia.blockscout.com/address/0x24f4e3644eC2aBB1EbcfABcf36282FE28b5271f8)

7. rootstock-testnet
[HoneyToken](https://rootstock-testnet.blockscout.com/address/0xdD56eF0538a6566D40111f426BBA380618114C1f)
[CourseCertificate](https://rootstock-testnet.blockscout.com/address/0xF9cF885C2F57eEcd1596a4BdE410ef62E237a61d)
[CourseAuction](https://base-sepolia.blockscout.com/address/0x24f4e3644eC2aBB1EbcfABcf36282FE28b5271f8)

8. morph-holesky
[HoneyToken](https://base-sepolia.blockscout.com/address/0x42B08bA0335E47866D57f1902D9fb77a9188cB25)
[CourseCertificate](https://base-sepolia.blockscout.com/address/0x6611741f399813F5b1A69c5d7834fd3dec2b5Ba5)
[CourseAuction](https://base-sepolia.blockscout.com/address/0x24f4e3644eC2aBB1EbcfABcf36282FE28b5271f8)

## Prerequisites

- Node.js 
- npm
- Foundry
- Hardhat

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Foundry:
Follow the installation guide at [Foundry Book](https://book.getfoundry.sh/)

3. Initialize and update git submodules:
```bash
# Initialize submodules
git submodule init

# Update submodules
git submodule update

# Alternatively, you can do both in one command
git submodule update --init --recursive
```

> **Note**: Git submodules are required for Foundry dependencies like OpenZeppelin contracts. Make sure to initialize and update them before running Forge commands.

## Development Tools

This project utilizes two main development frameworks:

### Foundry

Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.

Foundry consists of:
- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools)
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network
- **Chisel**: Fast, utilitarian, and verbose solidity REPL

### Hardhat 

Used for compiling, deploying and verifying smart contracts

## Common Commands

### Compilation

```bash
# Using Hardhat
npm run compile

# Using Foundry
forge build
```

### Testing

```bash
# Using Foundry
forge test
```

### Formatting

```bash
forge fmt
```

### Gas Snapshots

```bash
forge snapshot
```

### Local Node

```bash
# Using Hardhat node
npm run hardhat:node

# Using Anvil
anvil
```

### Contract Deployment

```bash
# Deploy Counter contract
npm run deploy:Counter -- --network <network>

# Deploy HoneyToken contract
npm run deploy:HoneyToken -- --network <network>

# Deploy CourseCertificate contract
npm run deploy:CourseCertificate -- --network <network>

# Deploy CourseAuction contract
npm run deploy:CourseAuction -- --coursecertificateaddress <courseCertificateAddress> --honeytokenaddress <honeyTokenAddress> --network <network>
```

```bash
# Deploy test data
npm run deploy:testData
```
> **Note**: create local node before running this command

### Using Cast

```bash
cast <subcommand>
```

### Help

```bash
forge --help
anvil --help
cast --help
```

## Deployed Test Contracts

Successfully deployed test contracts on the following networks:
- [x] Linea Sepolia
- [x] Flow EVM Testnet
- [x] Scroll Sepolia
- [x] Mantle Sepolia
- [x] Zircuit Testnet
- [x] Base Sepolia
- [x] Rootstock Testnet
- [x] Morph Holesky

## Documentation

For more detailed information, please refer to:
- [Foundry Book](https://book.getfoundry.sh/)
- [Hardhat Documentation](https://hardhat.org/docs)
