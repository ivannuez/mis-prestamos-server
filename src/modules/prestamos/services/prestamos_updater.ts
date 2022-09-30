import Prestamo from "@models/prestamo";

export class PrestamosUpdater {
  async update(id: any, body: any): Promise<Object> {
    let item = await Prestamo.findByIdAndUpdate(id, body, {
      returnOriginal: false,
    });
    return item ?? {};
  }
}
