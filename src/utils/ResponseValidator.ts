import * as crypto from "crypto";
import InvoiceResponse from "../types/InvoiceResponse";


export class ResponseValidator {
  private secretKey: string;
  private validateKeyName: string = "verify_hash";

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  setValidationKeyName(name: string) {
    this.validateKeyName = name;
  }

  validate(data: Partial<InvoiceResponse>): boolean {
    const hash = data.verify_hash;
    const ordered = this.sortDataByKey(data);
    const hmac = crypto.createHmac("sha1", this.secretKey);
    hmac.update(JSON.stringify(ordered));
    const verifyHash = hmac.digest("hex");
    return hash === verifyHash;
  }

  private sortDataByKey<T>(data: T): T {
    return Object.keys(data)
      .filter((k: string) => k !== this.validateKeyName)
      .sort()
      .reduce((obj: T, key: string) => {
        //@ts-ignore
        obj[key] = data[key] + "";
        return obj;
      }, {} as T);
  }
}
