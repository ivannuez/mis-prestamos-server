import Saldo from "@models/saldo";

export class SaldosFinder {
  async findOne(id: any): Promise<Object> {
    const data = await Saldo.findById(id);
    return data ?? {};
  }

  async findAll(): Promise<Object[]> {
    const data = await Saldo.find();
    return data ?? {};
  }
}
