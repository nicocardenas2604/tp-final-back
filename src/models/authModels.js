import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
});

const User = model("user", userSchema);

const register = async (dataUser) => {
  const { username, password, email } = dataUser;

  const existingUser = User.findOne({ username });
  if (existingUser) {
    return null;
  }

  const alg = await bcryptjs.genSalt(10);
  const hashedPass = await bcryptjs.hash(password, alg);

  const newUser = new User({ username, password: hashedPass, email });
  const savedUser = newUser.save();
  return savedUser;
};
export default {
  register,
};
