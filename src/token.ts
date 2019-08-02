import { ethers } from 'ethers';
import ERC20_ABI from '../config/abi-token';
import { Contract } from './contract';
import { IAllowance, IApprove, IOptions } from './types';

export class Token {
  private contract: Contract;

  constructor(contract?: Contract, wallet?: string, provider?: ethers.providers.Provider, address?: string) {
    this.contract = contract || new Contract(wallet, provider, address);
  }

  public setNewProvider(wallet: string, provider: ethers.providers.Provider, address: string) {
    this.contract = new Contract(wallet, provider, address, ERC20_ABI);
    this.contract.getNonce().resetNonce(wallet);
  }

  public async approve(approve: IApprove, options: IOptions) {
    const fn = 'approve(address,uint256)';
    return await this.contract.executeTx(fn, Object.values(approve), options);
  }

  public async allowance(allowance: IAllowance) {
    const fn = 'allowance(address,address)';
    return await this.contract.executeStatic(fn, Object.values(allowance));
  }

  public async balanceOf(owner: string) {
    const fn = 'balanceOf(address)';
    return await this.contract.executeStatic(fn, [owner]);
  }

  public async symbol() {
    const fn = 'symbol()';
    return await this.contract.executeStatic(fn);
  }

  public async name() {
    const fn = 'name()';
    return await this.contract.executeStatic(fn);
  }

  public async decimals() {
    const fn = 'decimals()';
    return await this.contract.executeStatic(fn);
  }
}
