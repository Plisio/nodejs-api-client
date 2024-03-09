export interface IBalanceResponseDto {
  psys_cid: string;
  currency: string;
  balance: string;
}

export class BalanceResponseDto {

  constructor(
    psys_cid: string,
    currency: string,
    balance: string
  ) {};

  static create(data: IBalanceResponseDto): BalanceResponseDto {
    return new BalanceResponseDto(data.psys_cid, data.currency, data.balance);
  }
}