import Prestamo from "@models/prestamo";

export class PrestamosSaver {
  async store(body: any): Promise<Object> {
    let item = new Prestamo(body);
    const result = await item.save();
    return result;
  }
}
