import { Admin } from "../models/admin.js";
import {
  asyncHandler,
  ApiError,
  ApiResponse,
} from "../utils/export&importJunction.js";
import generateAccessTokenAndRefreshToken from "../utils/generateAccess&RefreshToken.js";

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((field) => !field || field.trim() === "")) {
    throw new ApiError(400, "All Fields are necessary");
  }

  const isAdmin = await Admin.findOne({ email });

  if (!isAdmin) {
    throw new ApiError(400, "Invalid Email/Password");
  }

  const isAdminValid = await isAdmin.isPasswordCorrect(password);

  if (!isAdminValid) {
    throw new ApiError(400, "Invalid Email/Password");
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(isAdmin._id);

  const options = {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };

  return res
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200));
});

export default adminLogin;
