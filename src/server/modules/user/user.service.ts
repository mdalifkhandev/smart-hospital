import { User } from "../auth/auth.model";

const getAllUser = async () => {
  try {
    const result = await User.find();
    return result;
  } catch (error) {
    throw new Error("Database query failed while fetching users");
  }
};

export const UserService = {
  getAllUser,
};
