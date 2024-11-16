{
  "name": "smart-contract",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "smart-contract",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "dotenv": "^16.4.5"
      },
      "devDependencies": {
        "@nomicfoundation/hardhat-ethers": "^3.0.8",
        "@nomicfoundation/hardhat-toolbox": "^5.0.0",
        "@nomicfoundation/hardhat-verify": "^2.0.11",
        "@openzeppelin/contracts": "^5.1.0",
        "@typechain/hardhat": "^9.1.0",
        "@types/node": "^22.9.0",
        "ethers": "^6.13.4",
        "hardhat": "^2.22.15",
        "ts-node": "^10.9.2",
        "typechain": "^8.3.2",
        "typescript": "^5.6.3"
      }
    },
    "node_modules/@adraffy/ens-normalize": {
      "version": "1.10.1",
      "resolved": "https://registry.npmjs.org/@adraffy/ens-normalize/-/ens-normalize-1.10.1.tgz",
      "integrity": "sha512-96Z2IP3mYmF1Xg2cDm8f1gWGf/HUVedQ3FMifV4kG/PQ4yEP51xDtRAEfhVNt5f/uzpNkZHwWQuUcu6D6K+Ekw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@ethereumjs/rlp": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@ethereumjs/rlp/-/rlp-4.0.1.tgz",
      "integrity": "sha512-tqsQiBQDQdmPWE1xkkBq4rlSW5QZpLOUJ5RJh2/9fug+q9tnUhuZoVLk7s0scUIKTOzEtR72DFBXI4WiZcMpvw==",
      "dev": true,
      "license": "MPL-2.0",
      "peer": true,
      "bin": {
        "rlp": "bin/rlp"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@ethereumjs/util": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/@ethereumjs/util/-/util-8.1.0.tgz",
      "integrity": "sha512-zQ0IqbdX8FZ9aw11vP+dZkKDkS+kgIvQPHnSAXzP9pLu+Rfu3D3XEeLbicvoXJTYnhZiPmsZUxgdzXwNKxRPbA==",
      "dev": true,
      "license": "MPL-2.0",
      "peer": true,
      "dependencies": {
        "@ethereumjs/rlp": "^4.0.1",
        "ethereum-cryptography": "^2.0.0",
        "micro-ftch": "^0.3.1"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@ethereumjs/util/node_modules/@noble/curves": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/@noble/curves/-/curves-1.4.2.tgz",
      "integrity": "sha512-TavHr8qycMChk8UwMld0ZDRvatedkzWfH8IiaeGCfymOP5i0hSCozz9vHOL0nkwk7HRMlFnAiKpS2jrUmSybcw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@noble/hashes": "1.4.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@ethereumjs/util/node_modules/@noble/hashes": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@noble/hashes/-/hashes-1.4.0.tgz",
      "integrity": "sha512-V1JJ1WTRUqHHrOSh597hURcMqVKVGL/ea3kv0gSnEdsEZ0/+VyPghM1lMNGc00z7CIQorSvbKpuJkxvuHbvdbg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 16"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@ethereumjs/util/node_modules/@scure/bip32": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@scure/bip32/-/bip32-1.4.0.tgz",
      "integrity": "sha512-sVUpc0Vq3tXCkDGYVWGIZTRfnvu8LoTDaev7vbwh0omSvVORONr960MQWdKqJDCReIEmTj3PAr73O3aoxz7OPg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@noble/curves": "~1.4.0",
        "@noble/hashes": "~1.4.0",
        "@scure/base": "~1.1.6"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@ethereumjs/util/node_modules/@scure/bip39": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@scure/bip39/-/bip39-1.3.0.tgz",
      "integrity": "sha512-disdg7gHuTDZtY+ZdkmLpPCk7fxZSu3gBiEGuoC1XYxv9cGx3Z6cpTggCgW6odSOOIXCiDjuGejW+aJKCY/pIQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@noble/hashes": "~1.4.0",
        "@scure/base": "~1.1.6"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@ethereumjs/util/node_modules/ethereum-cryptography": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/ethereum-cryptography/-/ethereum-cryptography-2.2.1.tgz",
      "integrity": "sha512-r/W8lkHSiTLxUxW8Rf3u4HGB0xQweG2RyETjywylKZSzLWoWAijRz8WCuOtJ6wah+avllXBqZuk29HCCvhEIRg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@noble/curves": "1.4.2",
        "@noble/hashes": "1.4.0",
        "@scure/bip32": "1.4.0",
        "@scure/bip39": "1.3.0"
      }
    },
    "node_modules/@ethersproject/abi": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/abi/-/abi-5.7.0.tgz",
      "integrity": "sha512-351ktp42TiRcYB3H1OP8yajPeAQstMW/yCFokj/AthP9bLHzQFPlOrxOcwYEDkUAICmOHljvN4K39OMTMUa9RA==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/address": "^5.7.0",
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/constants": "^5.7.0",
        "@ethersproject/hash": "^5.7.0",
        "@ethersproject/keccak256": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/strings": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/abstract-provider": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/abstract-provider/-/abstract-provider-5.7.0.tgz",
      "integrity": "sha512-R41c9UkchKCpAqStMYUpdunjo3pkEvZC3FAwZn5S5MGbXoMQOHIdHItezTETxAO5bevtMApSyEhn9+CHcDsWBw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/networks": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/transactions": "^5.7.0",
        "@ethersproject/web": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/abstract-signer": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/abstract-signer/-/abstract-signer-5.7.0.tgz",
      "integrity": "sha512-a16V8bq1/Cz+TGCkE2OPMTOUDLS3grCpdjoJCYNnVBbdYEMSgKrU0+B90s8b6H+ByYTBZN7a3g76jdIJi7UfKQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/abstract-provider": "^5.7.0",
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/properties": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/address": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/address/-/address-5.7.0.tgz",
      "integrity": "sha512-9wYhYt7aghVGo758POM5nqcOMaE168Q6aRLJZwUmiqSrAungkG74gSSeKEIR7ukixesdRZGPgVqme6vmxs1fkA==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/keccak256": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/rlp": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/base64": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/base64/-/base64-5.7.0.tgz",
      "integrity": "sha512-Dr8tcHt2mEbsZr/mwTPIQAf3Ai0Bks/7gTw9dSqk1mQvhW3XvRlmDJr/4n+wg1JmCl16NZue17CDh8xb/vZ0sQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/basex": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/basex/-/basex-5.7.0.tgz",
      "integrity": "sha512-ywlh43GwZLv2Voc2gQVTKBoVQ1mti3d8HK5aMxsfu/nRDnMmNqaSJ3r3n85HBByT8OpoY96SXM1FogC533T4zw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/properties": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/bignumber": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/bignumber/-/bignumber-5.7.0.tgz",
      "integrity": "sha512-n1CAdIHRWjSucQO3MC1zPSVgV/6dy/fjL9pMrPP9peL+QxEg9wOsVqwD4+818B6LUEtaXzVHQiuivzRoxPxUGw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "bn.js": "^5.2.1"
      }
    },
    "node_modules/@ethersproject/bytes": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/bytes/-/bytes-5.7.0.tgz",
      "integrity": "sha512-nsbxwgFXWh9NyYWo+U8atvmMsSdKJprTcICAkvbBffT75qDocbuggBU0SJiVK2MuTrp0q+xvLkTnGMPK1+uA9A==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/logger": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/constants": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/constants/-/constants-5.7.0.tgz",
      "integrity": "sha512-DHI+y5dBNvkpYUMiRQyxRBYBefZkJfo70VUkUAsRjcPs47muV9evftfZ0PJVCXYbAiCgght0DtcF9srFQmIgWA==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/bignumber": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/contracts": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/contracts/-/contracts-5.7.0.tgz",
      "integrity": "sha512-5GJbzEU3X+d33CdfPhcyS+z8MzsTrBGk/sc+G+59+tPa9yFkl6HQ9D6L0QMgNTA9q8dT0XKxxkyp883XsQvbbg==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/abi": "^5.7.0",
        "@ethersproject/abstract-provider": "^5.7.0",
        "@ethersproject/abstract-signer": "^5.7.0",
        "@ethersproject/address": "^5.7.0",
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/constants": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/transactions": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/hash": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/hash/-/hash-5.7.0.tgz",
      "integrity": "sha512-qX5WrQfnah1EFnO5zJv1v46a8HW0+E5xuBBDTwMFZLuVTx0tbU2kkx15NqdjxecrLGatQN9FGQKpb1FKdHCt+g==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/abstract-signer": "^5.7.0",
        "@ethersproject/address": "^5.7.0",
        "@ethersproject/base64": "^5.7.0",
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/keccak256": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/strings": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/hdnode": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/hdnode/-/hdnode-5.7.0.tgz",
      "integrity": "sha512-OmyYo9EENBPPf4ERhR7oj6uAtUAhYGqOnIS+jE5pTXvdKBS99ikzq1E7Iv0ZQZ5V36Lqx1qZLeak0Ra16qpeOg==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/abstract-signer": "^5.7.0",
        "@ethersproject/basex": "^5.7.0",
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/pbkdf2": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/sha2": "^5.7.0",
        "@ethersproject/signing-key": "^5.7.0",
        "@ethersproject/strings": "^5.7.0",
        "@ethersproject/transactions": "^5.7.0",
        "@ethersproject/wordlists": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/json-wallets": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/json-wallets/-/json-wallets-5.7.0.tgz",
      "integrity": "sha512-8oee5Xgu6+RKgJTkvEMl2wDgSPSAQ9MB/3JYjFV9jlKvcYHUXZC+cQp0njgmxdHkYWn8s6/IqIZYm0YWCjO/0g==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/abstract-signer": "^5.7.0",
        "@ethersproject/address": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/hdnode": "^5.7.0",
        "@ethersproject/keccak256": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/pbkdf2": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/random": "^5.7.0",
        "@ethersproject/strings": "^5.7.0",
        "@ethersproject/transactions": "^5.7.0",
        "aes-js": "3.0.0",
        "scrypt-js": "3.0.1"
      }
    },
    "node_modules/@ethersproject/json-wallets/node_modules/aes-js": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/aes-js/-/aes-js-3.0.0.tgz",
      "integrity": "sha512-H7wUZRn8WpTq9jocdxQ2c8x2sKo9ZVmzfRE13GiNJXfp7NcKYEdvl3vspKjXox6RIG2VtaRe4JFvxG4rqp2Zuw==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/@ethersproject/keccak256": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/keccak256/-/keccak256-5.7.0.tgz",
      "integrity": "sha512-2UcPboeL/iW+pSg6vZ6ydF8tCnv3Iu/8tUmLLzWWGzxWKFFqOBQFLo6uLUv6BDrLgCDfN28RJ/wtByx+jZ4KBg==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "js-sha3": "0.8.0"
      }
    },
    "node_modules/@ethersproject/logger": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/logger/-/logger-5.7.0.tgz",
      "integrity": "sha512-0odtFdXu/XHtjQXJYA3u9G0G8btm0ND5Cu8M7i5vhEcE8/HmF4Lbdqanwyv4uQTr2tx6b7fQRmgLrsnpQlmnig==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT"
    },
    "node_modules/@ethersproject/networks": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/@ethersproject/networks/-/networks-5.7.1.tgz",
      "integrity": "sha512-n/MufjFYv3yFcUyfhnXotyDlNdFb7onmkSy8aQERi2PjNcnWQ66xXxa3XlS8nCcA8aJKJjIIMNJTC7tu80GwpQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/logger": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/pbkdf2": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/pbkdf2/-/pbkdf2-5.7.0.tgz",
      "integrity": "sha512-oR/dBRZR6GTyaofd86DehG72hY6NpAjhabkhxgr3X2FpJtJuodEl2auADWBZfhDHgVCbu3/H/Ocq2uC6dpNjjw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/sha2": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/properties": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/properties/-/properties-5.7.0.tgz",
      "integrity": "sha512-J87jy8suntrAkIZtecpxEPxY//szqr1mlBaYlQ0r4RCaiD2hjheqF9s1LVE8vVuJCXisjIP+JgtK/Do54ej4Sw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/logger": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/providers": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/@ethersproject/providers/-/providers-5.7.2.tgz",
      "integrity": "sha512-g34EWZ1WWAVgr4aptGlVBF8mhl3VWjv+8hoAnzStu8Ah22VHBsuGzP17eb6xDVRzw895G4W7vvx60lFFur/1Rg==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/abstract-provider": "^5.7.0",
        "@ethersproject/abstract-signer": "^5.7.0",
        "@ethersproject/address": "^5.7.0",
        "@ethersproject/base64": "^5.7.0",
        "@ethersproject/basex": "^5.7.0",
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/constants": "^5.7.0",
        "@ethersproject/hash": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/networks": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/random": "^5.7.0",
        "@ethersproject/rlp": "^5.7.0",
        "@ethersproject/sha2": "^5.7.0",
        "@ethersproject/strings": "^5.7.0",
        "@ethersproject/transactions": "^5.7.0",
        "@ethersproject/web": "^5.7.0",
        "bech32": "1.1.4",
        "ws": "7.4.6"
      }
    },
    "node_modules/@ethersproject/providers/node_modules/ws": {
      "version": "7.4.6",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.4.6.tgz",
      "integrity": "sha512-YmhHDO4MzaDLB+M9ym/mDA5z0naX8j7SIlT8f8z+I0VtzsRbekxEutHSme7NPS2qE8StCYQNUnfWdXta/Yu85A==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=8.3.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": "^5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/@ethersproject/random": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/random/-/random-5.7.0.tgz",
      "integrity": "sha512-19WjScqRA8IIeWclFme75VMXSBvi4e6InrUNuaR4s5pTF2qNhcGdCUwdxUVGtDDqC00sDLCO93jPQoDUH4HVmQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/logger": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/rlp": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/rlp/-/rlp-5.7.0.tgz",
      "integrity": "sha512-rBxzX2vK8mVF7b0Tol44t5Tb8gomOHkj5guL+HhzQ1yBh/ydjGnpw6at+X6Iw0Kp3OzzzkcKp8N9r0W4kYSs9w==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/logger": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/sha2": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/sha2/-/sha2-5.7.0.tgz",
      "integrity": "sha512-gKlH42riwb3KYp0reLsFTokByAKoJdgFCwI+CCiX/k+Jm2mbNs6oOaCjYQSlI1+XBVejwH2KrmCbMAT/GnRDQw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "hash.js": "1.1.7"
      }
    },
    "node_modules/@ethersproject/signing-key": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/signing-key/-/signing-key-5.7.0.tgz",
      "integrity": "sha512-MZdy2nL3wO0u7gkB4nA/pEf8lu1TlFswPNmy8AiYkfKTdO6eXBJyUdmHO/ehm/htHw9K/qF8ujnTyUAD+Ry54Q==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "bn.js": "^5.2.1",
        "elliptic": "6.5.4",
        "hash.js": "1.1.7"
      }
    },
    "node_modules/@ethersproject/solidity": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/solidity/-/solidity-5.7.0.tgz",
      "integrity": "sha512-HmabMd2Dt/raavyaGukF4XxizWKhKQ24DoLtdNbBmNKUOPqwjsKQSdV9GQtj9CBEea9DlzETlVER1gYeXXBGaA==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/keccak256": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/sha2": "^5.7.0",
        "@ethersproject/strings": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/strings": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/strings/-/strings-5.7.0.tgz",
      "integrity": "sha512-/9nu+lj0YswRNSH0NXYqrh8775XNyEdUQAuf3f+SmOrnVewcJ5SBNAjF7lpgehKi4abvNNXyf+HX86czCdJ8Mg==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/constants": "^5.7.0",
        "@ethersproject/logger": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/transactions": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/transactions/-/transactions-5.7.0.tgz",
      "integrity": "sha512-kmcNicCp1lp8qanMTC3RIikGgoJ80ztTyvtsFvCYpSCfkjhD0jZ2LOrnbcuxuToLIUYYf+4XwD1rP+B/erDIhQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/address": "^5.7.0",
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/constants": "^5.7.0",
        "@ethersproject/keccak256": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/rlp": "^5.7.0",
        "@ethersproject/signing-key": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/units": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/units/-/units-5.7.0.tgz",
      "integrity": "sha512-pD3xLMy3SJu9kG5xDGI7+xhTEmGXlEqXU4OfNapmfnxLVY4EMSSRp7j1k7eezutBPH7RBN/7QPnwR7hzNlEFeg==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/constants": "^5.7.0",
        "@ethersproject/logger": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/wallet": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/wallet/-/wallet-5.7.0.tgz",
      "integrity": "sha512-MhmXlJXEJFBFVKrDLB4ZdDzxcBxQ3rLyCkhNqVu3CDYvR97E+8r01UgrI+TI99Le+aYm/in/0vp86guJuM7FCA==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/abstract-provider": "^5.7.0",
        "@ethersproject/abstract-signer": "^5.7.0",
        "@ethersproject/address": "^5.7.0",
        "@ethersproject/bignumber": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/hash": "^5.7.0",
        "@ethersproject/hdnode": "^5.7.0",
        "@ethersproject/json-wallets": "^5.7.0",
        "@ethersproject/keccak256": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/random": "^5.7.0",
        "@ethersproject/signing-key": "^5.7.0",
        "@ethersproject/transactions": "^5.7.0",
        "@ethersproject/wordlists": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/web": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/@ethersproject/web/-/web-5.7.1.tgz",
      "integrity": "sha512-Gueu8lSvyjBWL4cYsWsjh6MtMwM0+H4HvqFPZfB6dV8ctbP9zFAO73VG1cMWae0FLPCtz0peKPpZY8/ugJJX2w==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@ethersproject/base64": "^5.7.0",
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/strings": "^5.7.0"
      }
    },
    "node_modules/@ethersproject/wordlists": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/@ethersproject/wordlists/-/wordlists-5.7.0.tgz",
      "integrity": "sha512-S2TFNJNfHWVHNE6cNDjbVlZ6MgE17MIxMbMg2zv3wn+3XSJGosL1m9ZVv3GXCf/2ymSsQ+hRI5IzoMJTG6aoVA==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/bytes": "^5.7.0",
        "@ethersproject/hash": "^5.7.0",
        "@ethersproject/logger": "^5.7.0",
        "@ethersproject/properties": "^5.7.0",
        "@ethersproject/strings": "^5.7.0"
      }
    },
    "node_modules/@fastify/busboy": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/@fastify/busboy/-/busboy-2.1.1.tgz",
      "integrity": "sha512-vBZP4NlzfOlerQTnba4aqZoMhE/a9HY7HRqoOPaETQcSQuWEIyZMHGfVu6w9wGtGK5fED5qRs2DteVCjOH60sA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@metamask/eth-sig-util": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@metamask/eth-sig-util/-/eth-sig-util-4.0.1.tgz",
      "integrity": "sha512-tghyZKLHZjcdlDqCA3gNZmLeR0XvOE9U1qoQO9ohyAZT6Pya+H9vkBPcsyXytmYLNgVoin7CKCmweo/R43V+tQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "ethereumjs-abi": "^0.6.8",
        "ethereumjs-util": "^6.2.1",
        "ethjs-util": "^0.1.6",
        "tweetnacl": "^1.0.3",
        "tweetnacl-util": "^0.15.1"
      },
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/@noble/curves": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@noble/curves/-/curves-1.2.0.tgz",
      "integrity": "sha512-oYclrNgRaM9SsBUBVbb8M6DTV7ZHRTKugureoYEncY5c65HOmRzvSiTE3y5CYaPYJA/GVkrhXEoF0M3Ya9PMnw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@noble/hashes": "1.3.2"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@noble/hashes": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@noble/hashes/-/hashes-1.3.2.tgz",
      "integrity": "sha512-MVC8EAQp7MvEcm30KWENFjgR+Mkmf+D189XJTkFIlwohU5hcBbn1ZkKq7KVTi2Hme3PMGF390DaL52beVrIihQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 16"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@noble/secp256k1": {
      "version": "1.7.1",
      "resolved": "https://registry.npmjs.org/@noble/secp256k1/-/secp256k1-1.7.1.tgz",
      "integrity": "sha512-hOUk6AyBFmqVrv7k5WAw/LpszxVbj9gGN4JRkIX52fdFAj1UA61KXmZDvqVEm+pOyec3+fIeZB02LYa/pWOArw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "license": "MIT"
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nomicfoundation/edr": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/edr/-/edr-0.6.4.tgz",
      "integrity": "sha512-YgrSuT3yo5ZQkbvBGqQ7hG+RDvz3YygSkddg4tb1Z0Y6pLXFzwrcEwWaJCFAVeeZxdxGfCgGMUYgRVneK+WXkw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nomicfoundation/edr-darwin-arm64": "0.6.4",
        "@nomicfoundation/edr-darwin-x64": "0.6.4",
        "@nomicfoundation/edr-linux-arm64-gnu": "0.6.4",
        "@nomicfoundation/edr-linux-arm64-musl": "0.6.4",
        "@nomicfoundation/edr-linux-x64-gnu": "0.6.4",
        "@nomicfoundation/edr-linux-x64-musl": "0.6.4",
        "@nomicfoundation/edr-win32-x64-msvc": "0.6.4"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/@nomicfoundation/edr-darwin-arm64": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/edr-darwin-arm64/-/edr-darwin-arm64-0.6.4.tgz",
      "integrity": "sha512-QNQErISLgssV9+qia8sIjRANqtbW8snSDvjspixT/kSQ5ZSGxxctTg7x72wPSrcu8+EBEveIe5uqENIp5GH8HQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/@nomicfoundation/edr-darwin-x64": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/edr-darwin-x64/-/edr-darwin-x64-0.6.4.tgz",
      "integrity": "sha512-cjVmREiwByyc9+oGfvAh49IAw+oVJHF9WWYRD+Tm/ZlSpnEVWxrGNBak2bd/JSYjn+mZE7gmWS4SMRi4nKaLUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/@nomicfoundation/edr-linux-arm64-gnu": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/edr-linux-arm64-gnu/-/edr-linux-arm64-gnu-0.6.4.tgz",
      "integrity": "sha512-96o9kRIVD6W5VkgKvUOGpWyUGInVQ5BRlME2Fa36YoNsRQMaKtmYJEU0ACosYES6ZTpYC8U5sjMulvPtVoEfOA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/@nomicfoundation/edr-linux-arm64-musl": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/edr-linux-arm64-musl/-/edr-linux-arm64-musl-0.6.4.tgz",
      "integrity": "sha512-+JVEW9e5plHrUfQlSgkEj/UONrIU6rADTEk+Yp9pbe+mzNkJdfJYhs5JYiLQRP4OjxH4QOrXI97bKU6FcEbt5Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/@nomicfoundation/edr-linux-x64-gnu": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/edr-linux-x64-gnu/-/edr-linux-x64-gnu-0.6.4.tgz",
      "integrity": "sha512-nzYWW+fO3EZItOeP4CrdMgDXfaGBIBkKg0Y/7ySpUxLqzut40O4Mb0/+quqLAFkacUSWMlFp8nsmypJfOH5zoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/@nomicfoundation/edr-linux-x64-musl": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/edr-linux-x64-musl/-/edr-linux-x64-musl-0.6.4.tgz",
      "integrity": "sha512-QFRoE9qSQ2boRrVeQ1HdzU+XN7NUgwZ1SIy5DQt4d7jCP+5qTNsq8LBNcqhRBOATgO63nsweNUhxX/Suj5r1Sw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/@nomicfoundation/edr-win32-x64-msvc": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/edr-win32-x64-msvc/-/edr-win32-x64-msvc-0.6.4.tgz",
      "integrity": "sha512-2yopjelNkkCvIjUgBGhrn153IBPLwnsDeNiq6oA0WkeM8tGmQi4td+PGi9jAriUDAkc59Yoi2q9hYA6efiY7Zw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/@nomicfoundation/ethereumjs-common": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/ethereumjs-common/-/ethereumjs-common-4.0.4.tgz",
      "integrity": "sha512-9Rgb658lcWsjiicr5GzNCjI1llow/7r0k50dLL95OJ+6iZJcVbi15r3Y0xh2cIO+zgX0WIHcbzIu6FeQf9KPrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nomicfoundation/ethereumjs-util": "9.0.4"
      }
    },
    "node_modules/@nomicfoundation/ethereumjs-rlp": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/ethereumjs-rlp/-/ethereumjs-rlp-5.0.4.tgz",
      "integrity": "sha512-8H1S3s8F6QueOc/X92SdrA4RDenpiAEqMg5vJH99kcQaCy/a3Q6fgseo75mgWlbanGJXSlAPtnCeG9jvfTYXlw==",
      "dev": true,
      "license": "MPL-2.0",
      "bin": {
        "rlp": "bin/rlp.cjs"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@nomicfoundation/ethereumjs-tx": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/ethereumjs-tx/-/ethereumjs-tx-5.0.4.tgz",
      "integrity": "sha512-Xjv8wAKJGMrP1f0n2PeyfFCCojHd7iS3s/Ab7qzF1S64kxZ8Z22LCMynArYsVqiFx6rzYy548HNVEyI+AYN/kw==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "@nomicfoundation/ethereumjs-common": "4.0.4",
        "@nomicfoundation/ethereumjs-rlp": "5.0.4",
        "@nomicfoundation/ethereumjs-util": "9.0.4",
        "ethereum-cryptography": "0.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "c-kzg": "^2.1.2"
      },
      "peerDependenciesMeta": {
        "c-kzg": {
          "optional": true
        }
      }
    },
    "node_modules/@nomicfoundation/ethereumjs-tx/node_modules/ethereum-cryptography": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/ethereum-cryptography/-/ethereum-cryptography-0.1.3.tgz",
      "integrity": "sha512-w8/4x1SGGzc+tO97TASLja6SLd3fRIK2tLVcV2Gx4IB21hE19atll5Cq9o3d0ZmAYC/8aw0ipieTSiekAea4SQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/pbkdf2": "^3.0.0",
        "@types/secp256k1": "^4.0.1",
        "blakejs": "^1.1.0",
        "browserify-aes": "^1.2.0",
        "bs58check": "^2.1.2",
        "create-hash": "^1.2.0",
        "create-hmac": "^1.1.7",
        "hash.js": "^1.1.7",
        "keccak": "^3.0.0",
        "pbkdf2": "^3.0.17",
        "randombytes": "^2.1.0",
        "safe-buffer": "^5.1.2",
        "scrypt-js": "^3.0.0",
        "secp256k1": "^4.0.1",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/@nomicfoundation/ethereumjs-util": {
      "version": "9.0.4",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/ethereumjs-util/-/ethereumjs-util-9.0.4.tgz",
      "integrity": "sha512-sLOzjnSrlx9Bb9EFNtHzK/FJFsfg2re6bsGqinFinH1gCqVfz9YYlXiMWwDM4C/L4ywuHFCYwfKTVr/QHQcU0Q==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "@nomicfoundation/ethereumjs-rlp": "5.0.4",
        "ethereum-cryptography": "0.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "c-kzg": "^2.1.2"
      },
      "peerDependenciesMeta": {
        "c-kzg": {
          "optional": true
        }
      }
    },
    "node_modules/@nomicfoundation/ethereumjs-util/node_modules/ethereum-cryptography": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/ethereum-cryptography/-/ethereum-cryptography-0.1.3.tgz",
      "integrity": "sha512-w8/4x1SGGzc+tO97TASLja6SLd3fRIK2tLVcV2Gx4IB21hE19atll5Cq9o3d0ZmAYC/8aw0ipieTSiekAea4SQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/pbkdf2": "^3.0.0",
        "@types/secp256k1": "^4.0.1",
        "blakejs": "^1.1.0",
        "browserify-aes": "^1.2.0",
        "bs58check": "^2.1.2",
        "create-hash": "^1.2.0",
        "create-hmac": "^1.1.7",
        "hash.js": "^1.1.7",
        "keccak": "^3.0.0",
        "pbkdf2": "^3.0.17",
        "randombytes": "^2.1.0",
        "safe-buffer": "^5.1.2",
        "scrypt-js": "^3.0.0",
        "secp256k1": "^4.0.1",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/@nomicfoundation/hardhat-chai-matchers": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/hardhat-chai-matchers/-/hardhat-chai-matchers-2.0.8.tgz",
      "integrity": "sha512-Z5PiCXH4xhNLASROlSUOADfhfpfhYO6D7Hn9xp8PddmHey0jq704cr6kfU8TRrQ4PUZbpfsZadPj+pCfZdjPIg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/chai-as-promised": "^7.1.3",
        "chai-as-promised": "^7.1.1",
        "deep-eql": "^4.0.1",
        "ordinal": "^1.0.3"
      },
      "peerDependencies": {
        "@nomicfoundation/hardhat-ethers": "^3.0.0",
        "chai": "^4.2.0",
        "ethers": "^6.1.0",
        "hardhat": "^2.9.4"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ethers": {
      "version": "3.0.8",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/hardhat-ethers/-/hardhat-ethers-3.0.8.tgz",
      "integrity": "sha512-zhOZ4hdRORls31DTOqg+GmEZM0ujly8GGIuRY7t7szEk2zW/arY1qDug/py8AEktT00v5K+b6RvbVog+va51IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^4.1.1",
        "lodash.isequal": "^4.5.0"
      },
      "peerDependencies": {
        "ethers": "^6.1.0",
        "hardhat": "^2.0.0"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition": {
      "version": "0.15.7",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/hardhat-ignition/-/hardhat-ignition-0.15.7.tgz",
      "integrity": "sha512-RFhGazR0/JqHxuuIxjjMmM+nWFqEvA7wcVqcX7vUqqmAIGuok4HhnWQH8aOvBaVguiXvvlFDJL0PIlxmkFgIUg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@nomicfoundation/ignition-core": "^0.15.7",
        "@nomicfoundation/ignition-ui": "^0.15.7",
        "chalk": "^4.0.0",
        "debug": "^4.3.2",
        "fs-extra": "^10.0.0",
        "json5": "^2.2.3",
        "prompts": "^2.4.2"
      },
      "peerDependencies": {
        "@nomicfoundation/hardhat-verify": "^2.0.1",
        "hardhat": "^2.18.0"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition-ethers": {
      "version": "0.15.7",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/hardhat-ignition-ethers/-/hardhat-ignition-ethers-0.15.7.tgz",
      "integrity": "sha512-pUZWQeFNMwDe6F/yKIJsCo+87elk/M/Edjp6AnWWIBplRyPa13Nh63+yOqMSSd9Mx9lLuBaEGnYXoI2Uz2wYZA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "peerDependencies": {
        "@nomicfoundation/hardhat-ethers": "^3.0.4",
        "@nomicfoundation/hardhat-ignition": "^0.15.7",
        "@nomicfoundation/ignition-core": "^0.15.7",
        "ethers": "^6.7.0",
        "hardhat": "^2.18.0"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/@nomicfoundation/hardhat-ignition/node_modules/fs-extra": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
      "integrity": "sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition/node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@nomicfoundation/hardhat-ignition/node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@nomicfoundation/hardhat-network-helpers": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/hardhat-network-helpers/-/hardhat-network-helpers-1.0.12.tgz",
      "integrity": "sha512-xTNQNI/9xkHvjmCJnJOTyqDSl8uq1rKb2WOVmixQxFtRd7Oa3ecO8zM0cyC2YmOK+jHB9WPZ+F/ijkHg1CoORA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "ethereumjs-util": "^7.1.4"
      },
      "peerDependencies": {
        "hardhat": "^2.9.5"
      }
    },
    "node_modules/@nomicfoundation/hardhat-network-helpers/node_modules/ethereum-cryptography": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/ethereum-cryptography/-/ethereum-cryptography-0.1.3.tgz",
      "integrity": "sha512-w8/4x1SGGzc+tO97TASLja6SLd3fRIK2tLVcV2Gx4IB21hE19atll5Cq9o3d0ZmAYC/8aw0ipieTSiekAea4SQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/pbkdf2": "^3.0.0",
        "@types/secp256k1": "^4.0.1",
        "blakejs": "^1.1.0",
        "browserify-aes": "^1.2.0",
        "bs58check": "^2.1.2",
        "create-hash": "^1.2.0",
        "create-hmac": "^1.1.7",
        "hash.js": "^1.1.7",
        "keccak": "^3.0.0",
        "pbkdf2": "^3.0.17",
        "randombytes": "^2.1.0",
        "safe-buffer": "^5.1.2",
        "scrypt-js": "^3.0.0",
        "secp256k1": "^4.0.1",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/@nomicfoundation/hardhat-network-helpers/node_modules/ethereumjs-util": {
      "version": "7.1.5",
      "resolved": "https://registry.npmjs.org/ethereumjs-util/-/ethereumjs-util-7.1.5.tgz",
      "integrity": "sha512-SDl5kKrQAudFBUe5OJM9Ac6WmMyYmXX/6sTmLZ3ffG2eY6ZIGBes3pEDxNN6V72WyOw4CPD5RomKdsa8DAAwLg==",
      "dev": true,
      "license": "MPL-2.0",
      "peer": true,
      "dependencies": {
        "@types/bn.js": "^5.1.0",
        "bn.js": "^5.1.2",
        "create-hash": "^1.1.2",
        "ethereum-cryptography": "^0.1.3",
        "rlp": "^2.2.4"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/@nomicfoundation/hardhat-toolbox": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/hardhat-toolbox/-/hardhat-toolbox-5.0.0.tgz",
      "integrity": "sha512-FnUtUC5PsakCbwiVNsqlXVIWG5JIb5CEZoSXbJUsEBun22Bivx2jhF1/q9iQbzuaGpJKFQyOhemPB2+XlEE6pQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@nomicfoundation/hardhat-chai-matchers": "^2.0.0",
        "@nomicfoundation/hardhat-ethers": "^3.0.0",
        "@nomicfoundation/hardhat-ignition-ethers": "^0.15.0",
        "@nomicfoundation/hardhat-network-helpers": "^1.0.0",
        "@nomicfoundation/hardhat-verify": "^2.0.0",
        "@typechain/ethers-v6": "^0.5.0",
        "@typechain/hardhat": "^9.0.0",
        "@types/chai": "^4.2.0",
        "@types/mocha": ">=9.1.0",
        "@types/node": ">=18.0.0",
        "chai": "^4.2.0",
        "ethers": "^6.4.0",
        "hardhat": "^2.11.0",
        "hardhat-gas-reporter": "^1.0.8",
        "solidity-coverage": "^0.8.1",
        "ts-node": ">=8.0.0",
        "typechain": "^8.3.0",
        "typescript": ">=4.5.0"
      }
    },
    "node_modules/@nomicfoundation/hardhat-verify": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/hardhat-verify/-/hardhat-verify-2.0.11.tgz",
      "integrity": "sha512-lGIo4dNjVQFdsiEgZp3KP6ntLiF7xJEJsbNHfSyIiFCyI0Yv0518ElsFtMC5uCuHEChiBBMrib9jWQvHHT+X3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@ethersproject/abi": "^5.1.2",
        "@ethersproject/address": "^5.0.2",
        "cbor": "^8.1.0",
        "chalk": "^2.4.2",
        "debug": "^4.1.1",
        "lodash.clonedeep": "^4.5.0",
        "semver": "^6.3.0",
        "table": "^6.8.0",
        "undici": "^5.14.0"
      },
      "peerDependencies": {
        "hardhat": "^2.0.4"
      }
    },
    "node_modules/@nomicfoundation/ignition-core": {
      "version": "0.15.7",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/ignition-core/-/ignition-core-0.15.7.tgz",
      "integrity": "sha512-C4/0V/q2gNxKDt88cMr+Oxlf4NINQ7QgmJyciQ1/6UdCRUg+/Pgdgpd3vgGXQVTotq50Q/BU4ofNUAD/8HRqtg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/address": "5.6.1",
        "@nomicfoundation/solidity-analyzer": "^0.1.1",
        "cbor": "^9.0.0",
        "debug": "^4.3.2",
        "ethers": "^6.7.0",
        "fs-extra": "^10.0.0",
        "immer": "10.0.2",
        "lodash": "4.17.21",
        "ndjson": "2.0.0"
      }
    },
    "node_modules/@nomicfoundation/ignition-core/node_modules/@ethersproject/address": {
      "version": "5.6.1",
      "resolved": "https://registry.npmjs.org/@ethersproject/address/-/address-5.6.1.tgz",
      "integrity": "sha512-uOgF0kS5MJv9ZvCz7x6T2EXJSzotiybApn4XlOgoTX0xdtyVIJ7pF+6cGPxiEq/dpBiTfMiw7Yc81JcwhSYA0Q==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/bignumber": "^5.6.2",
        "@ethersproject/bytes": "^5.6.1",
        "@ethersproject/keccak256": "^5.6.1",
        "@ethersproject/logger": "^5.6.0",
        "@ethersproject/rlp": "^5.6.1"
      }
    },
    "node_modules/@nomicfoundation/ignition-core/node_modules/cbor": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/cbor/-/cbor-9.0.2.tgz",
      "integrity": "sha512-JPypkxsB10s9QOWwa6zwPzqE1Md3vqpPc+cai4sAecuCsRyAtAl/pMyhPlMbT/xtPnm2dznJZYRLui57qiRhaQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "nofilter": "^3.1.0"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@nomicfoundation/ignition-core/node_modules/fs-extra": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
      "integrity": "sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@nomicfoundation/ignition-core/node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/@nomicfoundation/ignition-core/node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@nomicfoundation/ignition-ui": {
      "version": "0.15.7",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/ignition-ui/-/ignition-ui-0.15.7.tgz",
      "integrity": "sha512-pj2LmXylgbHOTNrkFqFrre/FAOjcwYl4VKIKVH/QMMBH/DatbiT8aC5n9o2fbLD8uwlPEesD+uXZuKCE71KFBg==",
      "dev": true,
      "peer": true
    },
    "node_modules/@nomicfoundation/solidity-analyzer": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/solidity-analyzer/-/solidity-analyzer-0.1.2.tgz",
      "integrity": "sha512-q4n32/FNKIhQ3zQGGw5CvPF6GTvDCpYwIf7bEY/dZTZbgfDsHyjJwURxUJf3VQuuJj+fDIFl4+KkBVbw4Ef6jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      },
      "optionalDependencies": {
        "@nomicfoundation/solidity-analyzer-darwin-arm64": "0.1.2",
        "@nomicfoundation/solidity-analyzer-darwin-x64": "0.1.2",
        "@nomicfoundation/solidity-analyzer-linux-arm64-gnu": "0.1.2",
        "@nomicfoundation/solidity-analyzer-linux-arm64-musl": "0.1.2",
        "@nomicfoundation/solidity-analyzer-linux-x64-gnu": "0.1.2",
        "@nomicfoundation/solidity-analyzer-linux-x64-musl": "0.1.2",
        "@nomicfoundation/solidity-analyzer-win32-x64-msvc": "0.1.2"
      }
    },
    "node_modules/@nomicfoundation/solidity-analyzer-darwin-arm64": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/solidity-analyzer-darwin-arm64/-/solidity-analyzer-darwin-arm64-0.1.2.tgz",
      "integrity": "sha512-JaqcWPDZENCvm++lFFGjrDd8mxtf+CtLd2MiXvMNTBD33dContTZ9TWETwNFwg7JTJT5Q9HEecH7FA+HTSsIUw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/@nomicfoundation/solidity-analyzer-darwin-x64": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/solidity-analyzer-darwin-x64/-/solidity-analyzer-darwin-x64-0.1.2.tgz",
      "integrity": "sha512-fZNmVztrSXC03e9RONBT+CiksSeYcxI1wlzqyr0L7hsQlK1fzV+f04g2JtQ1c/Fe74ZwdV6aQBdd6Uwl1052sw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/@nomicfoundation/solidity-analyzer-linux-arm64-gnu": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/solidity-analyzer-linux-arm64-gnu/-/solidity-analyzer-linux-arm64-gnu-0.1.2.tgz",
      "integrity": "sha512-3d54oc+9ZVBuB6nbp8wHylk4xh0N0Gc+bk+/uJae+rUgbOBwQSfuGIbAZt1wBXs5REkSmynEGcqx6DutoK0tPA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/@nomicfoundation/solidity-analyzer-linux-arm64-musl": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/solidity-analyzer-linux-arm64-musl/-/solidity-analyzer-linux-arm64-musl-0.1.2.tgz",
      "integrity": "sha512-iDJfR2qf55vgsg7BtJa7iPiFAsYf2d0Tv/0B+vhtnI16+wfQeTbP7teookbGvAo0eJo7aLLm0xfS/GTkvHIucA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/@nomicfoundation/solidity-analyzer-linux-x64-gnu": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/solidity-analyzer-linux-x64-gnu/-/solidity-analyzer-linux-x64-gnu-0.1.2.tgz",
      "integrity": "sha512-9dlHMAt5/2cpWyuJ9fQNOUXFB/vgSFORg1jpjX1Mh9hJ/MfZXlDdHQ+DpFCs32Zk5pxRBb07yGvSHk9/fezL+g==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/@nomicfoundation/solidity-analyzer-linux-x64-musl": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/solidity-analyzer-linux-x64-musl/-/solidity-analyzer-linux-x64-musl-0.1.2.tgz",
      "integrity": "sha512-GzzVeeJob3lfrSlDKQw2bRJ8rBf6mEYaWY+gW0JnTDHINA0s2gPR4km5RLIj1xeZZOYz4zRw+AEeYgLRqB2NXg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/@nomicfoundation/solidity-analyzer-win32-x64-msvc": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/@nomicfoundation/solidity-analyzer-win32-x64-msvc/-/solidity-analyzer-win32-x64-msvc-0.1.2.tgz",
      "integrity": "sha512-Fdjli4DCcFHb4Zgsz0uEJXZ2K7VEO+w5KVv7HmT7WO10iODdU9csC2az4jrhEsRtiR9Gfd74FlG0NYlw1BMdyA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/@openzeppelin/contracts": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/@openzeppelin/contracts/-/contracts-5.1.0.tgz",
      "integrity": "sha512-p1ULhl7BXzjjbha5aqst+QMLY+4/LCWADXOCsmLHRM77AqiPjnd9vvUN9sosUfhL9JGKpZ0TjEGxgvnizmWGSA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@scure/base": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/@scure/base/-/base-1.1.9.tgz",
      "integrity": "sha512-8YKhl8GHiNI/pU2VMaofa2Tor7PJRAjwQLBBuilkJ9L5+13yVbC7JO/wS7piioAvPSwR3JKM1IJ/u4xQzbcXKg==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@scure/bip32": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@scure/bip32/-/bip32-1.1.5.tgz",
      "integrity": "sha512-XyNh1rB0SkEqd3tXcXMi+Xe1fvg+kUIcoRIEujP1Jgv7DqW2r9lg3Ah0NkFaCs9sTkQAQA8kw7xiRXzENi9Rtw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@noble/hashes": "~1.2.0",
        "@noble/secp256k1": "~1.7.0",
        "@scure/base": "~1.1.0"
      }
    },
    "node_modules/@scure/bip32/node_modules/@noble/hashes": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@noble/hashes/-/hashes-1.2.0.tgz",
      "integrity": "sha512-FZfhjEDbT5GRswV3C6uvLPHMiVD6lQBmpoX5+eSiPaMTXte/IKqI5dykDxzZB/WBeK/CDuQRBWarPdi3FNY2zQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "license": "MIT"
    },
    "node_modules/@scure/bip39": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@scure/bip39/-/bip39-1.1.1.tgz",
      "integrity": "sha512-t+wDck2rVkh65Hmv280fYdVdY25J9YeEUIgn2LG1WM6gxFkGzcksoDiUkWVpVp3Oex9xGC68JU2dSbUfwZ2jPg==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@noble/hashes": "~1.2.0",
        "@scure/base": "~1.1.0"
      }
    },
    "node_modules/@scure/bip39/node_modules/@noble/hashes": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@noble/hashes/-/hashes-1.2.0.tgz",
      "integrity": "sha512-FZfhjEDbT5GRswV3C6uvLPHMiVD6lQBmpoX5+eSiPaMTXte/IKqI5dykDxzZB/WBeK/CDuQRBWarPdi3FNY2zQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "license": "MIT"
    },
    "node_modules/@sentry/core": {
      "version": "5.30.0",
      "resolved": "https://registry.npmjs.org/@sentry/core/-/core-5.30.0.tgz",
      "integrity": "sha512-TmfrII8w1PQZSZgPpUESqjB+jC6MvZJZdLtE/0hZ+SrnKhW3x5WlYLvTXZpcWePYBku7rl2wn1RZu6uT0qCTeg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@sentry/hub": "5.30.0",
        "@sentry/minimal": "5.30.0",
        "@sentry/types": "5.30.0",
        "@sentry/utils": "5.30.0",
        "tslib": "^1.9.3"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@sentry/core/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/@sentry/hub": {
      "version": "5.30.0",
      "resolved": "https://registry.npmjs.org/@sentry/hub/-/hub-5.30.0.tgz",
      "integrity": "sha512-2tYrGnzb1gKz2EkMDQcfLrDTvmGcQPuWxLnJKXJvYTQDGLlEvi2tWz1VIHjunmOvJrB5aIQLhm+dcMRwFZDCqQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@sentry/types": "5.30.0",
        "@sentry/utils": "5.30.0",
        "tslib": "^1.9.3"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@sentry/hub/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/@sentry/minimal": {
      "version": "5.30.0",
      "resolved": "https://registry.npmjs.org/@sentry/minimal/-/minimal-5.30.0.tgz",
      "integrity": "sha512-BwWb/owZKtkDX+Sc4zCSTNcvZUq7YcH3uAVlmh/gtR9rmUvbzAA3ewLuB3myi4wWRAMEtny6+J/FN/x+2wn9Xw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@sentry/hub": "5.30.0",
        "@sentry/types": "5.30.0",
        "tslib": "^1.9.3"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@sentry/minimal/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/@sentry/node": {
      "version": "5.30.0",
      "resolved": "https://registry.npmjs.org/@sentry/node/-/node-5.30.0.tgz",
      "integrity": "sha512-Br5oyVBF0fZo6ZS9bxbJZG4ApAjRqAnqFFurMVJJdunNb80brh7a5Qva2kjhm+U6r9NJAB5OmDyPkA1Qnt+QVg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@sentry/core": "5.30.0",
        "@sentry/hub": "5.30.0",
        "@sentry/tracing": "5.30.0",
        "@sentry/types": "5.30.0",
        "@sentry/utils": "5.30.0",
        "cookie": "^0.4.1",
        "https-proxy-agent": "^5.0.0",
        "lru_map": "^0.3.3",
        "tslib": "^1.9.3"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@sentry/node/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/@sentry/tracing": {
      "version": "5.30.0",
      "resolved": "https://registry.npmjs.org/@sentry/tracing/-/tracing-5.30.0.tgz",
      "integrity": "sha512-dUFowCr0AIMwiLD7Fs314Mdzcug+gBVo/+NCMyDw8tFxJkwWAKl7Qa2OZxLQ0ZHjakcj1hNKfCQJ9rhyfOl4Aw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sentry/hub": "5.30.0",
        "@sentry/minimal": "5.30.0",
        "@sentry/types": "5.30.0",
        "@sentry/utils": "5.30.0",
        "tslib": "^1.9.3"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@sentry/tracing/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/@sentry/types": {
      "version": "5.30.0",
      "resolved": "https://registry.npmjs.org/@sentry/types/-/types-5.30.0.tgz",
      "integrity": "sha512-R8xOqlSTZ+htqrfteCWU5Nk0CDN5ApUTvrlvBuiH1DyP6czDZ4ktbZB0hAgBlVcK0U+qpD3ag3Tqqpa5Q67rPw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@sentry/utils": {
      "version": "5.30.0",
      "resolved": "https://registry.npmjs.org/@sentry/utils/-/utils-5.30.0.tgz",
      "integrity": "sha512-zaYmoH0NWWtvnJjC9/CBseXMtKHm/tm40sz3YfJRxeQjyzRqNQPgivpd9R/oDJCYj999mzdW382p/qi2ypjLww==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@sentry/types": "5.30.0",
        "tslib": "^1.9.3"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@sentry/utils/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/@solidity-parser/parser": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/@solidity-parser/parser/-/parser-0.14.5.tgz",
      "integrity": "sha512-6dKnHZn7fg/iQATVEzqyUOyEidbn05q7YA2mQ9hC0MMXhhV3/JrsxmFSYZAcr7j1yUP700LLhTruvJ3MiQmjJg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "antlr4ts": "^0.5.0-alpha.4"
      }
    },
    "node_modules/@tsconfig/node10": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.11.tgz",
      "integrity": "sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node12": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
      "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node14": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
      "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node16": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
      "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@typechain/ethers-v6": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/@typechain/ethers-v6/-/ethers-v6-0.5.1.tgz",
      "integrity": "sha512-F+GklO8jBWlsaVV+9oHaPh5NJdd6rAKN4tklGfInX1Q7h0xPgVLP39Jl3eCulPB5qexI71ZFHwbljx4ZXNfouA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "lodash": "^4.17.15",
        "ts-essentials": "^7.0.1"
      },
      "peerDependencies": {
        "ethers": "6.x",
        "typechain": "^8.3.2",
        "typescript": ">=4.7.0"
      }
    },
    "node_modules/@typechain/hardhat": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/@typechain/hardhat/-/hardhat-9.1.0.tgz",
      "integrity": "sha512-mtaUlzLlkqTlfPwB3FORdejqBskSnh+Jl8AIJGjXNAQfRQ4ofHADPl1+oU7Z3pAJzmZbUXII8MhOLQltcHgKnA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fs-extra": "^9.1.0"
      },
      "peerDependencies": {
        "@typechain/ethers-v6": "^0.5.1",
        "ethers": "^6.1.0",
        "hardhat": "^2.9.9",
        "typechain": "^8.3.2"
      }
    },
    "node_modules/@typechain/hardhat/node_modules/fs-extra": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
      "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typechain/hardhat/node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/@typechain/hardhat/node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@types/bn.js": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/@types/bn.js/-/bn.js-5.1.6.tgz",
      "integrity": "sha512-Xh8vSwUeMKeYYrj3cX4lGQgFSF/N03r+tv4AiLl1SucqV+uTQpxRcnM8AkXKHwYP9ZPXOYXRr2KPXpVlIvqh9w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/chai": {
      "version": "4.3.20",
      "resolved": "https://registry.npmjs.org/@types/chai/-/chai-4.3.20.tgz",
      "integrity": "sha512-/pC9HAB5I/xMlc5FP77qjCnI16ChlJfW0tGa0IUcFn38VJrTV6DeZ60NU5KZBtaOZqjdpwTWohz5HU1RrhiYxQ==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/@types/chai-as-promised": {
      "version": "7.1.8",
      "resolved": "https://registry.npmjs.org/@types/chai-as-promised/-/chai-as-promised-7.1.8.tgz",
      "integrity": "sha512-ThlRVIJhr69FLlh6IctTXFkmhtP3NpMZ2QGq69StYLyKZFp/HOp1VdKZj7RvfNWYYcJ1xlbLGLLWj1UvP5u/Gw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/chai": "*"
      }
    },
    "node_modules/@types/concat-stream": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/@types/concat-stream/-/concat-stream-1.6.1.tgz",
      "integrity": "sha512-eHE4cQPoj6ngxBZMvVf6Hw7Mh4jMW4U9lpGmS5GBPB9RYxlFg+CHaVN7ErNY4W9XfLIEn20b4VDYaIrbq0q4uA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/form-data": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/@types/form-data/-/form-data-0.0.33.tgz",
      "integrity": "sha512-8BSvG1kGm83cyJITQMZSulnl6QV8jqAGreJsc5tPu1Jq0vTSOiY/k24Wx82JRpWwZSqrala6sd5rWi6aNXvqcw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/glob": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@types/glob/-/glob-7.2.0.tgz",
      "integrity": "sha512-ZUxbzKl0IfJILTS6t7ip5fQQM/J3TJYubDm3nMbgubNNYS62eXeUpoLUC8/7fJNiFYHTrGPQn7hspDUzIHX3UA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/minimatch": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/@types/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-ssE3Vlrys7sdIzs5LOxCzTVMsU7i9oa/IaW92wF32JFb3CVczqOkru2xspuKczHEbG3nvmPY7IFqVmGGHdNbYw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/minimatch": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-5.1.2.tgz",
      "integrity": "sha512-K0VQKziLUWkVKiRVrx4a40iPaxTUefQmjtkQofBkYRcoaaL/8rhwDWww9qWbrgicNOgnpIsMxyNIUM4+n6dUIA==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/@types/mocha": {
      "version": "10.0.9",
      "resolved": "https://registry.npmjs.org/@types/mocha/-/mocha-10.0.9.tgz",
      "integrity": "sha512-sicdRoWtYevwxjOHNMPTl3vSfJM6oyW8o1wXeI7uww6b6xHg8eBznQDNSGBCDJmsE8UMxP05JgZRtsKbTqt//Q==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/@types/node": {
      "version": "22.9.0",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.9.0.tgz",
      "integrity": "sha512-vuyHg81vvWA1Z1ELfvLko2c8f34gyA0zaic0+Rllc5lbCnbSyuvb2Oxpm6TAUAC/2xZN3QGqxBNggD1nNR2AfQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.19.8"
      }
    },
    "node_modules/@types/pbkdf2": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@types/pbkdf2/-/pbkdf2-3.1.2.tgz",
      "integrity": "sha512-uRwJqmiXmh9++aSu1VNEn3iIxWOhd8AHXNSdlaLfdAAdSTY9jYVeGWnzejM3dvrkbqE3/hyQkQQ29IFATEGlew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/prettier": {
      "version": "2.7.3",
      "resolved": "https://registry.npmjs.org/@types/prettier/-/prettier-2.7.3.tgz",
      "integrity": "sha512-+68kP9yzs4LMp7VNh8gdzMSPZFL44MLGqiHWvttYJe+6qnuVr4Ek9wSBQoveqY/r+LwjCcU29kNVkidwim+kYA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/qs": {
      "version": "6.9.17",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.9.17.tgz",
      "integrity": "sha512-rX4/bPcfmvxHDv0XjfJELTTr+iB+tn032nPILqHm5wbthUUUuVtNGGqzhya9XUxjTP8Fpr0qYgSZZKxGY++svQ==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/@types/secp256k1": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/@types/secp256k1/-/secp256k1-4.0.6.tgz",
      "integrity": "sha512-hHxJU6PAEUn0TP4S/ZOzuTUvJWuZ6eIKeNKb5RBpODvSl6hp1Wrw4s7ATY50rklRCScUDpHzVA/DQdSjJ3UoYQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/abbrev": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.9.tgz",
      "integrity": "sha512-LEyx4aLEC3x6T0UguF6YILf+ntvmOaWsVfENmIW0E9H09vKlLDGelMjjSm0jkDHALj8A8quZ/HapKNigzwge+Q==",
      "dev": true,
      "license": "ISC",
      "peer": true
    },
    "node_modules/acorn": {
      "version": "8.14.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz",
      "integrity": "sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.4",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.4.tgz",
      "integrity": "sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/adm-zip": {
      "version": "0.4.16",
      "resolved": "https://registry.npmjs.org/adm-zip/-/adm-zip-0.4.16.tgz",
      "integrity": "sha512-TFi4HBKSGfIKsK5YCkKaaFG2m4PEDyViZmEwof3MTIgzimHLto6muaHVpbrljdIvIrFZzEq/p4nafOeLcYegrg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.3.0"
      }
    },
    "node_modules/aes-js": {
      "version": "4.0.0-beta.5",
      "resolved": "https://registry.npmjs.org/aes-js/-/aes-js-4.0.0-beta.5.tgz",
      "integrity": "sha512-G965FqalsNyrPqgEGON7nIx1e/OVENSgiEIzyC63haUMuvNnwIgIjMs52hlTCKhkBny7A2ORNlfY9Zu+jmGk1Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/aggregate-error": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "clean-stack": "^2.0.0",
        "indent-string": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ajv": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
      "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/amdefine": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-1.0.1.tgz",
      "integrity": "sha512-S2Hw0TtNkMJhIabBwIojKL9YHO5T0n5eNqWJ7Lrlel/zDbftQpxpapi8tZs3X1HWa+u+QeydGmzzNU0m09+Rcg==",
      "dev": true,
      "license": "BSD-3-Clause OR MIT",
      "optional": true,
      "peer": true,
      "engines": {
        "node": ">=0.4.2"
      }
    },
    "node_modules/ansi-align": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.1.tgz",
      "integrity": "sha512-IOfwwBF5iczOjp/WeY4YxyjqAFMQoZufdQWDd19SEExbVLNXqvpzSJ/M7Za4/sCPmQ0+GRquoA7bGcINcxew6w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.1.0"
      }
    },
    "node_modules/ansi-colors": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.3.tgz",
      "integrity": "sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-escapes": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
      "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.21.3"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/antlr4ts": {
      "version": "0.5.0-alpha.4",
      "resolved": "https://registry.npmjs.org/antlr4ts/-/antlr4ts-0.5.0-alpha.4.tgz",
      "integrity": "sha512-WPQDt1B74OfPv/IMS2ekXAKkTZIHl88uMetg6q3OTqgFxZ/dxDXI0EWLyZid/1Pe6hTftyg5N7gel5wNAGxXyQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "peer": true
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/array-back": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/array-back/-/array-back-3.1.0.tgz",
      "integrity": "sha512-TkuxA4UCOvxuDK6NZYXCalszEzj+TLszyASooky+i742l9TqsOdYCMJJupxRic61hwquNtppB3hgcuq9SVSH1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/array-uniq": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz",
      "integrity": "sha512-MNha4BWQ6JbwhFhj03YK552f7cb3AzoE8SzeljgChvL1dl3IcvggXVz1DilzySZkCja+CXuZbdW7yATchWn8/Q==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/asap": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
      "integrity": "sha512-BSHWgDSAiKs50o2Re8ppvp3seVHXSRM44cdSsT9FfNEUUZLOGWVCsiWaRPWM1Znn+mqZ1OfVZ3z3DWEzSp7hRA==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/assertion-error": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-1.1.0.tgz",
      "integrity": "sha512-jgsaNduz+ndvGyFt3uSuWqvy4lCnIJiovtouQN5JZHOKCS2QuhEdbcQHFhVksz2N2U9hXJo8odG7ETyWlEeuDw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/astral-regex": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-2.0.0.tgz",
      "integrity": "sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/async": {
      "version": "1.5.2",
      "resolved": "https://registry.npmjs.org/async/-/async-1.5.2.tgz",
      "integrity": "sha512-nSVgobk4rv61R9PUSDtYt7mPVB2olxNR5RWJcAsH676/ef11bUZwvu7+RGYrYauVdDPcO519v68wRhXQtxsV9w==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/at-least-node": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
      "integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/axios": {
      "version": "1.7.7",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.7.7.tgz",
      "integrity": "sha512-S4kL7XrjgBmvdGut0sN3yJxqYzrDOnivkBiN0OFs6hLiUam3UPvswUo0kqGyhqUZGEOytHyumEdXsAkgCOUf3Q==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "follow-redirects": "^1.15.6",
        "form-data": "^4.0.0",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/base-x": {
      "version": "3.0.10",
      "resolved": "https://registry.npmjs.org/base-x/-/base-x-3.0.10.tgz",
      "integrity": "sha512-7d0s06rR9rYaIWHkpfLIFICM/tkSVdoPC9qYAQRpxn9DdKNWNsKC0uk++akckyLq16Tx2WIinnZ6WRriAt6njQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/bech32": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/bech32/-/bech32-1.1.4.tgz",
      "integrity": "sha512-s0IrSOzLlbvX7yp4WBfPITzpAU8sqQcpsmwXDiKwrG4r491vwCO/XpejasRNl0piBMe/DvP4Tz0mIS/X1DPJBQ==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/blakejs": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/blakejs/-/blakejs-1.2.1.tgz",
      "integrity": "sha512-QXUSXI3QVc/gJME0dBpXrag1kbzOqCjCX8/b54ntNyW6sjtoqxqRk3LTmXzaJoh71zMsDCjM+47jS7XiwN/+fQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/bn.js": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.2.1.tgz",
      "integrity": "sha512-eXRvHzWyYPBuB4NBy0cmYQjGitUrtqwbvlzP3G6VFnNRbsZQIxQ10PbKKHt8gZ/HW/D/747aDl+QkDqg3KQLMQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/boxen": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-5.1.2.tgz",
      "integrity": "sha512-9gYgQKXx+1nP8mP7CzFyaUARhg7D3n1dF/FnErWmu9l6JvGpNUN278h0aSb+QjoiKSWG+iZ3uHrcqk0qrY9RQQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-align": "^3.0.0",
        "camelcase": "^6.2.0",
        "chalk": "^4.1.0",
        "cli-boxes": "^2.2.1",
        "string-width": "^4.2.2",
        "type-fest": "^0.20.2",
        "widest-line": "^3.1.0",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/boxen/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/boxen/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/boxen/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/boxen/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/boxen/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/boxen/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/boxen/node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/brorand": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
      "integrity": "sha512-cKV8tMCEpQs4hK/ik71d6LrPOnpkpGBR0wzxqr68g2m/LB2GxVYQroAjMJZRVM1Y4BCjCKc3vAamxSzOY2RP+w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/browser-stdout": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/browser-stdout/-/browser-stdout-1.3.1.tgz",
      "integrity": "sha512-qhAVI1+Av2X7qelOfAIYwXONood6XlZE/fXaBSmW/T5SzLAmCgzi+eiWE7fUvbHaeNBQH13UftjpXxsfLkMpgw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/browserify-aes": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
      "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-xor": "^1.0.3",
        "cipher-base": "^1.0.0",
        "create-hash": "^1.1.0",
        "evp_bytestokey": "^1.0.3",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/bs58": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/bs58/-/bs58-4.0.1.tgz",
      "integrity": "sha512-Ok3Wdf5vOIlBrgCvTq96gBkJw+JUEzdBgyaza5HLtPm7yTHkjRy8+JzNyHF7BHa0bNWOQIp3m5YF0nnFcOIKLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "base-x": "^3.0.2"
      }
    },
    "node_modules/bs58check": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/bs58check/-/bs58check-2.1.2.tgz",
      "integrity": "sha512-0TS1jicxdU09dwJMNZtVAfzPi6Q6QeN0pM1Fkzrjn+XYHvzMKPU3pHVpva+769iNVSfIYWf7LJ6WR+BuuMf8cA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bs58": "^4.0.0",
        "create-hash": "^1.1.0",
        "safe-buffer": "^5.1.2"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/buffer-xor": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
      "integrity": "sha512-571s0T7nZWK6vB67HI5dyUF7wXiNcfaPPPTl6zYCNApANjIvYJTg7hlud/+cJpdAhS7dVzqMLmfhfHR3rAcOjQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.7.tgz",
      "integrity": "sha512-GHTSNSYICQ7scH7sZ+M2rFopRoLh8t2bLSW6BbgrtLsahOIB5iyAVJf9GjWK3cYTDaMj4XdBpM1cA6pIS0Kv2w==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "set-function-length": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/camelcase": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
      "integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha512-4tYFyifaFfGacoiObjJegolkwSU4xQNGbVgUiNYVUxbQ2x2lUsFvY4hVgVzGiIe6WLOPqycWXA40l+PWsxthUw==",
      "dev": true,
      "license": "Apache-2.0",
      "peer": true
    },
    "node_modules/cbor": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/cbor/-/cbor-8.1.0.tgz",
      "integrity": "sha512-DwGjNW9omn6EwP70aXsn7FQJx5kO12tX0bZkaTjzdVFM6/7nhA4t0EENocKGx6D2Bch9PE2KzCUf5SceBdeijg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "nofilter": "^3.1.0"
      },
      "engines": {
        "node": ">=12.19"
      }
    },
    "node_modules/chai": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/chai/-/chai-4.5.0.tgz",
      "integrity": "sha512-RITGBfijLkBddZvnn8jdqoTypxvqbOLYQkGGxXzeFjVHvudaPw0HNFD9x928/eUwYWd2dPCugVqspGALTZZQKw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "assertion-error": "^1.1.0",
        "check-error": "^1.0.3",
        "deep-eql": "^4.1.3",
        "get-func-name": "^2.0.2",
        "loupe": "^2.3.6",
        "pathval": "^1.1.1",
        "type-detect": "^4.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/chai-as-promised": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/chai-as-promised/-/chai-as-promised-7.1.2.tgz",
      "integrity": "sha512-aBDHZxRzYnUYuIAIPBH2s511DjlKPzXNlXSGFC8CwmroWQLfrW0LtE1nK3MAwwNhJPa9raEjNCmRoFpG0Hurdw==",
      "dev": true,
      "license": "WTFPL",
      "peer": true,
      "dependencies": {
        "check-error": "^1.0.2"
      },
      "peerDependencies": {
        "chai": ">= 2.1.2 < 6"
      }
    },
    "node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/charenc": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/charenc/-/charenc-0.0.2.tgz",
      "integrity": "sha512-yrLQ/yVUFXkzg7EDQsPieE/53+0RlaWTs+wBrvW36cyilJ2SaDWfl4Yj7MtLTXleV9uEKefbAGUPv2/iWSooRA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "peer": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/check-error": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/check-error/-/check-error-1.0.3.tgz",
      "integrity": "sha512-iKEoDYaRmd1mxM90a2OEfWhjsjPpYPuQ+lMYsoxB126+t8fw7ySEO48nmDg5COTjxDI65/Y2OWpeEHk3ZOe8zg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "get-func-name": "^2.0.2"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/chokidar": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.1.tgz",
      "integrity": "sha512-n8enUVCED/KVRQlab1hr3MVpcVMvxtZjmEa956u+4YijlmQED223XMSYj2tLuKvr4jcCTzNNMpQDUer72MMmzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "readdirp": "^4.0.1"
      },
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/ci-info": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
      "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cipher-base": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
      "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/clean-stack": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/cli-boxes": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.1.tgz",
      "integrity": "sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-table3": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/cli-table3/-/cli-table3-0.5.1.tgz",
      "integrity": "sha512-7Qg2Jrep1S/+Q3EceiZtQcDPWxhAvBw+ERf1162v4sikJrvojMHFqXt8QIVha8UlH9rgU0BeWPytZ9/TzYqlUw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "object-assign": "^4.1.0",
        "string-width": "^2.1.1"
      },
      "engines": {
        "node": ">=6"
      },
      "optionalDependencies": {
        "colors": "^1.1.2"
      }
    },
    "node_modules/cli-table3/node_modules/ansi-regex": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.1.tgz",
      "integrity": "sha512-+O9Jct8wf++lXxxFc4hc8LsjaSq0HFzzL7cVsw8pRDIPdjKD2mT4ytDZlLuSBZ4cLKZFXIrMGO7DbQCtMJJMKw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cli-table3/node_modules/is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha512-VHskAKYM8RfSFXwee5t5cbN5PZeq1Wrh6qd5bkyiXIf6UQcN6w/A0eXM9r6t8d+GYOh+o6ZhiEnb88LN/Y8m2w==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cli-table3/node_modules/string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cli-table3/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha512-4XaJ2zQdCzROZDivEVIDPkcQn8LMFSa8kj8Gxb/Lnwzv9A8VctNZ+lfivC/sV3ivW8ElJTERXZoPBRrZKkNKow==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cliui": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^7.0.0"
      }
    },
    "node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/colors": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/colors/-/colors-1.4.0.tgz",
      "integrity": "sha512-a+UqTh4kgZg/SlGvfbzDHpgRu7AAQOmmqRHJnxhRZICKFUT91brVhNNt58CMWU9PsBbv3PDCZUHbVxuDiH2mtA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.1.90"
      }
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/command-exists": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/command-exists/-/command-exists-1.2.9.tgz",
      "integrity": "sha512-LTQ/SGc+s0Xc0Fu5WaKnR0YiygZkm9eKFvyS+fRsU7/ZWFF8ykFM6Pc9aCVf1+xasOOZpO3BAVgVrKvsqKHV7w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/command-line-args": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/command-line-args/-/command-line-args-5.2.1.tgz",
      "integrity": "sha512-H4UfQhZyakIjC74I9d34fGYDwk3XpSr17QhEd0Q3I9Xq1CETHo4Hcuo87WyWHpAF1aSLjLRf5lD9ZGX2qStUvg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-back": "^3.1.0",
        "find-replace": "^3.0.0",
        "lodash.camelcase": "^4.3.0",
        "typical": "^4.0.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/command-line-usage": {
      "version": "6.1.3",
      "resolved": "https://registry.npmjs.org/command-line-usage/-/command-line-usage-6.1.3.tgz",
      "integrity": "sha512-sH5ZSPr+7UStsloltmDh7Ce5fb8XPlHyoPzTpyyMuYCtervL65+ubVZ6Q61cFtFl62UyJlc8/JwERRbAFPUqgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-back": "^4.0.2",
        "chalk": "^2.4.2",
        "table-layout": "^1.0.2",
        "typical": "^5.2.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/command-line-usage/node_modules/array-back": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/array-back/-/array-back-4.0.2.tgz",
      "integrity": "sha512-NbdMezxqf94cnNfWLL7V/im0Ub+Anbb0IoZhvzie8+4HJ4nMQuzHuy49FkGYCJK2yAloZ3meiB6AVMClbrI1vg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/command-line-usage/node_modules/typical": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/typical/-/typical-5.2.0.tgz",
      "integrity": "sha512-dvdQgNDNJo+8B2uBQoqdb11eUCE1JQXhvjC/CZtgvZseVd5TYMXnq0+vuUemXbd/Se29cTaUuPX3YIc2xgbvIg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/commander": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-8.3.0.tgz",
      "integrity": "sha512-OkTL9umf+He2DZkUq8f8J9of7yL6RJKI24dVITBmNfZBmri9zYZQrKkuXiKhyfPSu8tUhnVBB1iKXevvnlR4Ww==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "dev": true,
      "engines": [
        "node >= 0.8"
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "node_modules/concat-stream/node_modules/readable-stream": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz",
      "integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/concat-stream/node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/concat-stream/node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/cookie": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.2.tgz",
      "integrity": "sha512-aSWTXFzaKWkvHO1Ny/s+ePFpvKsPnjc551iI41v3ny/ow6tBG5Vd+FuqGNhh1LxOmVzOlGUriIlOaokOvhaStA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/create-hash": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
      "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cipher-base": "^1.0.1",
        "inherits": "^2.0.1",
        "md5.js": "^1.3.4",
        "ripemd160": "^2.0.1",
        "sha.js": "^2.4.0"
      }
    },
    "node_modules/create-hmac": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
      "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cipher-base": "^1.0.3",
        "create-hash": "^1.1.0",
        "inherits": "^2.0.1",
        "ripemd160": "^2.0.0",
        "safe-buffer": "^5.0.1",
        "sha.js": "^2.4.8"
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/crypt": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/crypt/-/crypt-0.0.2.tgz",
      "integrity": "sha512-mCxBlsHFYh9C+HVpiEacem8FEBnMXgU9gy4zmNC+SXAZNB/1idgp/aulFJ4FgCi7GPEVbfyng092GqL2k2rmow==",
      "dev": true,
      "license": "BSD-3-Clause",
      "peer": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/death": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/death/-/death-1.1.0.tgz",
      "integrity": "sha512-vsV6S4KVHvTGxbEcij7hkWRv0It+sGGWVOM67dQde/o5Xjnr+KmLjxWJii2uEObIrt1CcM9w0Yaovx+iOlIL+w==",
      "dev": true,
      "peer": true
    },
    "node_modules/debug": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decamelize": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-4.0.0.tgz",
      "integrity": "sha512-9iE1PgSik9HeIIw2JO94IidnE3eBoQrFJ3w7sFuzSX4DpmZ3v5sZpUiV5Swcf6mQEF+Y0ru8Neo+p+nyh2J+hQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/deep-eql": {
      "version": "4.1.4",
      "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-4.1.4.tgz",
      "integrity": "sha512-SUwdGfqdKOwxCPeVYjwSyRpJ7Z+fhpwIAtmCUdZIWZ/YP5R9WAsyuSgpLVDi9bjWoN2LXHNss/dk3urXtdQxGg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "type-detect": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/diff": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-5.2.0.tgz",
      "integrity": "sha512-uIFDxqpRZGZ6ThOk84hEfqWoHx2devRFvpTZcTHur85vImfaxUbTW9Ryh4CpCuDnToOP1CEtXKIgytHBPVff5A==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/difflib": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/difflib/-/difflib-0.2.4.tgz",
      "integrity": "sha512-9YVwmMb0wQHQNr5J9m6BSj6fk4pfGITGQOOs+D9Fl+INODWFOfvhIU1hNv6GgR1RBoC/9NJcwu77zShxV0kT7w==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "heap": ">= 0.2.0"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dotenv": {
      "version": "16.4.5",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.4.5.tgz",
      "integrity": "sha512-ZmdL2rui+eB2YwhsWzjInR8LldtZHGDoQ1ugH85ppHKwpUHL7j7rN0Ti9NCnGiQbhaZ11FpR+7ao1dNsmduNUg==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/elliptic": {
      "version": "6.5.4",
      "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.5.4.tgz",
      "integrity": "sha512-iLhC6ULemrljPZb+QutR5TQGB+pdW6KGD5RSegS+8sorOZT+rdQFbsQFJgvN3eRqNALqJer4oQ16YvJHlU8hzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bn.js": "^4.11.9",
        "brorand": "^1.1.0",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.1",
        "inherits": "^2.0.4",
        "minimalistic-assert": "^1.0.1",
        "minimalistic-crypto-utils": "^1.0.1"
      }
    },
    "node_modules/elliptic/node_modules/bn.js": {
      "version": "4.12.0",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.12.0.tgz",
      "integrity": "sha512-c98Bf3tPniI+scsdk237ku1Dc3ujXQTSgyiPUDEOe7tRkhrqridvh8klBv0HCEso1OLOYcHuCv/cS6DNxKH+ZA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/enquirer": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/enquirer/-/enquirer-2.4.1.tgz",
      "integrity": "sha512-rRqJg/6gd538VHvR3PSrdRBb/1Vy2YfzHqzvbhGIQpDRKIa4FgV/54b5Q1xYSxOOwKvjXweS26E0Q+nAMwp2pQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-colors": "^4.1.1",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/env-paths": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
      "integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.0.tgz",
      "integrity": "sha512-jxayLKShrEqqzJ0eumQbVhTYQM27CfT1T35+gCgDFoL82JLsXqTJ76zv6A0YLOgEnLUMvLzsDsGIrl8NFpT2gQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "get-intrinsic": "^1.2.4"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/escodegen": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.8.1.tgz",
      "integrity": "sha512-yhi5S+mNTOuRvyW4gWlg5W1byMaQGWWSYHXsuFZ7GBo7tpyOwi2EdzMP/QWxh9hwkD2m+wDVHJsxhRIj+v/b/A==",
      "dev": true,
      "license": "BSD-2-Clause",
      "peer": true,
      "dependencies": {
        "esprima": "^2.7.1",
        "estraverse": "^1.9.1",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1"
      },
      "bin": {
        "escodegen": "bin/escodegen.js",
        "esgenerate": "bin/esgenerate.js"
      },
      "engines": {
        "node": ">=0.12.0"
      },
      "optionalDependencies": {
        "source-map": "~0.2.0"
      }
    },
    "node_modules/escodegen/node_modules/source-map": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.2.0.tgz",
      "integrity": "sha512-CBdZ2oa/BHhS4xj5DlhjWNHcan57/5YuvfdLf17iVmIpd9KRm+DFLmC6nBNj+6Ua7Kt3TmOjDpQT1aTYOQtoUA==",
      "dev": true,
      "optional": true,
      "peer": true,
      "dependencies": {
        "amdefine": ">=0.0.4"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/esprima": {
      "version": "2.7.3",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-2.7.3.tgz",
      "integrity": "sha512-OarPfz0lFCiW4/AV2Oy1Rp9qu0iusTKqykwTspGCZtPxmF81JR4MmIebvF1F9+UOKth2ZubLQ4XGGaU+hSn99A==",
      "dev": true,
      "license": "BSD-2-Clause",
      "peer": true,
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/estraverse": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-1.9.3.tgz",
      "integrity": "sha512-25w1fMXQrGdoquWnScXZGckOv+Wes+JDnuN/+7ex3SauFRS72r2lFDec0EKPt2YD1wUJ/IrfEex+9yp4hfSOJA==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eth-gas-reporter": {
      "version": "0.2.27",
      "resolved": "https://registry.npmjs.org/eth-gas-reporter/-/eth-gas-reporter-0.2.27.tgz",
      "integrity": "sha512-femhvoAM7wL0GcI8ozTdxfuBtBFJ9qsyIAsmKVjlWAHUbdnnXHt+lKzz/kmldM5lA9jLuNHGwuIxorNpLbR1Zw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@solidity-parser/parser": "^0.14.0",
        "axios": "^1.5.1",
        "cli-table3": "^0.5.0",
        "colors": "1.4.0",
        "ethereum-cryptography": "^1.0.3",
        "ethers": "^5.7.2",
        "fs-readdir-recursive": "^1.1.0",
        "lodash": "^4.17.14",
        "markdown-table": "^1.1.3",
        "mocha": "^10.2.0",
        "req-cwd": "^2.0.0",
        "sha1": "^1.1.1",
        "sync-request": "^6.0.0"
      },
      "peerDependencies": {
        "@codechecks/client": "^0.1.0"
      },
      "peerDependenciesMeta": {
        "@codechecks/client": {
          "optional": true
        }
      }
    },
    "node_modules/eth-gas-reporter/node_modules/ethers": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/ethers/-/ethers-5.7.2.tgz",
      "integrity": "sha512-wswUsmWo1aOK8rR7DIKiWSw9DbLWe6x98Jrn8wcTflTVvaXhAMaB5zGAXy0GYQEQp9iO1iSHWVyARQm11zUtyg==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny-2"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ethersproject/abi": "5.7.0",
        "@ethersproject/abstract-provider": "5.7.0",
        "@ethersproject/abstract-signer": "5.7.0",
        "@ethersproject/address": "5.7.0",
        "@ethersproject/base64": "5.7.0",
        "@ethersproject/basex": "5.7.0",
        "@ethersproject/bignumber": "5.7.0",
        "@ethersproject/bytes": "5.7.0",
        "@ethersproject/constants": "5.7.0",
        "@ethersproject/contracts": "5.7.0",
        "@ethersproject/hash": "5.7.0",
        "@ethersproject/hdnode": "5.7.0",
        "@ethersproject/json-wallets": "5.7.0",
        "@ethersproject/keccak256": "5.7.0",
        "@ethersproject/logger": "5.7.0",
        "@ethersproject/networks": "5.7.1",
        "@ethersproject/pbkdf2": "5.7.0",
        "@ethersproject/properties": "5.7.0",
        "@ethersproject/providers": "5.7.2",
        "@ethersproject/random": "5.7.0",
        "@ethersproject/rlp": "5.7.0",
        "@ethersproject/sha2": "5.7.0",
        "@ethersproject/signing-key": "5.7.0",
        "@ethersproject/solidity": "5.7.0",
        "@ethersproject/strings": "5.7.0",
        "@ethersproject/transactions": "5.7.0",
        "@ethersproject/units": "5.7.0",
        "@ethersproject/wallet": "5.7.0",
        "@ethersproject/web": "5.7.1",
        "@ethersproject/wordlists": "5.7.0"
      }
    },
    "node_modules/ethereum-bloom-filters": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/ethereum-bloom-filters/-/ethereum-bloom-filters-1.2.0.tgz",
      "integrity": "sha512-28hyiE7HVsWubqhpVLVmZXFd4ITeHi+BUu05o9isf0GUpMtzBUi+8/gFrGaGYzvGAJQmJ3JKj77Mk9G98T84rA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@noble/hashes": "^1.4.0"
      }
    },
    "node_modules/ethereum-bloom-filters/node_modules/@noble/hashes": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@noble/hashes/-/hashes-1.5.0.tgz",
      "integrity": "sha512-1j6kQFb7QRru7eKN3ZDvRcP13rugwdxZqCjbiAVZfIJwgj2A65UmT4TgARXGlXgnRkORLTDTrO19ZErt7+QXgA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": "^14.21.3 || >=16"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/ethereum-cryptography": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/ethereum-cryptography/-/ethereum-cryptography-1.2.0.tgz",
      "integrity": "sha512-6yFQC9b5ug6/17CQpCyE3k9eKBMdhyVjzUy1WkiuY/E4vj/SXDBbCw8QEIaXqf0Mf2SnY6RmpDcwlUmBSS0EJw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@noble/hashes": "1.2.0",
        "@noble/secp256k1": "1.7.1",
        "@scure/bip32": "1.1.5",
        "@scure/bip39": "1.1.1"
      }
    },
    "node_modules/ethereum-cryptography/node_modules/@noble/hashes": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@noble/hashes/-/hashes-1.2.0.tgz",
      "integrity": "sha512-FZfhjEDbT5GRswV3C6uvLPHMiVD6lQBmpoX5+eSiPaMTXte/IKqI5dykDxzZB/WBeK/CDuQRBWarPdi3FNY2zQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "license": "MIT"
    },
    "node_modules/ethereumjs-abi": {
      "version": "0.6.8",
      "resolved": "https://registry.npmjs.org/ethereumjs-abi/-/ethereumjs-abi-0.6.8.tgz",
      "integrity": "sha512-Tx0r/iXI6r+lRsdvkFDlut0N08jWMnKRZ6Gkq+Nmw75lZe4e6o3EkSnkaBP5NF6+m5PTGAr9JP43N3LyeoglsA==",
      "deprecated": "This library has been deprecated and usage is discouraged.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bn.js": "^4.11.8",
        "ethereumjs-util": "^6.0.0"
      }
    },
    "node_modules/ethereumjs-abi/node_modules/bn.js": {
      "version": "4.12.0",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.12.0.tgz",
      "integrity": "sha512-c98Bf3tPniI+scsdk237ku1Dc3ujXQTSgyiPUDEOe7tRkhrqridvh8klBv0HCEso1OLOYcHuCv/cS6DNxKH+ZA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ethereumjs-util": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ethereumjs-util/-/ethereumjs-util-6.2.1.tgz",
      "integrity": "sha512-W2Ktez4L01Vexijrm5EB6w7dg4n/TgpoYU4avuT5T3Vmnw/eCRtiBrJfQYS/DCSvDIOLn2k57GcHdeBcgVxAqw==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "@types/bn.js": "^4.11.3",
        "bn.js": "^4.11.0",
        "create-hash": "^1.1.2",
        "elliptic": "^6.5.2",
        "ethereum-cryptography": "^0.1.3",
        "ethjs-util": "0.1.6",
        "rlp": "^2.2.3"
      }
    },
    "node_modules/ethereumjs-util/node_modules/@types/bn.js": {
      "version": "4.11.6",
      "resolved": "https://registry.npmjs.org/@types/bn.js/-/bn.js-4.11.6.tgz",
      "integrity": "sha512-pqr857jrp2kPuO9uRjZ3PwnJTjoQy+fcdxvBTvHm6dkmEL9q+hDD/2j/0ELOBPtPnS8LjCX0gI9nbl8lVkadpg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/ethereumjs-util/node_modules/bn.js": {
      "version": "4.12.0",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.12.0.tgz",
      "integrity": "sha512-c98Bf3tPniI+scsdk237ku1Dc3ujXQTSgyiPUDEOe7tRkhrqridvh8klBv0HCEso1OLOYcHuCv/cS6DNxKH+ZA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ethereumjs-util/node_modules/ethereum-cryptography": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/ethereum-cryptography/-/ethereum-cryptography-0.1.3.tgz",
      "integrity": "sha512-w8/4x1SGGzc+tO97TASLja6SLd3fRIK2tLVcV2Gx4IB21hE19atll5Cq9o3d0ZmAYC/8aw0ipieTSiekAea4SQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/pbkdf2": "^3.0.0",
        "@types/secp256k1": "^4.0.1",
        "blakejs": "^1.1.0",
        "browserify-aes": "^1.2.0",
        "bs58check": "^2.1.2",
        "create-hash": "^1.2.0",
        "create-hmac": "^1.1.7",
        "hash.js": "^1.1.7",
        "keccak": "^3.0.0",
        "pbkdf2": "^3.0.17",
        "randombytes": "^2.1.0",
        "safe-buffer": "^5.1.2",
        "scrypt-js": "^3.0.0",
        "secp256k1": "^4.0.1",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/ethers": {
      "version": "6.13.4",
      "resolved": "https://registry.npmjs.org/ethers/-/ethers-6.13.4.tgz",
      "integrity": "sha512-21YtnZVg4/zKkCQPjrDj38B1r4nQvTZLopUGMLQ1ePU2zV/joCfDC3t3iKQjWRzjjjbzR+mdAIoikeBRNkdllA==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/ethers-io/"
        },
        {
          "type": "individual",
          "url": "https://www.buymeacoffee.com/ricmoo"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@adraffy/ens-normalize": "1.10.1",
        "@noble/curves": "1.2.0",
        "@noble/hashes": "1.3.2",
        "@types/node": "22.7.5",
        "aes-js": "4.0.0-beta.5",
        "tslib": "2.7.0",
        "ws": "8.17.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/ethers/node_modules/@types/node": {
      "version": "22.7.5",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.7.5.tgz",
      "integrity": "sha512-jML7s2NAzMWc//QSJ1a3prpk78cOPchGvXJsC3C6R6PSMoooztvRVQEz89gmBTBY1SPMaqo5teB4uNHPdetShQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.19.2"
      }
    },
    "node_modules/ethjs-unit": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/ethjs-unit/-/ethjs-unit-0.1.6.tgz",
      "integrity": "sha512-/Sn9Y0oKl0uqQuvgFk/zQgR7aw1g36qX/jzSQ5lSwlO0GigPymk4eGQfeNTD03w1dPOqfz8V77Cy43jH56pagw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "bn.js": "4.11.6",
        "number-to-bn": "1.7.0"
      },
      "engines": {
        "node": ">=6.5.0",
        "npm": ">=3"
      }
    },
    "node_modules/ethjs-unit/node_modules/bn.js": {
      "version": "4.11.6",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.6.tgz",
      "integrity": "sha512-XWwnNNFCuuSQ0m3r3C4LE3EiORltHd9M05pq6FOlVeiophzRbMo50Sbz1ehl8K3Z+jw9+vmgnXefY1hz8X+2wA==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/ethjs-util": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/ethjs-util/-/ethjs-util-0.1.6.tgz",
      "integrity": "sha512-CUnVOQq7gSpDHZVVrQW8ExxUETWrnrvXYvYz55wOU8Uj4VCgw56XC2B/fVqQN+f7gmrnRHSLVnFAwsCuNwji8w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-hex-prefixed": "1.0.0",
        "strip-hex-prefix": "1.0.0"
      },
      "engines": {
        "node": ">=6.5.0",
        "npm": ">=3"
      }
    },
    "node_modules/evp_bytestokey": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
      "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "md5.js": "^1.3.4",
        "safe-buffer": "^5.1.1"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
      "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/fast-uri": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.0.3.tgz",
      "integrity": "sha512-aLrHthzCjH5He4Z2H9YZ+v6Ujb9ocRuW6ZzkJQOrTxleEijANq4v1TsaPaVG1PZcuurEzrLcWRyYBYXD5cEiaw==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/fastq": {
      "version": "1.17.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
      "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
      "dev": true,
      "license": "ISC",
      "peer": true,
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-replace": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-replace/-/find-replace-3.0.0.tgz",
      "integrity": "sha512-6Tb2myMioCAgv5kfvP5/PkZZ/ntTpVK39fHY7WkWBgvbeE+VHd/tZuZ4mrC+bxh4cfOZeYKVPaJIZtZXV7GNCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-back": "^3.0.1"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha512-NWzkk0jSJtTt08+FBFMvXoeZnOJD+jTtsRmBYbAIzJdX6l7dLgR7CTubCM5/eDdPUBvLCeVasP1brfVR/9/EZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/flat": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
      "integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "bin": {
        "flat": "cli.js"
      }
    },
    "node_modules/follow-redirects": {
      "version": "1.15.9",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.9.tgz",
      "integrity": "sha512-gew4GsXizNgdoRyqmyfMHyAmXsZDk6mHkSxZFCzW9gwlbtOW44CDtYavM+y+72qD/Vq2l550kMF52DT8fOLJqQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.1.tgz",
      "integrity": "sha512-tzN8e4TX8+kkxGPK8D5u0FNmjPUjw3lwC9lSLxxoB/+GtsJG91CO8bSWy73APlgAZzZbXEYZJuxjkHH2w+Ezhw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fp-ts": {
      "version": "1.19.3",
      "resolved": "https://registry.npmjs.org/fp-ts/-/fp-ts-1.19.3.tgz",
      "integrity": "sha512-H5KQDspykdHuztLTg+ajGN0Z2qUjcEf3Ybxc6hLt0k7/zPkn29XnKnxlBPyW2XIddWrGaJBzBl4VLYOtk39yZg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fs-extra": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-7.0.1.tgz",
      "integrity": "sha512-YJDaCJZEnBmcbw13fvdAM9AwNOJwOzrE4pqMqBq5nFiEqXUqHwlK4B+3pUw6JNvfSPtX05xFHtYy/1ni01eGCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "jsonfile": "^4.0.0",
        "universalify": "^0.1.0"
      },
      "engines": {
        "node": ">=6 <7 || >=8"
      }
    },
    "node_modules/fs-readdir-recursive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fs-readdir-recursive/-/fs-readdir-recursive-1.1.0.tgz",
      "integrity": "sha512-GNanXlVr2pf02+sPN40XN8HG+ePaNcvM0q5mZBd668Obwb0yD5GiUbZOFgwn8kGMY6I3mdyDJzieUy3PTYyTRA==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-func-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/get-func-name/-/get-func-name-2.0.2.tgz",
      "integrity": "sha512-8vXOvuE167CtIc3OyItco7N/dpRtBbYOsPsXCz7X/PMnlGjYjSGuZJgM1Y7mmew7BKf9BqvLX2tnOVy1BBUsxQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.4.tgz",
      "integrity": "sha512-5uYhsJH8VJBTv7oslg4BznJYhDoRI6waYCxMmCdnTrcCrHA/fCFKoTFz2JKKE0HdDFUF7/oQuhzumXJK7paBRQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "has-proto": "^1.0.1",
        "has-symbols": "^1.0.3",
        "hasown": "^2.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-port": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/get-port/-/get-port-3.2.0.tgz",
      "integrity": "sha512-x5UJKlgeUiNT8nyo/AcnwLnZuZNcSjSw0kogRB+Whd1fjjFq4B1hySFxSFWWSn4mIBzg3sRNUDFYc4g5gjPoLg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ghost-testrpc": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/ghost-testrpc/-/ghost-testrpc-0.0.2.tgz",
      "integrity": "sha512-i08dAEgJ2g8z5buJIrCTduwPIhih3DP+hOCTyyryikfV8T0bNvHnGXO67i0DD1H4GBDETTclPy9njZbfluQYrQ==",
      "dev": true,
      "license": "ISC",
      "peer": true,
      "dependencies": {
        "chalk": "^2.4.2",
        "node-emoji": "^1.10.0"
      },
      "bin": {
        "testrpc-sc": "index.js"
      }
    },
    "node_modules/glob": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.0.tgz",
      "integrity": "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/global-modules": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-2.0.0.tgz",
      "integrity": "sha512-NGbfmJBp9x8IxyJSd1P+otYK8vonoJactOogrVfFRIAEY1ukil8RSKDz2Yo7wh1oihl51l/r6W4epkeKJHqL8A==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "global-prefix": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/global-prefix": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-3.0.0.tgz",
      "integrity": "sha512-awConJSVCHVGND6x3tmMaKcQvwXLhjdkmomy2W+Goaui8YPgYgXJZewhg3fWC+DlfqqQuWg8AwqjGTD2nAPVWg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "ini": "^1.3.5",
        "kind-of": "^6.0.2",
        "which": "^1.3.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/globby": {
      "version": "10.0.2",
      "resolved": "https://registry.npmjs.org/globby/-/globby-10.0.2.tgz",
      "integrity": "sha512-7dUi7RvCoT/xast/o/dLN53oqND4yk0nsHkhRgn9w65C4PofCLOoJ39iSOg+qVDdWQPIEj+eszMHQ+aLVwwQSg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/glob": "^7.1.1",
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.0.3",
        "glob": "^7.1.3",
        "ignore": "^5.1.1",
        "merge2": "^1.2.3",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/gopd": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.0.1.tgz",
      "integrity": "sha512-d65bNlIadxvpb/A2abVdlqKqV563juRnZ1Wtk6s1sIR8uNsXR70xqIzVqxVf1eTqDunwT2MkczEeaezCKTZhwA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "get-intrinsic": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/handlebars": {
      "version": "4.7.8",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.8.tgz",
      "integrity": "sha512-vafaFqs8MZkRrSX7sFVUdo3ap/eNiLnb4IakshzvP56X5Nr1iGKAIqdX6tMlm6HcNRIkr6AxO5jFEoJzzpT8aQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "minimist": "^1.2.5",
        "neo-async": "^2.6.2",
        "source-map": "^0.6.1",
        "wordwrap": "^1.0.0"
      },
      "bin": {
        "handlebars": "bin/handlebars"
      },
      "engines": {
        "node": ">=0.4.7"
      },
      "optionalDependencies": {
        "uglify-js": "^3.1.4"
      }
    },
    "node_modules/hardhat": {
      "version": "2.22.15",
      "resolved": "https://registry.npmjs.org/hardhat/-/hardhat-2.22.15.tgz",
      "integrity": "sha512-BpTGa9PE/sKAaHi4s/S1e9WGv63DR1m7Lzfd60C8gSEchDPfAJssVRSq0MZ2v2k76ig9m0kHAwVLf5teYwu/Mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@ethersproject/abi": "^5.1.2",
        "@metamask/eth-sig-util": "^4.0.0",
        "@nomicfoundation/edr": "^0.6.4",
        "@nomicfoundation/ethereumjs-common": "4.0.4",
        "@nomicfoundation/ethereumjs-tx": "5.0.4",
        "@nomicfoundation/ethereumjs-util": "9.0.4",
        "@nomicfoundation/solidity-analyzer": "^0.1.0",
        "@sentry/node": "^5.18.1",
        "@types/bn.js": "^5.1.0",
        "@types/lru-cache": "^5.1.0",
        "adm-zip": "^0.4.16",
        "aggregate-error": "^3.0.0",
        "ansi-escapes": "^4.3.0",
        "boxen": "^5.1.2",
        "chalk": "^2.4.2",
        "chokidar": "^4.0.0",
        "ci-info": "^2.0.0",
        "debug": "^4.1.1",
        "enquirer": "^2.3.0",
        "env-paths": "^2.2.0",
        "ethereum-cryptography": "^1.0.3",
        "ethereumjs-abi": "^0.6.8",
        "find-up": "^2.1.0",
        "fp-ts": "1.19.3",
        "fs-extra": "^7.0.1",
        "glob": "7.2.0",
        "immutable": "^4.0.0-rc.12",
        "io-ts": "1.10.4",
        "json-stream-stringify": "^3.1.4",
        "keccak": "^3.0.2",
        "lodash": "^4.17.11",
        "mnemonist": "^0.38.0",
        "mocha": "^10.0.0",
        "p-map": "^4.0.0",
        "raw-body": "^2.4.1",
        "resolve": "1.17.0",
        "semver": "^6.3.0",
        "solc": "0.8.26",
        "source-map-support": "^0.5.13",
        "stacktrace-parser": "^0.1.10",
        "tsort": "0.0.1",
        "undici": "^5.14.0",
        "uuid": "^8.3.2",
        "ws": "^7.4.6"
      },
      "bin": {
        "hardhat": "internal/cli/bootstrap.js"
      },
      "peerDependencies": {
        "ts-node": "*",
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "ts-node": {
          "optional": true
        },
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/hardhat-gas-reporter": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/hardhat-gas-reporter/-/hardhat-gas-reporter-1.0.10.tgz",
      "integrity": "sha512-02N4+So/fZrzJ88ci54GqwVA3Zrf0C9duuTyGt0CFRIh/CdNwbnTgkXkRfojOMLBQ+6t+lBIkgbsOtqMvNwikA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "array-uniq": "1.0.3",
        "eth-gas-reporter": "^0.2.25",
        "sha1": "^1.1.1"
      },
      "peerDependencies": {
        "hardhat": "^2.0.2"
      }
    },
    "node_modules/hardhat/node_modules/ws": {
      "version": "7.5.10",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.10.tgz",
      "integrity": "sha512-+dbF1tHwZpXcbOJdVOkzLDxZP1ailvSxM6ZweXTegylPny803bFhA+vqBYw4s31NSAk4S2Qz+AKXK9a4wkdjcQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.3.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": "^5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.0.3.tgz",
      "integrity": "sha512-SJ1amZAJUiZS+PhsVLf5tGydlaVB8EdFpaSO4gmiUKUOxk8qzn5AIy4ZeJUmh22znIdk/uMAUT2pl3FxzVUH+Q==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hash-base": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.1.0.tgz",
      "integrity": "sha512-1nmYp/rhMDiE7AYkDw+lLwlAzz0AntGIe51F3RfFfEqyQ3feY2eI/NcwC6umIQVOASPMsWJLJScWKSSvzL9IVA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.4",
        "readable-stream": "^3.6.0",
        "safe-buffer": "^5.2.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/hash.js": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.7.tgz",
      "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "minimalistic-assert": "^1.0.1"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "he": "bin/he"
      }
    },
    "node_modules/heap": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/heap/-/heap-0.2.7.tgz",
      "integrity": "sha512-2bsegYkkHO+h/9MGbn6KWcE45cHZgPANo5LXF7EvWdT0yT2EguSVO1nDgU5c8+ZOPwp2vMNa7YFsJhVcDR9Sdg==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/hmac-drbg": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
      "integrity": "sha512-Tti3gMqLdZfhOQY1Mzf/AanLiqh1WTiJgEj26ZuYQ9fbkLomzGchCws4FyrSd4VkpBfiNhaE1On+lOz894jvXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hash.js": "^1.0.3",
        "minimalistic-assert": "^1.0.0",
        "minimalistic-crypto-utils": "^1.0.1"
      }
    },
    "node_modules/http-basic": {
      "version": "8.1.3",
      "resolved": "https://registry.npmjs.org/http-basic/-/http-basic-8.1.3.tgz",
      "integrity": "sha512-/EcDMwJZh3mABI2NhGfHOGOeOZITqfkEO4p/xK+l3NpyncIHUQBoMvCSF/b5GqvKtySC2srL/GGG3+EtlqlmCw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "caseless": "^0.12.0",
        "concat-stream": "^1.6.2",
        "http-response-object": "^3.0.1",
        "parse-cache-control": "^1.0.1"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "depd": "2.0.0",
        "inherits": "2.0.4",
        "setprototypeof": "1.2.0",
        "statuses": "2.0.1",
        "toidentifier": "1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/http-response-object": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/http-response-object/-/http-response-object-3.0.2.tgz",
      "integrity": "sha512-bqX0XTF6fnXSQcEJ2Iuyr75yVakyjIDCqroJQ/aHfSdlM743Cwqoi2nDYMzLGWUcuTWGWy8AAvOKXTfiv6q9RA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/node": "^10.0.3"
      }
    },
    "node_modules/http-response-object/node_modules/@types/node": {
      "version": "10.17.60",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-10.17.60.tgz",
      "integrity": "sha512-F0KIgDJfy2nA3zMLmWGKxcH2ZVEtCZXHHdOQs2gSaQ27+lNeEfGxzkIw90aXswATX7AZ33tahPbzy6KAfUreVw==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/immer": {
      "version": "10.0.2",
      "resolved": "https://registry.npmjs.org/immer/-/immer-10.0.2.tgz",
      "integrity": "sha512-Rx3CqeqQ19sxUtYV9CU911Vhy8/721wRFnJv3REVGWUmoAcIwzifTsdmJte/MV+0/XpM35LZdQMBGkRIoLPwQA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/immer"
      }
    },
    "node_modules/immutable": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/immutable/-/immutable-4.3.7.tgz",
      "integrity": "sha512-1hqclzwYwjRDFLjcFxOM5AYkkG0rpFPpr1RLPMEuGczoS7YA8gLhy8SWXYRAA/XwfEHpfo3cw5JGioS32fnMRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "dev": true,
      "license": "ISC",
      "peer": true
    },
    "node_modules/interpret": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.4.0.tgz",
      "integrity": "sha512-agE4QfB2Lkp9uICn7BAqoscw4SZP9kTE2hxiFI3jBPmXJfdqiahTbUuKGsMoN2GtqL9AxhYioAcVvgsb1HvRbA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/io-ts": {
      "version": "1.10.4",
      "resolved": "https://registry.npmjs.org/io-ts/-/io-ts-1.10.4.tgz",
      "integrity": "sha512-b23PteSnYXSONJ6JQXRAlvJhuw8KOtkqa87W4wDtvMrud/DTJd5X+NpOOI+O/zZwVq6v0VLAaJ+1EDViKEuN9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fp-ts": "^1.0.0"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-hex-prefixed": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-hex-prefixed/-/is-hex-prefixed-1.0.0.tgz",
      "integrity": "sha512-WvtOiug1VFrE9v1Cydwm+FnXd3+w9GaeVUss5W4v/SLy3UW00vP+6iNF2SdnfiBoLy4bTqVdkftNGTUeOFVsbA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.5.0",
        "npm": ">=3"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
      "integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-unicode-supported": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
      "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC",
      "peer": true
    },
    "node_modules/js-sha3": {
      "version": "0.8.0",
      "resolved": "https://registry.npmjs.org/js-sha3/-/js-sha3-0.8.0.tgz",
      "integrity": "sha512-gF1cRrHhIzNfToc802P800N8PpXS+evLLXfsVpowqmAFR9uwbi89WvXg2QspOmXL8QL86J4T1EpFu+yUkwJY3Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stream-stringify": {
      "version": "3.1.6",
      "resolved": "https://registry.npmjs.org/json-stream-stringify/-/json-stream-stringify-3.1.6.tgz",
      "integrity": "sha512-x7fpwxOkbhFCaJDJ8vb1fBY3DdSa4AlITaz+HHILQJzdPMnHEFjxPwVUi1ALIbcIxDE0PNe/0i7frnY8QnBQog==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=7.10.1"
      }
    },
    "node_modules/json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha512-ZClg6AaYvamvYEE82d3Iyd3vSSIjQ+odgjaTzRuO3s7toCdFKczob2i0zCh7JE8kWn17yvAWhUVxvqGwUalsRA==",
      "dev": true,
      "license": "ISC",
      "peer": true
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonfile": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
      "integrity": "sha512-m6F1R3z8jjlf2imQHS2Qez5sjKWQzbuuhuJ/FKYFRZvPE3PuHcSMVZzfsLhGVOkfd20obL5SWEBew5ShlquNxg==",
      "dev": true,
      "license": "MIT",
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jsonschema": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsonschema/-/jsonschema-1.4.1.tgz",
      "integrity": "sha512-S6cATIPVv1z0IlxdN+zUk5EPjkGCdnhN4wVSBlvoUO1tOLJootbo9CquNJmbIh4yikWHiUedhRYrNPn1arpEmQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/keccak": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/keccak/-/keccak-3.0.4.tgz",
      "integrity": "sha512-3vKuW0jV8J3XNTzvfyicFR5qvxrSAGl7KIhvgOu5cmWwM7tZRj3fMbj/pfIf4be7aznbc+prBWGjywox/g2Y6Q==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "node-addon-api": "^2.0.0",
        "node-gyp-build": "^4.2.0",
        "readable-stream": "^3.6.0"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/kleur": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
      "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/levn": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
      "integrity": "sha512-0OO4y2iOHix2W6ujICbKIaEQXvFQHue65vUG3pb5EUomzPI90z9hsA1VsO/dbIIpC53J8gxM9Q4Oho0jrCM/yA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/locate-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha512-NCI2kiDkyR7VeEKm27Kda/iQHyKJe1Bu0FlTbYp3CqJu+9IFe9bLyAjMxf5ZDDbEg+iMPzB5zYyUTSm8wVTKmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^2.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.camelcase": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.camelcase/-/lodash.camelcase-4.3.0.tgz",
      "integrity": "sha512-TwuEnCnxbc3rAvhf/LbG7tJUDzhqXyFnv3dtzLOPgCG/hODL7WFnsbwktkD7yUV0RrreP/l1PALq/YSg6VvjlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.clonedeep": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.clonedeep/-/lodash.clonedeep-4.5.0.tgz",
      "integrity": "sha512-H5ZhCF25riFd9uB5UCkVKo61m3S/xZk1x4wA6yp/L3RFP6Z/eHH1ymQcGLo7J3GMPfm0V/7m1tryHuGVxpqEBQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.isequal": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.isequal/-/lodash.isequal-4.5.0.tgz",
      "integrity": "sha512-pDo3lu8Jhfjqls6GkMgpahsF9kCyayhgykjyLMNFTKWrpVdAQtYyB4muAMWozBB4ig/dtWAmsMxLEI8wuz+DYQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.truncate": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/lodash.truncate/-/lodash.truncate-4.4.2.tgz",
      "integrity": "sha512-jttmRe7bRse52OsWIMDLaXxWqRAmtIUccAQ3garviCqJjafXOfNMO0yMfNpdD6zbGaTU0P5Nz7e7gAT6cKmJRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/log-symbols": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
      "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.1.0",
        "is-unicode-supported": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/log-symbols/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/log-symbols/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/log-symbols/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/log-symbols/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/log-symbols/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/log-symbols/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/loupe": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/loupe/-/loupe-2.3.7.tgz",
      "integrity": "sha512-zSMINGVYkdpYSOBmLi0D1Uo7JU9nVdQKrHxC8eYlV+9YKK9WePqAlL7lSlorG/U2Fw1w0hTBmaa/jrQ3UbPHtA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "get-func-name": "^2.0.1"
      }
    },
    "node_modules/lru_map": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/lru_map/-/lru_map-0.3.3.tgz",
      "integrity": "sha512-Pn9cox5CsMYngeDbmChANltQl+5pi6XmTrraMSzhPmMBbmgcxmqWry0U3PGapCU1yB4/LqCcom7qhHZiF/jGfQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/markdown-table": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/markdown-table/-/markdown-table-1.1.3.tgz",
      "integrity": "sha512-1RUZVgQlpJSPWYbFSpmudq5nHY1doEIv89gBtF0s4gW1GF2XorxcA/70M5vq7rLv0a6mhOUccRsqkwhwLCIQ2Q==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/md5.js": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.5.tgz",
      "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hash-base": "^3.0.0",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "node_modules/memorystream": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/memorystream/-/memorystream-0.3.1.tgz",
      "integrity": "sha512-S3UwM3yj5mtUSEfP41UZmt/0SCoVYUcU1rkXv+BQ5Ig8ndL4sPoJNBUJERafdPb5jjHJGuMgytgKvKIf58XNBw==",
      "dev": true,
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micro-ftch": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/micro-ftch/-/micro-ftch-0.3.1.tgz",
      "integrity": "sha512-/0LLxhzP0tfiR5hcQebtudP56gUurs2CLkGarnCiB/OqEyUFQ6U3paQi/tgLv0hBJYt2rnr9MNpxz4fiiugstg==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimalistic-assert": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
      "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/minimalistic-crypto-utils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
      "integrity": "sha512-JIYlbt6g8i5jKfJ3xz7rF0LXmv2TkDxBLUkiBeZ7bAx4GnnNMr8xFpGnOxn6GhTEHx3SjRrZEoU+j04prX1ktg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mkdirp": "bin/cmd.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/mnemonist": {
      "version": "0.38.5",
      "resolved": "https://registry.npmjs.org/mnemonist/-/mnemonist-0.38.5.tgz",
      "integrity": "sha512-bZTFT5rrPKtPJxj8KSV0WkPyNxl72vQepqqVUAW2ARUpUSF2qXMB6jZj7hW5/k7C1rtpzqbD/IIbJwLXUjCHeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "obliterator": "^2.0.0"
      }
    },
    "node_modules/mocha": {
      "version": "10.8.2",
      "resolved": "https://registry.npmjs.org/mocha/-/mocha-10.8.2.tgz",
      "integrity": "sha512-VZlYo/WE8t1tstuRmqgeyBgCbJc/lEdopaa+axcKzTBJ+UIdlAB9XnmvTCAH4pwR4ElNInaedhEBmZD8iCSVEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-colors": "^4.1.3",
        "browser-stdout": "^1.3.1",
        "chokidar": "^3.5.3",
        "debug": "^4.3.5",
        "diff": "^5.2.0",
        "escape-string-regexp": "^4.0.0",
        "find-up": "^5.0.0",
        "glob": "^8.1.0",
        "he": "^1.2.0",
        "js-yaml": "^4.1.0",
        "log-symbols": "^4.1.0",
        "minimatch": "^5.1.6",
        "ms": "^2.1.3",
        "serialize-javascript": "^6.0.2",
        "strip-json-comments": "^3.1.1",
        "supports-color": "^8.1.1",
        "workerpool": "^6.5.1",
        "yargs": "^16.2.0",
        "yargs-parser": "^20.2.9",
        "yargs-unparser": "^2.0.0"
      },
      "bin": {
        "_mocha": "bin/_mocha",
        "mocha": "bin/mocha.js"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/mocha/node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/mocha/node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/mocha/node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/glob": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/glob/-/glob-8.1.0.tgz",
      "integrity": "sha512-r8hpEjiQEYlF2QU0df3dS+nxxSIreXQS1qRhMJM0Q5NDdR386C7jb7Hwwod8Fgiuex+k0GFjgft18yvxm5XoCQ==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^5.0.1",
        "once": "^1.3.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/mocha/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mocha/node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/minimatch": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz",
      "integrity": "sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/mocha/node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mocha/node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/mocha/node_modules/supports-color": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
      "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ndjson": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ndjson/-/ndjson-2.0.0.tgz",
      "integrity": "sha512-nGl7LRGrzugTtaFcJMhLbpzJM6XdivmbkdlaGcrk/LXg2KL/YBC6z1g70xh0/al+oFuVFP8N8kiWRucmeEH/qQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "peer": true,
      "dependencies": {
        "json-stringify-safe": "^5.0.1",
        "minimist": "^1.2.5",
        "readable-stream": "^3.6.0",
        "split2": "^3.0.0",
        "through2": "^4.0.0"
      },
      "bin": {
        "ndjson": "cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/node-addon-api": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-2.0.2.tgz",
      "integrity": "sha512-Ntyt4AIXyaLIuMHF6IOoTakB3K+RWxwtsHNRxllEoA6vPwP9o4866g6YWDLUdnucilZhmkxiHwHr11gAENw+QA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-emoji": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/node-emoji/-/node-emoji-1.11.0.tgz",
      "integrity": "sha512-wo2DpQkQp7Sjm2A0cq+sN7EHKO6Sl0ctXeBdFZrL9T9+UywORbufTcTZxom8YqpLQt/FqNMUkOpkZrJVYSKD3A==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "lodash": "^4.17.21"
      }
    },
    "node_modules/node-gyp-build": {
      "version": "4.8.2",
      "resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.8.2.tgz",
      "integrity": "sha512-IRUxE4BVsHWXkV/SFOut4qTlagw2aM8T5/vnTsmrHJvVoKueJHRc/JaFND7QDDc61kLYUJ6qlZM3sqTSyx2dTw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "node-gyp-build": "bin.js",
        "node-gyp-build-optional": "optional.js",
        "node-gyp-build-test": "build-test.js"
      }
    },
    "node_modules/nofilter": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/nofilter/-/nofilter-3.1.0.tgz",
      "integrity": "sha512-l2NNj07e9afPnhAhvgVrCD/oy2Ai1yfLpuo3EpiO1jFTsB4sFz6oIfAfSZyQzVpkZQ9xS8ZS5g1jCBgq4Hwo0g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.19"
      }
    },
    "node_modules/nopt": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-3.0.6.tgz",
      "integrity": "sha512-4GUt3kSEYmk4ITxzB/b9vaIDfUVWN/Ml1Fwl11IlnIG2iaJ9O6WXZ9SrYM9NLI8OCBieN2Y8SWC2oJV0RQ7qYg==",
      "dev": true,
      "license": "ISC",
      "peer": true,
      "dependencies": {
        "abbrev": "1"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/number-to-bn": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/number-to-bn/-/number-to-bn-1.7.0.tgz",
      "integrity": "sha512-wsJ9gfSz1/s4ZsJN01lyonwuxA1tml6X1yBDnfpMglypcBRFZZkus26EdPSlqS5GJfYddVZa22p3VNb3z5m5Ig==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "bn.js": "4.11.6",
        "strip-hex-prefix": "1.0.0"
      },
      "engines": {
        "node": ">=6.5.0",
        "npm": ">=3"
      }
    },
    "node_modules/number-to-bn/node_modules/bn.js": {
      "version": "4.11.6",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.6.tgz",
      "integrity": "sha512-XWwnNNFCuuSQ0m3r3C4LE3EiORltHd9M05pq6FOlVeiophzRbMo50Sbz1ehl8K3Z+jw9+vmgnXefY1hz8X+2wA==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.2.tgz",
      "integrity": "sha512-IRZSRuzJiynemAXPYtPe5BoI/RESNYR7TYm50MC5Mqbd3Jmw5y790sErYw3V6SryFJD64b74qQQs9wn5Bg/k3g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/obliterator": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/obliterator/-/obliterator-2.0.4.tgz",
      "integrity": "sha512-lgHwxlxV1qIg1Eap7LgIeoBWIMFibOjbrYPIPJZcI1mmGAI2m3lNYpK12Y+GBdPQ0U1hRwSord7GIaawz962qQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
      "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "deep-is": "~0.1.3",
        "fast-levenshtein": "~2.0.6",
        "levn": "~0.3.0",
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2",
        "word-wrap": "~1.2.3"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/ordinal": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/ordinal/-/ordinal-1.0.3.tgz",
      "integrity": "sha512-cMddMgb2QElm8G7vdaa02jhUNbTSrhsgAGUz1OokD83uJTwSUn+nKoNoKVVaRa08yF6sgfO7Maou1+bgLd9rdQ==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha512-D2FR03Vir7FIu45XBY20mTb+/ZSWB00sjU9jdQXt83gDrI4Ztz5Fs7/yy74g2N5SVQY4xY1qDr4rNddwYRVX0g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/p-limit": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
      "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-try": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-locate": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha512-nQja7m7gSKuewoVRen45CtVfODR3crN3goVQ0DDZ9N3yHxgpkuBhZqsaiotSQRrADUrne346peY7kT3TSACykg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-map": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
      "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aggregate-error": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-try": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha512-U1etNYuMJoIz3ZXSrrySFjsXQTWOx2/jdi86L+2pRvph/qMKL6sbcCYdH23fqsbm8TH2Gn0OybpT4eSFlCVHww==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/parse-cache-control": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parse-cache-control/-/parse-cache-control-1.0.1.tgz",
      "integrity": "sha512-60zvsJReQPX5/QP0Kzfd/VrpjScIQ7SHBW6bFCYfEP+fp0Eppr1SHhIO5nd1PjZtvclzSzES9D/p5nFJurwfWg==",
      "dev": true,
      "peer": true
    },
    "node_modules/path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha512-bpC7GYwiDYQ4wYLe+FA8lhRjhQCMcQGuSgGGqDkg/QerRWw9CmGRT0iSOVRSZJ29NMLZgIzqaljJ63oaL4NIJQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pathval": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/pathval/-/pathval-1.1.1.tgz",
      "integrity": "sha512-Dp6zGqpTdETdR63lehJYPeIOqpiNBNtc7BpWSLrOje7UaIsE5aY92r/AunQA7rsXvet3lrJ3JnZX29UPTKXyKQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/pbkdf2": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.1.2.tgz",
      "integrity": "sha512-iuh7L6jA7JEGu2WxDwtQP1ddOpaJNC4KlDEFfdQajSGgGPNi4OyDc2R7QnbY2bR9QjBVGwgvTdNJZoE7RaxUMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "create-hash": "^1.1.2",
        "create-hmac": "^1.1.4",
        "ripemd160": "^2.0.1",
        "safe-buffer": "^5.0.1",
        "sha.js": "^2.4.8"
      },
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha512-ESF23V4SKG6lVSGZgYNpbsiaAkdab6ZgOxe52p7+Kid3W3u3bxR4Vfd/o21dmN7jSt0IwgZ4v5MUd26FEtXE9w==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "2.8.8",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-2.8.8.tgz",
      "integrity": "sha512-tdN8qQGvNjw4CHbY+XXk0JgCXn9QiF21a55rBe5LJAU+kDyC4WQn4+awm2Xfk2lQMk5fKup9XgzTZtGkjBdP9Q==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin-prettier.js"
      },
      "engines": {
        "node": ">=10.13.0"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/promise": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/promise/-/promise-8.3.0.tgz",
      "integrity": "sha512-rZPNPKTOYVNEEKFaq1HqTgOwZD+4/YHS5ukLzQCypkj+OkYx7iv0mA91lJlpPPZ8vMau3IIGj5Qlwrx+8iiSmg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "asap": "~2.0.6"
      }
    },
    "node_modules/prompts": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz",
      "integrity": "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "kleur": "^3.0.3",
        "sisteransi": "^1.0.5"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/qs": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.13.0.tgz",
      "integrity": "sha512-+38qI9SOr8tfZ4QmJNplMUxqjbe7LKvvZgWdExBOmd+egZTtjLB67Gu0HRX3u/XOq7UU2Nx6nsjvS16Z9uwfpg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "peer": true,
      "dependencies": {
        "side-channel": "^1.0.6"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "peer": true
    },
    "node_modules/randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "^5.1.0"
      }
    },
    "node_modules/raw-body": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.2.tgz",
      "integrity": "sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bytes": "3.1.2",
        "http-errors": "2.0.0",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/readdirp": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.0.2.tgz",
      "integrity": "sha512-yDMz9g+VaZkqBYS/ozoBJwaBhTbZo3UNYQHNRw1D3UFQB8oHB4uS/tAODO+ZLjGWmUbKnIlOWO+aaIiAxrUWHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/rechoir": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz",
      "integrity": "sha512-HFM8rkZ+i3zrV+4LQjwQ0W+ez98pApMGM3HUrN04j3CqzPOzl9nmP15Y8YXNm8QHGv/eacOVEjqhmWpkRV0NAw==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "resolve": "^1.1.6"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/recursive-readdir": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/recursive-readdir/-/recursive-readdir-2.2.3.tgz",
      "integrity": "sha512-8HrF5ZsXk5FAH9dgsx3BlUer73nIhuj+9OrQwEbLTPOBzGkL1lsFCR01am+v+0m2Cmbs1nP12hLDl5FA7EszKA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/reduce-flatten": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/reduce-flatten/-/reduce-flatten-2.0.0.tgz",
      "integrity": "sha512-EJ4UNY/U1t2P/2k6oqotuX2Cc3T6nxJwsM0N0asT7dhrtH1ltUxDn4NalSYmPE2rCkVpcf/X6R0wDwcFpzhd4w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/req-cwd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/req-cwd/-/req-cwd-2.0.0.tgz",
      "integrity": "sha512-ueoIoLo1OfB6b05COxAA9UpeoscNpYyM+BqYlA7H6LVF4hKGPXQQSSaD2YmvDVJMkk4UDpAHIeU1zG53IqjvlQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "req-from": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/req-from": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/req-from/-/req-from-2.0.0.tgz",
      "integrity": "sha512-LzTfEVDVQHBRfjOUMgNBA+V6DWsSnoeKzf42J7l0xa/B4jyPOuuF5MlNSmomLNGemWTnV2TIdjSSLnEn95fOQA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "resolve-from": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.17.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.17.0.tgz",
      "integrity": "sha512-ic+7JYiV8Vi2yzQGFWOkiZD5Z9z7O2Zhm9XMaTxdJExKasieFCr+yXZ/WmXsckHiKl12ar0y6XiXDx3m4RHn1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-parse": "^1.0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
      "integrity": "sha512-GnlH6vxLymXJNMBo7XP1fJIzBFbdYt49CuTwmB/6N53t+kMPRMFKz783LlQ4tv28XoQfMWinAJX6WCGf2IlaIw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/ripemd160": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
      "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hash-base": "^3.0.0",
        "inherits": "^2.0.1"
      }
    },
    "node_modules/rlp": {
      "version": "2.2.7",
      "resolved": "https://registry.npmjs.org/rlp/-/rlp-2.2.7.tgz",
      "integrity": "sha512-d5gdPmgQ0Z+AklL2NVXr/IoSjNZFfTVvQWzL/AM2AOcSzYP2xjlb0AC8YyCLc41MSNf6P6QVtjgPdmVtzb+4lQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "bn.js": "^5.2.0"
      },
      "bin": {
        "rlp": "bin/rlp"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/sc-istanbul": {
      "version": "0.4.6",
      "resolved": "https://registry.npmjs.org/sc-istanbul/-/sc-istanbul-0.4.6.tgz",
      "integrity": "sha512-qJFF/8tW/zJsbyfh/iT/ZM5QNHE3CXxtLJbZsL+CzdJLBsPD7SedJZoUA4d8iAcN2IoMp/Dx80shOOd2x96X/g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "peer": true,
      "dependencies": {
        "abbrev": "1.0.x",
        "async": "1.x",
        "escodegen": "1.8.x",
        "esprima": "2.7.x",
        "glob": "^5.0.15",
        "handlebars": "^4.0.1",
        "js-yaml": "3.x",
        "mkdirp": "0.5.x",
        "nopt": "3.x",
        "once": "1.x",
        "resolve": "1.1.x",
        "supports-color": "^3.1.0",
        "which": "^1.1.1",
        "wordwrap": "^1.0.0"
      },
      "bin": {
        "istanbul": "lib/cli.js"
      }
    },
    "node_modules/sc-istanbul/node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/sc-istanbul/node_modules/glob": {
      "version": "5.0.15",
      "resolved": "https://registry.npmjs.org/glob/-/glob-5.0.15.tgz",
      "integrity": "sha512-c9IPMazfRITpmAAKi22dK1VKxGDX9ehhqfABDriL/lzO92xcUKEJPQHrVA/2YHSNFB4iFlykVmWvwo48nr3OxA==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "peer": true,
      "dependencies": {
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "2 || 3",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/sc-istanbul/node_modules/has-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-1.0.0.tgz",
      "integrity": "sha512-DyYHfIYwAJmjAjSSPKANxI8bFY9YtFrgkAfinBojQ8YJTOuOuav64tMUJv584SES4xl74PmuaevIyaLESHdTAA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sc-istanbul/node_modules/js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/sc-istanbul/node_modules/js-yaml/node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true,
      "license": "BSD-2-Clause",
      "peer": true,
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/sc-istanbul/node_modules/mkdirp": {
      "version": "0.5.6",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
      "integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "minimist": "^1.2.6"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/sc-istanbul/node_modules/resolve": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.1.7.tgz",
      "integrity": "sha512-9znBF0vBcaSN3W2j7wKvdERPwqTxSpCq+if5C0WoTCyV9n24rua28jeuQ2pL/HOf+yUe/Mef+H/5p60K0Id3bg==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/sc-istanbul/node_modules/supports-color": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-3.2.3.tgz",
      "integrity": "sha512-Jds2VIYDrlp5ui7t8abHN2bjAu4LV/q4N2KivFPpGH0lrka0BMq/33AmECUXlKPcHigkNaqfXRENFju+rlcy+A==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "has-flag": "^1.0.0"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/scrypt-js": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/scrypt-js/-/scrypt-js-3.0.1.tgz",
      "integrity": "sha512-cdwTTnqPu0Hyvf5in5asVdZocVDTNRmR7XEcJuIzMjJeSHybHl7vpB66AzwTaIg6CLSbtjcxc8fqcySfnTkccA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/secp256k1": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/secp256k1/-/secp256k1-4.0.4.tgz",
      "integrity": "sha512-6JfvwvjUOn8F/jUoBY2Q1v5WY5XS+rj8qSe0v8Y4ezH4InLgTEeOOPQsRll9OV429Pvo6BCHGavIyJfr3TAhsw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "elliptic": "^6.5.7",
        "node-addon-api": "^5.0.0",
        "node-gyp-build": "^4.2.0"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/secp256k1/node_modules/bn.js": {
      "version": "4.12.0",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.12.0.tgz",
      "integrity": "sha512-c98Bf3tPniI+scsdk237ku1Dc3ujXQTSgyiPUDEOe7tRkhrqridvh8klBv0HCEso1OLOYcHuCv/cS6DNxKH+ZA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/secp256k1/node_modules/elliptic": {
      "version": "6.6.0",
      "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.6.0.tgz",
      "integrity": "sha512-dpwoQcLc/2WLQvJvLRHKZ+f9FgOdjnq11rurqwekGQygGPsYSK29OMMD2WalatiqQ+XGFDglTNixpPfI+lpaAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bn.js": "^4.11.9",
        "brorand": "^1.1.0",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.1",
        "inherits": "^2.0.4",
        "minimalistic-assert": "^1.0.1",
        "minimalistic-crypto-utils": "^1.0.1"
      }
    },
    "node_modules/secp256k1/node_modules/node-addon-api": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-5.1.0.tgz",
      "integrity": "sha512-eh0GgfEkpnoWDq+VY8OyvYhFEzBk6jIYbRKdIlyTiAXIVJ8PyBaKb0rp7oDtoddbdoHWhq8wwr+XZ81F1rpNdA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/serialize-javascript": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.2.tgz",
      "integrity": "sha512-Saa1xPByTTq2gdeFZYLLo+RFE35NHZkAbqZeWNd3BpzppeVisAqpDjcp8dyf6uIvEqJRd46jemmyA4iFIeVk8g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "randombytes": "^2.1.0"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/sha.js": {
      "version": "2.4.11",
      "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
      "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
      "dev": true,
      "license": "(MIT AND BSD-3-Clause)",
      "dependencies": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      },
      "bin": {
        "sha.js": "bin.js"
      }
    },
    "node_modules/sha1": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/sha1/-/sha1-1.1.1.tgz",
      "integrity": "sha512-dZBS6OrMjtgVkopB1Gmo4RQCDKiZsqcpAQpkV/aaj+FCrCg8r4I4qMkDPQjBgLIxlmu9k4nUbWq6ohXahOneYA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "peer": true,
      "dependencies": {
        "charenc": ">= 0.0.1",
        "crypt": ">= 0.0.1"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/shelljs": {
      "version": "0.8.5",
      "resolved": "https://registry.npmjs.org/shelljs/-/shelljs-0.8.5.tgz",
      "integrity": "sha512-TiwcRcrkhHvbrZbnRcFYMLl30Dfov3HKqzp5tO5b4pt6G/SezKcYhmDg15zXVBswHmctSAQKznqNW2LO5tTDow==",
      "dev": true,
      "license": "BSD-3-Clause",
      "peer": true,
      "dependencies": {
        "glob": "^7.0.0",
        "interpret": "^1.0.0",
        "rechoir": "^0.6.2"
      },
      "bin": {
        "shjs": "bin/shjs"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/side-channel": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.6.tgz",
      "integrity": "sha512-fDW/EZ6Q9RiO8eFG8Hj+7u/oW+XrPTIChwCOM2+th2A6OblDtYYIpve9m+KvI9Z4C9qSEXlaGR6bTEYHReuglA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.4",
        "object-inspect": "^1.13.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/sisteransi": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
      "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/slice-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-4.0.0.tgz",
      "integrity": "sha512-qMCMfhY040cVHT43K9BFygqYbUPFZKHOg7K73mtTWJRb8pyP3fzf4Ixd5SzdEJQ6MRUg/WBnOLxghZtKKurENQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "astral-regex": "^2.0.0",
        "is-fullwidth-code-point": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/slice-ansi?sponsor=1"
      }
    },
    "node_modules/slice-ansi/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/slice-ansi/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/slice-ansi/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/solc": {
      "version": "0.8.26",
      "resolved": "https://registry.npmjs.org/solc/-/solc-0.8.26.tgz",
      "integrity": "sha512-yiPQNVf5rBFHwN6SIf3TUUvVAFKcQqmSUFeq+fb6pNRCo0ZCgpYOZDi3BVoezCPIAcKrVYd/qXlBLUP9wVrZ9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "command-exists": "^1.2.8",
        "commander": "^8.1.0",
        "follow-redirects": "^1.12.1",
        "js-sha3": "0.8.0",
        "memorystream": "^0.3.1",
        "semver": "^5.5.0",
        "tmp": "0.0.33"
      },
      "bin": {
        "solcjs": "solc.js"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/solc/node_modules/semver": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.2.tgz",
      "integrity": "sha512-cBznnQ9KjJqU67B52RMC65CMarK2600WFnbkcaiwWq3xy/5haFJlshgnpjovMVJ+Hff49d8GEn0b87C5pDQ10g==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/solidity-coverage": {
      "version": "0.8.13",
      "resolved": "https://registry.npmjs.org/solidity-coverage/-/solidity-coverage-0.8.13.tgz",
      "integrity": "sha512-RiBoI+kF94V3Rv0+iwOj3HQVSqNzA9qm/qDP1ZDXK5IX0Cvho1qiz8hAXTsAo6KOIUeP73jfscq0KlLqVxzGWA==",
      "dev": true,
      "license": "ISC",
      "peer": true,
      "dependencies": {
        "@ethersproject/abi": "^5.0.9",
        "@solidity-parser/parser": "^0.18.0",
        "chalk": "^2.4.2",
        "death": "^1.1.0",
        "difflib": "^0.2.4",
        "fs-extra": "^8.1.0",
        "ghost-testrpc": "^0.0.2",
        "global-modules": "^2.0.0",
        "globby": "^10.0.1",
        "jsonschema": "^1.2.4",
        "lodash": "^4.17.21",
        "mocha": "^10.2.0",
        "node-emoji": "^1.10.0",
        "pify": "^4.0.1",
        "recursive-readdir": "^2.2.2",
        "sc-istanbul": "^0.4.5",
        "semver": "^7.3.4",
        "shelljs": "^0.8.3",
        "web3-utils": "^1.3.6"
      },
      "bin": {
        "solidity-coverage": "plugins/bin.js"
      },
      "peerDependencies": {
        "hardhat": "^2.11.0"
      }
    },
    "node_modules/solidity-coverage/node_modules/@solidity-parser/parser": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/@solidity-parser/parser/-/parser-0.18.0.tgz",
      "integrity": "sha512-yfORGUIPgLck41qyN7nbwJRAx17/jAIXCTanHOJZhB6PJ1iAk/84b/xlsVKFSyNyLXIj0dhppoE0+CRws7wlzA==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/solidity-coverage/node_modules/fs-extra": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
      "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^4.0.0",
        "universalify": "^0.1.0"
      },
      "engines": {
        "node": ">=6 <7 || >=8"
      }
    },
    "node_modules/solidity-coverage/node_modules/semver": {
      "version": "7.6.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
      "integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
      "dev": true,
      "license": "ISC",
      "peer": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.21",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
      "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/split2": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/split2/-/split2-3.2.2.tgz",
      "integrity": "sha512-9NThjpgZnifTkJpzTZ7Eue85S49QwpNhZTq6GRJwObb6jnLFNGB7Qm73V5HewTROPyxD0C29xqmaI68bQtV+hg==",
      "dev": true,
      "license": "ISC",
      "peer": true,
      "dependencies": {
        "readable-stream": "^3.0.0"
      }
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "peer": true
    },
    "node_modules/stacktrace-parser": {
      "version": "0.1.10",
      "resolved": "https://registry.npmjs.org/stacktrace-parser/-/stacktrace-parser-0.1.10.tgz",
      "integrity": "sha512-KJP1OCML99+8fhOHxwwzyWrlUuVX5GQ0ZpJTd1DFXhdkrvg1szxfHhawXUZ3g9TkXORQd4/WG68jMlQZ2p8wlg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.7.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/stacktrace-parser/node_modules/type-fest": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.7.1.tgz",
      "integrity": "sha512-Ne2YiiGN8bmrmJJEuTWTLJR32nh/JdL1+PSicowtNb0WFpn59GK8/lfD61bVtzguz7b3PBt74nxpv/Pw5po5Rg==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/string-format": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/string-format/-/string-format-2.0.0.tgz",
      "integrity": "sha512-bbEs3scLeYNXLecRRuk6uJxdXUSj6le/8rNPHChIJTn2V79aXVTR1EH2OH5zLKKoz0V02fOUKZZcw01pLUShZA==",
      "dev": true,
      "license": "WTFPL OR MIT"
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-hex-prefix": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-hex-prefix/-/strip-hex-prefix-1.0.0.tgz",
      "integrity": "sha512-q8d4ue7JGEiVcypji1bALTos+0pWtyGlivAWyPuTkHzuTCJqrK9sWxYQZUq6Nq3cuyv3bm734IhHvHtGGURU6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-hex-prefixed": "1.0.0"
      },
      "engines": {
        "node": ">=6.5.0",
        "npm": ">=3"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/sync-request": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/sync-request/-/sync-request-6.1.0.tgz",
      "integrity": "sha512-8fjNkrNlNCrVc/av+Jn+xxqfCjYaBoHqCsDz6mt030UMxJGr+GSfCV1dQt2gRtlL63+VPidwDVLr7V2OcTSdRw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "http-response-object": "^3.0.1",
        "sync-rpc": "^1.2.1",
        "then-request": "^6.0.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/sync-rpc": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/sync-rpc/-/sync-rpc-1.3.6.tgz",
      "integrity": "sha512-J8jTXuZzRlvU7HemDgHi3pGnh/rkoqR/OZSjhTyyZrEkkYQbk7Z33AXp37mkPfPpfdOuj7Ex3H/TJM1z48uPQw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "get-port": "^3.1.0"
      }
    },
    "node_modules/table": {
      "version": "6.8.2",
      "resolved": "https://registry.npmjs.org/table/-/table-6.8.2.tgz",
      "integrity": "sha512-w2sfv80nrAh2VCbqR5AK27wswXhqcck2AhfnNW76beQXskGZ1V12GwS//yYVa3d3fcvAip2OUnbDAjW2k3v9fA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "ajv": "^8.0.1",
        "lodash.truncate": "^4.4.2",
        "slice-ansi": "^4.0.0",
        "string-width": "^4.2.3",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/table-layout": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/table-layout/-/table-layout-1.0.2.tgz",
      "integrity": "sha512-qd/R7n5rQTRFi+Zf2sk5XVVd9UQl6ZkduPFC3S7WEGJAmetDTjY3qPN50eSKzwuzEyQKy5TN2TiZdkIjos2L6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-back": "^4.0.1",
        "deep-extend": "~0.6.0",
        "typical": "^5.2.0",
        "wordwrapjs": "^4.0.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/table-layout/node_modules/array-back": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/array-back/-/array-back-4.0.2.tgz",
      "integrity": "sha512-NbdMezxqf94cnNfWLL7V/im0Ub+Anbb0IoZhvzie8+4HJ4nMQuzHuy49FkGYCJK2yAloZ3meiB6AVMClbrI1vg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/table-layout/node_modules/typical": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/typical/-/typical-5.2.0.tgz",
      "integrity": "sha512-dvdQgNDNJo+8B2uBQoqdb11eUCE1JQXhvjC/CZtgvZseVd5TYMXnq0+vuUemXbd/Se29cTaUuPX3YIc2xgbvIg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/then-request": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/then-request/-/then-request-6.0.2.tgz",
      "integrity": "sha512-3ZBiG7JvP3wbDzA9iNY5zJQcHL4jn/0BWtXIkagfz7QgOL/LqjCEOBQuJNZfu0XYnv5JhKh+cDxCPM4ILrqruA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/concat-stream": "^1.6.0",
        "@types/form-data": "0.0.33",
        "@types/node": "^8.0.0",
        "@types/qs": "^6.2.31",
        "caseless": "~0.12.0",
        "concat-stream": "^1.6.0",
        "form-data": "^2.2.0",
        "http-basic": "^8.1.1",
        "http-response-object": "^3.0.1",
        "promise": "^8.0.0",
        "qs": "^6.4.0"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/then-request/node_modules/@types/node": {
      "version": "8.10.66",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-8.10.66.tgz",
      "integrity": "sha512-tktOkFUA4kXx2hhhrB8bIFb5TbwzS4uOhKEmwiD+NoiL0qtP2OQ9mFldbgD4dV1djrlBYP6eBuQZiWjuHUpqFw==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/then-request/node_modules/form-data": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.5.2.tgz",
      "integrity": "sha512-GgwY0PS7DbXqajuGf4OYlsrIu3zgxD6Vvql43IBhm6MahqA5SK/7mwhtNj2AdH2z35YR34ujJ7BN+3fFC3jP5Q==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12",
        "safe-buffer": "^5.2.1"
      },
      "engines": {
        "node": ">= 0.12"
      }
    },
    "node_modules/through2": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/through2/-/through2-4.0.2.tgz",
      "integrity": "sha512-iOqSav00cVxEEICeD7TjLB1sueEL+81Wpzp2bY17uZjZN0pWZPuo4suZ/61VujxmqSGFfgOcNuTZ85QJwNZQpw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "readable-stream": "3"
      }
    },
    "node_modules/tmp": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "os-tmpdir": "~1.0.2"
      },
      "engines": {
        "node": ">=0.6.0"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/ts-command-line-args": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/ts-command-line-args/-/ts-command-line-args-2.5.1.tgz",
      "integrity": "sha512-H69ZwTw3rFHb5WYpQya40YAX2/w7Ut75uUECbgBIsLmM+BNuYnxsltfyyLMxy6sEeKxgijLTnQtLd0nKd6+IYw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "chalk": "^4.1.0",
        "command-line-args": "^5.1.1",
        "command-line-usage": "^6.1.0",
        "string-format": "^2.0.0"
      },
      "bin": {
        "write-markdown": "dist/write-markdown.js"
      }
    },
    "node_modules/ts-command-line-args/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/ts-command-line-args/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/ts-command-line-args/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/ts-command-line-args/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ts-command-line-args/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ts-command-line-args/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ts-essentials": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/ts-essentials/-/ts-essentials-7.0.3.tgz",
      "integrity": "sha512-8+gr5+lqO3G84KdiTSMRLtuyJ+nTBVRKuCrK4lidMPdVeEp0uqC875uE5NMcaA7YYMN7XsNiFQuMvasF8HT/xQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "typescript": ">=3.7.0"
      }
    },
    "node_modules/ts-node": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
      "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/ts-node/node_modules/diff": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
      "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/tslib": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.7.0.tgz",
      "integrity": "sha512-gLXCKdN1/j47AiHiOkJN69hJmcbGTHI0ImLmbYLHykhgeN0jVGola9yVjFgzCUklsZQMW55o+dW7IXv3RCXDzA==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/tsort": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/tsort/-/tsort-0.0.1.tgz",
      "integrity": "sha512-Tyrf5mxF8Ofs1tNoxA13lFeZ2Zrbd6cKbuH3V+MQ5sb6DtBj5FjrXVsRWT8YvNAQTqNoz66dz1WsbigI22aEnw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tweetnacl": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-1.0.3.tgz",
      "integrity": "sha512-6rt+RN7aOi1nGMyC4Xa5DdYiukl2UWCbcJft7YhxReBGQD7OAM8Pbxw6YMo4r2diNEA8FEmu32YOn9rhaiE5yw==",
      "dev": true,
      "license": "Unlicense"
    },
    "node_modules/tweetnacl-util": {
      "version": "0.15.1",
      "resolved": "https://registry.npmjs.org/tweetnacl-util/-/tweetnacl-util-0.15.1.tgz",
      "integrity": "sha512-RKJBIj8lySrShN4w6i/BonWp2Z/uxwC3h4y7xsRrpP59ZboCd0GpEVsOnMDYLMmKBpYhb5TgHzZXy7wTfYFBRw==",
      "dev": true,
      "license": "Unlicense"
    },
    "node_modules/type-check": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha512-ZCmOJdvOWDBYJlzAoFkC+Q0+bUyEOS1ltgp1MGU03fqHG+dbi9tBFU2Rd9QKiDZFAYrhPh2JUf7rZRIuHRKtOg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "prelude-ls": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-detect": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.1.0.tgz",
      "integrity": "sha512-Acylog8/luQ8L7il+geoSxhEkazvkslg7PSNKOX59mbB9cOveP5aq9h74Y7YU8yDpJwetzQQrfIwtf4Wp4LKcw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/type-fest": {
      "version": "0.21.3",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
      "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typechain": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/typechain/-/typechain-8.3.2.tgz",
      "integrity": "sha512-x/sQYr5w9K7yv3es7jo4KTX05CLxOf7TRWwoHlrjRh8H82G64g+k7VuWPJlgMo6qrjfCulOdfBjiaDtmhFYD/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/prettier": "^2.1.1",
        "debug": "^4.3.1",
        "fs-extra": "^7.0.0",
        "glob": "7.1.7",
        "js-sha3": "^0.8.0",
        "lodash": "^4.17.15",
        "mkdirp": "^1.0.4",
        "prettier": "^2.3.1",
        "ts-command-line-args": "^2.2.0",
        "ts-essentials": "^7.0.1"
      },
      "bin": {
        "typechain": "dist/cli/cli.js"
      },
      "peerDependencies": {
        "typescript": ">=4.3.0"
      }
    },
    "node_modules/typechain/node_modules/glob": {
      "version": "7.1.7",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
      "integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha512-/aCDEGatGvZ2BIk+HmLf4ifCJFwvKFNb9/JeZPMulfgFracn9QFcAf5GO8B/mweUjSoblS5In0cWhqpfs/5PQA==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/typescript": {
      "version": "5.6.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.6.3.tgz",
      "integrity": "sha512-hjcS1mhfuyi4WW8IWtjP7brDrG2cuDZukyrYrSauoXGNgx0S7zceP07adYkJycEr56BOUTNPzbInooiN3fn1qw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typical": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/typical/-/typical-4.0.0.tgz",
      "integrity": "sha512-VAH4IvQ7BDFYglMd7BPRDfLgxZZX4O4TFcRDA6EN5X7erNJJq+McIEp8np9aVtxrCJ6qx4GTYVfOWNjcqwZgRw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/uglify-js": {
      "version": "3.19.3",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.19.3.tgz",
      "integrity": "sha512-v3Xu+yuwBXisp6QYTcH4UbH+xYJXqnq2m/LtQVWKWzYc1iehYnLixoQDN9FH6/j9/oybfd6W9Ghwkl8+UMKTKQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "optional": true,
      "peer": true,
      "bin": {
        "uglifyjs": "bin/uglifyjs"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/undici": {
      "version": "5.28.4",
      "resolved": "https://registry.npmjs.org/undici/-/undici-5.28.4.tgz",
      "integrity": "sha512-72RFADWFqKmUb2hmmvNODKL3p9hcB6Gt2DOQMis1SEBaV6a4MH8soBvzg+95CYhCKPFedut2JY9bMfrDl9D23g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@fastify/busboy": "^2.0.0"
      },
      "engines": {
        "node": ">=14.0"
      }
    },
    "node_modules/undici-types": {
      "version": "6.19.8",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.19.8.tgz",
      "integrity": "sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/universalify": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/utf8": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/utf8/-/utf8-3.0.0.tgz",
      "integrity": "sha512-E8VjFIQ/TyQgp+TZfS6l8yp/xWppSAHzidGiRrqe4bK4XP9pTRyKFgGJpO3SN7zdX4DeomTrwaseCHovfpFcqQ==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/v8-compile-cache-lib": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
      "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/web3-utils": {
      "version": "1.10.4",
      "resolved": "https://registry.npmjs.org/web3-utils/-/web3-utils-1.10.4.tgz",
      "integrity": "sha512-tsu8FiKJLk2PzhDl9fXbGUWTkkVXYhtTA+SmEFkKft+9BgwLxfCRpU96sWv7ICC8zixBNd3JURVoiR3dUXgP8A==",
      "dev": true,
      "license": "LGPL-3.0",
      "peer": true,
      "dependencies": {
        "@ethereumjs/util": "^8.1.0",
        "bn.js": "^5.2.1",
        "ethereum-bloom-filters": "^1.0.6",
        "ethereum-cryptography": "^2.1.2",
        "ethjs-unit": "0.1.6",
        "number-to-bn": "1.7.0",
        "randombytes": "^2.1.0",
        "utf8": "3.0.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/web3-utils/node_modules/@noble/curves": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/@noble/curves/-/curves-1.4.2.tgz",
      "integrity": "sha512-TavHr8qycMChk8UwMld0ZDRvatedkzWfH8IiaeGCfymOP5i0hSCozz9vHOL0nkwk7HRMlFnAiKpS2jrUmSybcw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@noble/hashes": "1.4.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/web3-utils/node_modules/@noble/hashes": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@noble/hashes/-/hashes-1.4.0.tgz",
      "integrity": "sha512-V1JJ1WTRUqHHrOSh597hURcMqVKVGL/ea3kv0gSnEdsEZ0/+VyPghM1lMNGc00z7CIQorSvbKpuJkxvuHbvdbg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">= 16"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/web3-utils/node_modules/@scure/bip32": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@scure/bip32/-/bip32-1.4.0.tgz",
      "integrity": "sha512-sVUpc0Vq3tXCkDGYVWGIZTRfnvu8LoTDaev7vbwh0omSvVORONr960MQWdKqJDCReIEmTj3PAr73O3aoxz7OPg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@noble/curves": "~1.4.0",
        "@noble/hashes": "~1.4.0",
        "@scure/base": "~1.1.6"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/web3-utils/node_modules/@scure/bip39": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@scure/bip39/-/bip39-1.3.0.tgz",
      "integrity": "sha512-disdg7gHuTDZtY+ZdkmLpPCk7fxZSu3gBiEGuoC1XYxv9cGx3Z6cpTggCgW6odSOOIXCiDjuGejW+aJKCY/pIQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@noble/hashes": "~1.4.0",
        "@scure/base": "~1.1.6"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/web3-utils/node_modules/ethereum-cryptography": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/ethereum-cryptography/-/ethereum-cryptography-2.2.1.tgz",
      "integrity": "sha512-r/W8lkHSiTLxUxW8Rf3u4HGB0xQweG2RyETjywylKZSzLWoWAijRz8WCuOtJ6wah+avllXBqZuk29HCCvhEIRg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@noble/curves": "1.4.2",
        "@noble/hashes": "1.4.0",
        "@scure/bip32": "1.4.0",
        "@scure/bip39": "1.3.0"
      }
    },
    "node_modules/which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "license": "ISC",
      "peer": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "which": "bin/which"
      }
    },
    "node_modules/widest-line": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
      "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "string-width": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha512-gvVzJFlPycKc5dZN4yPkP8w7Dc37BtP1yczEneOb4uq34pXZcvrtRTmWV8W+Ume+XCxKgbjM+nevkyFPMybd4Q==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/wordwrapjs": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/wordwrapjs/-/wordwrapjs-4.0.1.tgz",
      "integrity": "sha512-kKlNACbvHrkpIw6oPeYDSmdCTu2hdMHoyXLTcUKala++lx5Y+wjJ/e474Jqv5abnVmwxw08DiTuHmw69lJGksA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "reduce-flatten": "^2.0.0",
        "typical": "^5.2.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/wordwrapjs/node_modules/typical": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/typical/-/typical-5.2.0.tgz",
      "integrity": "sha512-dvdQgNDNJo+8B2uBQoqdb11eUCE1JQXhvjC/CZtgvZseVd5TYMXnq0+vuUemXbd/Se29cTaUuPX3YIc2xgbvIg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/workerpool": {
      "version": "6.5.1",
      "resolved": "https://registry.npmjs.org/workerpool/-/workerpool-6.5.1.tgz",
      "integrity": "sha512-Fs4dNYcsdpYSAfVxhnl1L5zTksjvOJxtC5hzMNl+1t9B8hTJTdKDyZ5ju7ztgPy+ft9tBFXoOlDNiOT9WUXZlA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/wrap-ansi/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/ws": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.17.1.tgz",
      "integrity": "sha512-6XQFvXTkbfUOZOKKILFG1PDK2NDQs4azKQl26T0YS5CxqWLgXajbPZ+h4gZekJyRqFU8pvnbAbbs/3TgRPy+GQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs": {
      "version": "16.2.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
      "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^7.0.2",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^20.2.2"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs-parser": {
      "version": "20.2.9",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
      "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs-unparser": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/yargs-unparser/-/yargs-unparser-2.0.0.tgz",
      "integrity": "sha512-7pRTIA9Qc1caZ0bZ6RYRGbHJthJWuakf+WmHK0rVeLkNrrGhfoabBNdue6kdINI6r4if7ocq9aD/n7xwKOdzOA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "camelcase": "^6.0.0",
        "decamelize": "^4.0.0",
        "flat": "^5.0.2",
        "is-plain-obj": "^2.1.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}
