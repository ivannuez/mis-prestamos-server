import Saldo from "@models/saldo";

export class SaldosUpdater {
  async update(id: any, body: any): Promise<Object> {
    let item = await Saldo.findByIdAndUpdate(id, body, {
      returnOriginal: false,
    });
    return item ?? {};
  }
}
