import { CurrenciesDto } from "./CurrencyDto";

export interface CryptocurrencyApiResponse {
  data: CurrenciesDto;
  status: string;
}


export class CryptocurrencyApiResponseDto implements CryptocurrencyApiResponse{
  public data!: CurrenciesDto;
  public status!: string;

}