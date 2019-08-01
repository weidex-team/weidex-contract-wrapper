import { ethers } from 'ethers';
import { Contract } from './contract';
import { IDeposit, IKyberOrder, IOptions, IOrder, IWithdraw } from './types';

export class Exchange {
  private contract: Contract;

  constructor(contract: Contract) {
    this.contract = contract;
  }

  public setNewProvider(wallet: string, provider: ethers.providers.Provider) {
    this.contract = new Contract(wallet, provider);
    this.contract.getNonce().resetNonce(wallet);
  }

  public async deposit(deposit: IDeposit, options: IOptions) {
    const fn = 'deposit(address,uint256,address,address)';

    if (deposit.token === ethers.constants.AddressZero) {
      options = {
        ...options,
        value: deposit.amount,
      };
    }

    return await this.contract.executeTx(fn, Object.values(deposit), options);
  }

  public async withdraw(withdraw: IWithdraw, options: IOptions) {
    const fn = 'withdraw(address,uint256)';
    return await this.contract.executeTx(fn, Object.values(withdraw), options);
  }

  public async kyberTrade(order: IKyberOrder, options: IOptions) {
    const fn = 'kyberTrade(uint256,address,address,bytes32)';
    return await this.contract.executeTx(fn, Object.values(order), options);
  }

  public async tradeOrder(order: IOrder, signature: string, options: IOptions) {
    const fn = 'trade((uint256,uint256,uint256,uint256,uint256,address,address,address,address),bytes)';
    const args = [Object.values(order), signature];
    return await this.contract.executeTx(fn, args, options);
  }

  public async cancelOrder(order: IOrder, signature: string, options: IOptions) {
    const fn = 'cancelSingleOrder((uint256,uint256,uint256,uint256,uint256,address,address,address,address),bytes)';
    const args = [Object.values(order), signature];
    return await this.contract.executeTx(fn, args, options);
  }
}
