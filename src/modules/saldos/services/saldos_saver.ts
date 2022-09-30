import Saldo from "@models/saldo";

export class SaldosSaver {
  async store(body: any): Promise<Object> {
    let item = new Saldo(body);
    const result = await item.save();
    return result;
  }
}
