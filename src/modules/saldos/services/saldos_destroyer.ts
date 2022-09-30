import Saldo from "@models/saldo";

export class SaldosDestroyer {
  async delete(id: any): Promise<Object> {
    let item = await Saldo.deleteOne({ _id: id });
    return item;
  }
}
