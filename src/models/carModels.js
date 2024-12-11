import mongoose from "mongoose";

const { Schema } = mongoose;

const carSchema = new Schema(
  {
    model: {
      type: String,
      unique: true,
      required: [true, "The car model is required"],
      trim: true,
      minlength: [3, "The model must be at least 3 characters long"],
      maxlength: [100, "The model cannot exceed 100 characters"],
    },
    brand: {
      type: String,
      required: [true, "The car brand is required"],
      trim: true,
      minlength: [2, "The brand must be at least 2 characters long"],
      maxlength: [50, "The brand cannot exceed 50 characters"],
    },
    price: {
      type: Number,
      required: [true, "The car price is required"],
      min: [0, "The price cannot be less than 0"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "The description cannot exceed 500 characters"],
    },
    stock: {
      type: Number,
      required: [true, "The stock is required"],
      min: [0, "The stock cannot be less than 0"],
      validate: {
        validator: Number.isInteger,
        message: "The stock must be an integer",
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
