import { ethers } from 'ethers';
const Utils = ethers.utils;

export class Order {
  constructor(
    private maker: string,
    private makerSellToken: string,
    private makerSellAmount: number | string,
    private makerBuyToken: string,
    private makerBuyAmount: number | string,
    private salt: number | string = new Date().getTime().toString(),
    private expiration: number | string,
    private takerSellAmount: number | string = 0,
    private taker: string = ethers.constants.AddressZero,
  ) {}

  public getHash() {
    return Utils.solidityKeccak256(this.getTypes(), this.getValues());
  }

  public getPrefixedHash() {
    const hash = this.getHash();
    return Utils.solidityKeccak256(['string', 'bytes32'], ['\x19Ethereum Signed Message:\n32', hash]);
  }

  public getArgs() {
    return [
      this.makerSellAmount,
      this.makerBuyAmount,
      this.takerSellAmount,
      this.salt,
      this.expiration,
      this.taker,
      this.maker,
      this.makerSellToken,
      this.makerBuyToken,
    ];
  }

  private getValues() {
    return [
      this.maker,
      this.makerSellToken,
      this.makerSellAmount,
      this.makerBuyToken,
      this.makerBuyAmount,
      this.salt,
      this.expiration,
    ];
  }

  private getTypes() {
    return ['address', 'address', 'uint256', 'address', 'uint256', 'uint256', 'uint256'];
  }
}
