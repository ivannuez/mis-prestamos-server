import { Schema, model } from "mongoose";

// Declare the Schema of the Mongo model
var prestamoSchema = new Schema(
  {
    nombre: {
      type: "String",
    },
    usuarioDeudor: {
      type: "String",
    },
    usuarioPrestador: {
      type: "String",
    },
    fechaAdquisicion: {
      type: "String",
    },
    fechaPago: {
      type: "String",
    },
    fechaFinalizacion: {
      type: "String",
    },
    cuotas: {
      type: "Number",
    },
    cuotasPagadas: {
      type: "Number",
    },
    cuotasSaldo: {
      type: "Number",
    },
    montoTotal: {
      type: "Number",
    },
    montoSaldo: {
      type: "Number",
    },
    montoPagado: {
      type: "Number",
    },
    montoMensual: {
      type: "Number",
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

//Export the model
export default model("Prestamo", prestamoSchema);
