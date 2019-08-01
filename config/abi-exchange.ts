// tslint:disable: object-literal-sort-keys

export default [
  {
    constant: false,
    inputs: [
      {
        name: 'newTakerFeeRate',
        type: 'uint256',
      },
    ],
    name: 'setTakerFeeRate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x020de876',
  },
  {
    constant: true,
    inputs: [],
    name: 'newExchange',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x0380fd03',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'partialAmount',
        type: 'uint256',
      },
      {
        components: [
          {
            name: 'makerSellAmount',
            type: 'uint256',
          },
          {
            name: 'makerBuyAmount',
            type: 'uint256',
          },
          {
            name: 'takerSellAmount',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'expiration',
            type: 'uint256',
          },
          {
            name: 'taker',
            type: 'address',
          },
          {
            name: 'maker',
            type: 'address',
          },
          {
            name: 'makerSellToken',
            type: 'address',
          },
          {
            name: 'makerBuyToken',
            type: 'address',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
    ],
    name: 'getOrderInfo',
    outputs: [
      {
        components: [
          {
            name: 'filledAmount',
            type: 'uint256',
          },
          {
            name: 'hash',
            type: 'bytes32',
          },
          {
            name: 'status',
            type: 'uint8',
          },
        ],
        name: 'orderInfo',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x1e15897c',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'givenTokens',
        type: 'address[]',
      },
      {
        name: 'receivedTokens',
        type: 'address[]',
      },
      {
        name: 'givenAmounts',
        type: 'uint256[]',
      },
    ],
    name: 'getExpectedRateBatch',
    outputs: [
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x2485035c',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'contributions',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x29369ccf',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerSellAmount',
            type: 'uint256',
          },
          {
            name: 'makerBuyAmount',
            type: 'uint256',
          },
          {
            name: 'takerSellAmount',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'expiration',
            type: 'uint256',
          },
          {
            name: 'taker',
            type: 'address',
          },
          {
            name: 'maker',
            type: 'address',
          },
          {
            name: 'makerSellToken',
            type: 'address',
          },
          {
            name: 'makerBuyToken',
            type: 'address',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'cancelSingleOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x2d7abb83',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newMakerFeeRate',
        type: 'uint256',
      },
    ],
    name: 'setMakerFeeRate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x33daaa5e',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerSellAmount',
            type: 'uint256',
          },
          {
            name: 'makerBuyAmount',
            type: 'uint256',
          },
          {
            name: 'takerSellAmount',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'expiration',
            type: 'uint256',
          },
          {
            name: 'taker',
            type: 'address',
          },
          {
            name: 'maker',
            type: 'address',
          },
          {
            name: 'makerSellToken',
            type: 'address',
          },
          {
            name: 'makerBuyToken',
            type: 'address',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'cancelMultipleOrders',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x37bcb2b1',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerSellAmount',
            type: 'uint256',
          },
          {
            name: 'makerBuyAmount',
            type: 'uint256',
          },
          {
            name: 'takerSellAmount',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'expiration',
            type: 'uint256',
          },
          {
            name: 'taker',
            type: 'address',
          },
          {
            name: 'maker',
            type: 'address',
          },
          {
            name: 'makerSellToken',
            type: 'address',
          },
          {
            name: 'makerBuyToken',
            type: 'address',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'takeAllPossible',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x3a891e0f',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getReferral',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x3b0f0f2f',
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            name: 'makerSellAmount',
            type: 'uint256',
          },
          {
            name: 'makerBuyAmount',
            type: 'uint256',
          },
          {
            name: 'takerSellAmount',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'expiration',
            type: 'uint256',
          },
          {
            name: 'taker',
            type: 'address',
          },
          {
            name: 'maker',
            type: 'address',
          },
          {
            name: 'makerSellToken',
            type: 'address',
          },
          {
            name: 'makerBuyToken',
            type: 'address',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
    ],
    name: 'getHash',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
    signature: '0x40a330bd',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newFeeAccount',
        type: 'address',
      },
    ],
    name: 'setFeeAccount',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x4b023cf8',
  },
  {
    constant: true,
    inputs: [],
    name: 'takerFeeRate',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x5458f0a0',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'givenAmount',
        type: 'uint256',
      },
      {
        name: 'givenToken',
        type: 'address',
      },
      {
        name: 'receivedToken',
        type: 'address',
      },
      {
        name: 'hash',
        type: 'bytes32',
      },
    ],
    name: 'kyberTrade',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x5728ab6c',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerSellAmount',
            type: 'uint256',
          },
          {
            name: 'makerBuyAmount',
            type: 'uint256',
          },
          {
            name: 'takerSellAmount',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'expiration',
            type: 'uint256',
          },
          {
            name: 'taker',
            type: 'address',
          },
          {
            name: 'maker',
            type: 'address',
          },
          {
            name: 'makerSellToken',
            type: 'address',
          },
          {
            name: 'makerBuyToken',
            type: 'address',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
      {
        name: 'givenAmount',
        type: 'uint256',
      },
      {
        name: 'givenToken',
        type: 'address',
      },
      {
        name: 'receivedToken',
        type: 'address',
      },
      {
        name: 'referral',
        type: 'address',
      },
    ],
    name: 'swapFill',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    signature: '0x61c4ac36',
  },
  {
    constant: true,
    inputs: [],
    name: 'feeAccount',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x65e17c9d',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
      {
        name: 'token',
        type: 'address[]',
      },
    ],
    name: 'getBalances',
    outputs: [
      {
        name: 'balanceArray',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x6a385ae9',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerSellAmount',
            type: 'uint256',
          },
          {
            name: 'makerBuyAmount',
            type: 'uint256',
          },
          {
            name: 'takerSellAmount',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'expiration',
            type: 'uint256',
          },
          {
            name: 'taker',
            type: 'address',
          },
          {
            name: 'maker',
            type: 'address',
          },
          {
            name: 'makerSellToken',
            type: 'address',
          },
          {
            name: 'makerBuyToken',
            type: 'address',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'trade',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x6db28156',
  },
  {
    constant: false,
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x715018a6',
  },
  {
    constant: true,
    inputs: [],
    name: 'makerFeeRate',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x7428f89e',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'orderHash',
        type: 'bytes32[]',
      },
    ],
    name: 'getFills',
    outputs: [
      {
        name: 'filledArray',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x7cdaf9ed',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'burnTokensWhenFinished',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x7fb33dc6',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'importTokens',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x83960e3c',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8da5cb5b',
  },
  {
    constant: true,
    inputs: [],
    name: 'isOwner',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8f32d59b',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'orderHash',
        type: 'bytes32[]',
      },
    ],
    name: 'getCancels',
    outputs: [
      {
        name: 'cancelledArray',
        type: 'bool[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x9b9aa478',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'exchange',
        type: 'address',
      },
    ],
    name: 'setNewExchangeAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x9c489edb',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'orderHash',
        type: 'bytes32',
      },
    ],
    name: 'getFill',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xa884a248',
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            name: 'makerSellAmount',
            type: 'uint256',
          },
          {
            name: 'makerBuyAmount',
            type: 'uint256',
          },
          {
            name: 'takerSellAmount',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'expiration',
            type: 'uint256',
          },
          {
            name: 'taker',
            type: 'address',
          },
          {
            name: 'maker',
            type: 'address',
          },
          {
            name: 'makerSellToken',
            type: 'address',
          },
          {
            name: 'makerBuyToken',
            type: 'address',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
    ],
    name: 'getPrefixedHash',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
    signature: '0xaaee0f3d',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'importEthers',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    signature: '0xae41480b',
  },
  {
    constant: false,
    inputs: [],
    name: 'allowOrRestrictMigrations',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xb0d79497',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'orderHash',
        type: 'bytes32',
      },
    ],
    name: 'getCancel',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xb1be53e9',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'tokens',
        type: 'address[]',
      },
    ],
    name: 'migrateFunds',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xbe3dd131',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'to',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    signature: '0xbeabacc8',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerSellAmount',
            type: 'uint256',
          },
          {
            name: 'makerBuyAmount',
            type: 'uint256',
          },
          {
            name: 'takerSellAmount',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'expiration',
            type: 'uint256',
          },
          {
            name: 'taker',
            type: 'address',
          },
          {
            name: 'maker',
            type: 'address',
          },
          {
            name: 'makerSellToken',
            type: 'address',
          },
          {
            name: 'makerBuyToken',
            type: 'address',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'takeAllOrRevert',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xbf575f7a',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'weiAmount',
        type: 'uint256',
      },
      {
        components: [
          {
            name: 'startBlock',
            type: 'uint256',
          },
          {
            name: 'endBlock',
            type: 'uint256',
          },
          {
            name: 'hardCap',
            type: 'uint256',
          },
          {
            name: 'leftAmount',
            type: 'uint256',
          },
          {
            name: 'tokenRatio',
            type: 'uint256',
          },
          {
            name: 'minContribution',
            type: 'uint256',
          },
          {
            name: 'maxContribution',
            type: 'uint256',
          },
          {
            name: 'weiRaised',
            type: 'uint256',
          },
          {
            name: 'wallet',
            type: 'address',
          },
        ],
        name: 'crowdsale',
        type: 'tuple',
      },
      {
        name: 'user',
        type: 'address',
      },
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'validContribution',
    outputs: [
      {
        name: '',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xc5d172dd',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'beneficiary',
        type: 'address',
      },
      {
        name: 'referral',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    signature: '0xc6f1649f',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getBalance',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xd4fac45d',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'crowdsales',
    outputs: [
      {
        name: 'startBlock',
        type: 'uint256',
      },
      {
        name: 'endBlock',
        type: 'uint256',
      },
      {
        name: 'hardCap',
        type: 'uint256',
      },
      {
        name: 'leftAmount',
        type: 'uint256',
      },
      {
        name: 'tokenRatio',
        type: 'uint256',
      },
      {
        name: 'minContribution',
        type: 'uint256',
      },
      {
        name: 'maxContribution',
        type: 'uint256',
      },
      {
        name: 'weiRaised',
        type: 'uint256',
      },
      {
        name: 'wallet',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xdd1e2e0f',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'buyTokens',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    signature: '0xec8ac4d8',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xf2fde38b',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xf3fef3a3',
  },
  {
    constant: true,
    inputs: [],
    name: 'migrationAllowed',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xf878fcc2',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'givenAmount',
        type: 'uint256',
      },
      {
        name: 'givenToken',
        type: 'address',
      },
      {
        name: 'receivedToken',
        type: 'address',
      },
      {
        name: 'hash',
        type: 'bytes32',
      },
    ],
    name: 'kyberSwap',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    signature: '0xfd34d443',
  },
  {
    constant: true,
    inputs: [],
    name: 'VERSION',
    outputs: [
      {
        name: '',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xffa1ad74',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'startBlock',
            type: 'uint256',
          },
          {
            name: 'endBlock',
            type: 'uint256',
          },
          {
            name: 'hardCap',
            type: 'uint256',
          },
          {
            name: 'leftAmount',
            type: 'uint256',
          },
          {
            name: 'tokenRatio',
            type: 'uint256',
          },
          {
            name: 'minContribution',
            type: 'uint256',
          },
          {
            name: 'maxContribution',
            type: 'uint256',
          },
          {
            name: 'weiRaised',
            type: 'uint256',
          },
          {
            name: 'wallet',
            type: 'address',
          },
        ],
        name: 'crowdsale',
        type: 'tuple',
      },
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'registerCrowdsale',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xffa90ead',
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            name: 'startBlock',
            type: 'uint256',
          },
          {
            name: 'endBlock',
            type: 'uint256',
          },
          {
            name: 'hardCap',
            type: 'uint256',
          },
          {
            name: 'leftAmount',
            type: 'uint256',
          },
          {
            name: 'tokenRatio',
            type: 'uint256',
          },
          {
            name: 'minContribution',
            type: 'uint256',
          },
          {
            name: 'maxContribution',
            type: 'uint256',
          },
          {
            name: 'weiRaised',
            type: 'uint256',
          },
          {
            name: 'wallet',
            type: 'address',
          },
        ],
        name: 'crowdsale',
        type: 'tuple',
      },
    ],
    name: 'getCrowdsaleStatus',
    outputs: [
      {
        name: '',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xffaa3add',
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'tokenAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'weiAmount',
        type: 'uint256',
      },
    ],
    name: 'TokenPurchase',
    type: 'event',
    signature: '0x623b3804fa71d67900d064613da8f94b9617215ee90799290593e1745087ad18',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        name: 'tokenAmount',
        type: 'uint256',
      },
    ],
    name: 'TokenBurned',
    type: 'event',
    signature: '0x1af5163f80e79b5e554f61e1d052084d3a3fe1166e42a265798c4e2ddce8ffa2',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'newExchange',
        type: 'address',
      },
    ],
    name: 'FundsMigrated',
    type: 'event',
    signature: '0x0cd41587e1fdc62ecf8d0627f78a2e52dfb0ac9116b3c84027ce99ba7c2a198a',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'referral',
        type: 'address',
      },
      {
        indexed: false,
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'balance',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
    signature: '0xe354026b0ea4d7022834b4903ab420cdc10b109a8506dc68061124854cd353c8',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'balance',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
    signature: '0xf341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'userBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'beneficiaryBalance',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
    signature: '0x737ab30b9cd3ddae02069f3057591007faf2305652d04c2582f7f1f6185d9711',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'makerAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'takerAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'makerFilledAsset',
        type: 'address',
      },
      {
        indexed: false,
        name: 'takerFilledAsset',
        type: 'address',
      },
      {
        indexed: false,
        name: 'makerFilledAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'takerFilledAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'takerFeePaid',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'makerFeeReceived',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'referralFeeReceived',
        type: 'uint256',
      },
    ],
    name: 'Trade',
    type: 'event',
    signature: '0x8684e5435f94ee699bbd2cd717dd0e5d8f535607ceb4c7531f99a0625857bc88',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'makerBuyToken',
        type: 'address',
      },
      {
        indexed: false,
        name: 'makerSellToken',
        type: 'address',
      },
      {
        indexed: true,
        name: 'maker',
        type: 'address',
      },
      {
        indexed: true,
        name: 'orderHash',
        type: 'bytes32',
      },
    ],
    name: 'Cancel',
    type: 'event',
    signature: '0x1d1c7cd1072e89f2559a50cd104d94adc585aa08851b594ce69b9c33f2f72001',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
    signature: '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0',
  },
];
