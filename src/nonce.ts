import { ethers } from 'ethers';

export class Nonce {
  public static Instance(provider: ethers.providers.Provider, address?: string) {
    return this.instance || (this.instance = new this(provider, address));
  }

  private static instance: Nonce;
  private address: string;
  private provider: ethers.providers.Provider;
  private firstCall: boolean;
  private nonce: number;

  private constructor(provider: ethers.providers.Provider, address: string) {
    this.provider = provider;
    this.address = address;
    this.firstCall = true;
    this.nonce = 0;
  }

  public async getNextNonce() {
    if (this.firstCall) {
      try {
        this.nonce = await this.provider.getTransactionCount(this.address, 'pending');
      } catch (err) {
        throw new Error(err);
      }

      this.firstCall = false;
      return this.nonce;
    }

    return this.nonce;
  }

  public resetNonce(newAddress: string) {
    if (this.address.toLowerCase() !== newAddress.toLowerCase()) {
      this.address = newAddress;
      this.firstCall = true;
    }
  }

  public incrementNextNonce() {
    this.nonce++;
  }
}
