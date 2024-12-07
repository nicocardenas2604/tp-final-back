//Configuracion para la conexion a la base de datos
import mongoose from "mongoose";

process.loadEnvFile();

const URI_DB = process.env.URI_DB;

const conectDB = async () => {
  try {
    await mongoose.connect(URI_DB);
    console.log("conexion exitosa");
  } catch (error) {
    console.log("conexion fallida");
  }
};

export { conectDB };
