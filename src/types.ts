import { BigNumber } from 'ethers/utils';

export interface IOptions {
  gasPrice: number | string | BigNumber;
  value: number | string | BigNumber;
  nonce?: number | string | BigNumber;
  defaultGasLimit?: number | string | BigNumber;
}

export interface IDeposit {
  token: string;
  amount: number | string;
  beneficiary: string;
  referral: string;
}

export interface IApprove {
  approveTo: string;
  amount: number | string;
}

export interface IAllowance {
  owner: string;
  spender: string;
}

export interface IWithdraw {
  token: string;
  amount: number | string;
}

export interface IKyberOrder {
  givenAmount: number | string;
  givenToken: string;
  receivedToken: string;
  hash: string;
}

export interface IOrder {
  makerSellAmount: number | string;
  makerBuyAmount: number | string;
  takerSellAmount: number | string;
  salt: string;
  expiration: number | string;
  taker: string;
  maker: string;
  makerSellToken: string;
  makerBuyToken: string;
}
