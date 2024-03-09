export default interface InvoiceResponse {
  txn_id: string;
  ipn_type: string;
  merchant: string;
  merchant_id: string;
  amount: string;
  psys_cid: string;
  currency: string;
  order_number: string;
  order_name: string;
  confirmations: string;
  status: string;
  source_currency: string;
  source_amount: string;
  source_rate: string;
  comment: string;
  verify_hash: string;
}
