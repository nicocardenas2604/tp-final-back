import express from "express";
import dotenv from "dotenv";
import { productRoutes } from "./src/routes/productsRoutes.js";
import { conectDB } from "./src/config/mongo.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  conectDB();
  console.log("Server up on port http://localhost:" + PORT);
});
