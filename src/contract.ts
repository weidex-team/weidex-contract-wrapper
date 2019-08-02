import { ethers } from 'ethers';
const Utils = ethers.utils;

import Config from '../config';
import { Nonce } from './nonce';
import { IOptions } from './types';

export class Contract {
  private contract: ethers.Contract;
  private nonce: Nonce;

  constructor(
    wallet: string,
    provider: ethers.providers.Provider,
    address: string = Config.CONTRACT_ADDRESS,
    abi: any[] = Config.ABI_EXCHANGE,
  ) {
    this.contract = new ethers.Contract(address, abi, provider);
    this.nonce = Nonce.Instance();
    this.nonce.init(provider, wallet);
  }

  public getNonce() {
    return this.nonce;
  }

  public getContract() {
    return this.contract;
  }

  public getNewContract(address: string, abi: any[], provider: ethers.providers.Provider) {
    this.contract = new ethers.Contract(address, abi, provider);
    return this.contract;
  }

  public getWithNewProvider(provider: string | ethers.Signer | ethers.providers.Provider) {
    this.contract = this.contract.connect(provider);
    return this.contract;
  }

  public async executeStatic(fn: string, args?: any[]) {
    try {
      if (args) {
        return await this.contract.functions[fn](...args);
      } else {
        return await this.contract.functions[fn]();
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  public async executeTx(fn: string, args: any[], options: IOptions) {
    try {
      const defaultOptions = await this.getTxOptions(fn, args, options);
      const result = await this.contract.functions[fn](...args, defaultOptions);
      this.nonce.incrementNextNonce();
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }

  private async getTxOptions(fn: string, args: any[], options: IOptions) {
    let gasLimit;

    if (!options) {
      options = {
        defaultGasLimit: Utils.bigNumberify('500000'),
        gasPrice: Utils.bigNumberify('20000000000'),
        value: Utils.bigNumberify('0'),
      };
    }

    const nonce = await this.nonce.getNextNonce();

    const defaultOptions: IOptions = {
      gasPrice: Utils.bigNumberify(options.gasPrice || '20000000000'),
      nonce: Utils.bigNumberify(nonce),
      value: Utils.bigNumberify(options.value || '0'),
    };

    try {
      gasLimit = await this.estimateGas(fn, args, defaultOptions);
    } catch (err) {
      gasLimit = options.defaultGasLimit || 150000;
    }

    const overrideOptions = {
      ...defaultOptions,
      gasLimit: Utils.hexlify(gasLimit),
    };

    return overrideOptions;
  }

  private async estimateGas(fn: string, args: any[], options: IOptions) {
    if (typeof options !== 'undefined') {
      return await this.contract.estimate[fn](...args, options);
    }

    return await this.contract.estimate[fn](...args);
  }
}
