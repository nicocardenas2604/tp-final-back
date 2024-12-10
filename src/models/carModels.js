import mongoose from "mongoose";

const { Schema } = mongoose;

const carSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "El nombre del Car es obligatorio"],
      trim: true,
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
      maxlength: [100, "El nombre no puede exceder los 100 caracteres"],
    },
    brand: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "El precio del car es obligatorio"],
      min: [0, "El precio no puede ser menor a 0"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "La descripción no puede exceder los 500 caracteres"],
    },
    stock: {
      type: Number,
      required: [true, "El stock es obligatorio"],
      min: [0, "El stock no puede ser menor a 0"],
      validate: {
        validator: Number.isInteger,
        message: "El stock debe ser un número entero",
      },
    },
  },
  {
    versionKey: false,
  }
);

const Car = mongoose.model("cars", carSchema);

const getAllCars = async () => {
  try {
    return await Car.find();
  } catch (error) {
    console.error("Error fetching car:", error);
    throw error;
  }
};

const getCarById = async (id) => {
  try {
    return await Car.findById(id);
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    throw error;
  }
};

const createCar = async (newCar) => {
  try {
    const car = new Car(newCar);
    return await car.save();
  } catch (error) {
    console.error("Error creating car:", error);
    throw error;
  }
};

const updateCar = async (id, updateData) => {
  try {
    return await Car.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    console.error("Error updating car:", error);
    throw error;
  }
};

const deleteCar = async (id) => {
  try {
    return await Car.findByIdAndDelete(id);
  } catch (error) {
    console.error("Error deleting car:", error);
    throw error;
  }
};

export default {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
