import { ResponseValidator } from "../src/utils/ResponseValidator";
import InvoiceResponse from "../src/types/InvoiceResponse";

test("ResponseValidator", () => {
  const reseponse: InvoiceResponse = {
    "amount": "15.300000",
    "comment": "Invoice details: https://plisio.loc/account/transactions/61b19fd3f609ba61f4282547",
    "confirmations": "0",
    "currency": "USDT",
    "ipn_type": "invoice",
    "merchant": "Test shop",
    "merchant_id": "5d09fcd84f1e66138d706ed8",
    "order_name": "test USDT",
    "order_number": "21120906",
    "psys_cid": "USDT",
    "source_amount": "15.00",
    "source_currency": "USD",
    "source_rate": "1.000000",
    "status": "completed",
    "txn_id": "61b19fd3f609ba61f4282547",
    "verify_hash": "6c53ff3472d694bfa13851ef266ec67389d25e2f"
  };

  const validator = new ResponseValidator("8LEfCIhEwSApKj02NM0jI-1urGthaqprSArbfzTAcvAIpMQu_jGTkXEyE3TE26Ip");
    expect(validator.validate(reseponse)).toBe(true);
});