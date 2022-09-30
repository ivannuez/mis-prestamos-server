import { Schema, model } from "mongoose";

var saldoSchema = new Schema(
  {
    deuda: {
      type: "Number",
    },
    pagado: {
      type: "Number",
    },
    saldo: {
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
export default model("Saldo", saldoSchema);
