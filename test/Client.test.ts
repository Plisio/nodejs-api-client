import { Client } from "../src/Client";
import { CryptocurrencyApiResponseDto } from "../src/types/CryptocurrencyApiResponseDto";
import { CurrencyDto } from "../src/types/CurrencyDto";

test("getCurrencies", async () => {

  const client = new Client();
  const res = await client.getCurrencies();
  expect(res).not.toBeNull();
  if (res) {
    res.forEach(i =>
      expect(i).toBeInstanceOf(CurrencyDto)
    );
  }
});

test("getBalances", async () => {

  const client = new Client();
  const res = await client.getBalances();
  expect(res).toBeNull();
  client.setSecretKey("8LEfCIhEwSApKj02NM0jI-1urGthaqprSArbfzTAcvAIpMQu_jGTkXEyE3TE26Ip");
  expect(res).not.toBeNull();
  Object.keys(res).forEach(i =>
    expect(res[i]).toBeInstanceOf(CurrencyDto)
  );
});