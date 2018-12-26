import web3 from './web3';

const abi = [
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "randomOracle",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenWhitelist",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "prizeStore",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "prizeStoreAddress",
          "type": "address"
        },
        {
          "name": "oracleAddress",
          "type": "address"
        },
        {
          "name": "tokenWhitelistAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldPrizeStore",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newPrizeStore",
          "type": "address"
        }
      ],
      "name": "PrizeStoreChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldOracle",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newOracle",
          "type": "address"
        }
      ],
      "name": "RandomOracleChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldWinThreshold",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newWinThreshold",
          "type": "uint256"
        }
      ],
      "name": "WinThresholdChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "player",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "playerWon",
          "type": "bool"
        }
      ],
      "name": "GameOver",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "play",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newPrizeStore",
          "type": "address"
        }
      ],
      "name": "changePrizeStore",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOracle",
          "type": "address"
        }
      ],
      "name": "changeRandomOracle",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newThreshold",
          "type": "uint256"
        }
      ],
      "name": "changeWinThreshold",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const address = '0x5170FCbE91114dA185C0959a604404Da0F223868'
  

  export default new web3.eth.Contract(abi, address);