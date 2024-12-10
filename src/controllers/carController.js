import carModels from "../models/carModels.js";

const getAllCars = async (req, res) => {
  try {
    const cars = await carModels.getAllCars();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await carModels.getCarById(id);
    if (!car) return res.status(404).json({ error: "car not found" });
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

const createCar = async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;
    if (!name || !price || !description || !stock) {
      return res.status(400).json({ error: "bad request, invalid data" });
    }
    const newCar = await carModels.createCar({
      name,
      price,
      description,
      stock,
    });
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const car = await carModels.updateCar(id, body);
    if (!car) return res.status(404).json({ message: "Car no encontrado" });
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await carModels.deleteCar(id);
    if (!car) return res.status(404).json({ message: "car no encontrado" });
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

export { getAllCars, getCarById, createCar, updateCar, deleteCar };
