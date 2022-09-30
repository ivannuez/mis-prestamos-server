import Prestamo from "@models/prestamo";

export class PrestamosFinder {
  async findOne(id: any): Promise<Object> {
    const data = await Prestamo.findById(id);
    return data ?? {};
  }

  async findAll(): Promise<Object[]> {
    const data = await Prestamo.find();
    return data ?? {};
  }
}
