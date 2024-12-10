import express from "express";
import { productRoutes } from "./src/routes/productsRoutes.js";
import { conectDB } from "./src/config/mongo.js";
import { authRoutes } from "./src/routes/authRoutes.js";

process.loadEnvFile();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  conectDB();
  console.log("Server up on port http://localhost:" + PORT);
});
