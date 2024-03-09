import { CurrenciesDto } from "./CurrencyDto";

export interface IBalanceApiResponse {
  data: CurrenciesDto;
  status: string;
}

export class BalanceApiResponseDto implements IBalanceApiResponse{
  public data!: CurrenciesDto;
  public status!: string;

}