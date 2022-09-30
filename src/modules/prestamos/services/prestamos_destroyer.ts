import Prestamo from "@models/prestamo";

export class PrestamosDestroyer {
  async delete(id: any): Promise<Object> {
    let item = await Prestamo.deleteOne({ _id: id });
    return item;
  }
}
