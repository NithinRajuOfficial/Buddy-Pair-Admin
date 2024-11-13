import { Admin } from "../models/admin.js";
import ApiError from "./apiError.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await Admin.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while creating accessToken or refreshToken"
    );
  }
};

export default generateAccessTokenAndRefreshToken;
