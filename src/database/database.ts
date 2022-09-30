import mongoose from "mongoose";
import { settings } from "@config/settings";

mongoose
  .connect(settings.DB.URI!)
  .then((db) => console.log("Base de datos conectada..."))
  .catch((error) => console.error(error));
