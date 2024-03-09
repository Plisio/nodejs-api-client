export interface CurrencyDto {
  "name": string;
  "cid": string;
  "currency": string;
  "icon": string;
  "rate_usd": string;
  "price_usd": string;
  "precision": string;
  "fiat": string;
  "fiat_rate": string;
  "min_sum_in": string;
  "invoice_commission_percentage": string;
  "hidden": number;
  "maintenance": boolean;
}

export type CurrenciesDto = CurrencyDto[];

export class CurrencyDto implements CurrencyDto {
  constructor(
    {
      name,
      cid,
      currency,
      icon,
      rate_usd,
      price_usd,
      precision,
      fiat,
      fiat_rate,
      min_sum_in,
      invoice_commission_percentage,
      hidden,
      maintenance
    }: CurrencyDto) {
    this.name = name;
    this.cid = cid;
    this.currency = currency;
    this.icon = icon;
    this.rate_usd = rate_usd;
    this.price_usd = price_usd;
    this.precision = precision;
    this.fiat = fiat;
    this.fiat_rate = fiat_rate;
    this.min_sum_in = min_sum_in;
    this.invoice_commission_percentage = invoice_commission_percentage;
    this.hidden = hidden;
    this.maintenance = maintenance;
  }
}