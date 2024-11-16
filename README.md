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
