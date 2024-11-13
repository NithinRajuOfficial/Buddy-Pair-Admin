import jwt from "jsonwebtoken";

import {
  asyncHandler,
  ApiResponse,
  ApiError,
} from "../utils/export&importJunction.js";
import { Admin } from "../models/admin.js";

const renewalOfAccessToken = asyncHandler(async (req, res) => {
  const currentRefreshToken = req.cookies.refreshToken;
  if (!currentRefreshToken) {
    throw new ApiError(402, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      currentRefreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY
    );

    const user = await Admin.findById(decodedToken._id);
    if (!user) {
      throw new ApiError(401, "No user found with the refreshToken");
    }

    const accessToken = await user.generateAccessToken();
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
    });

    res.json(
      new ApiResponse(200, null, "Successfully generated new Access Token")
    );
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new ApiError(402, "RefreshToken expired");
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new ApiError(402, "Invalid RefreshToken");
    } else {
      throw new ApiError(500, "Internal server error", [error.message]);
    }
  }
});
export default renewalOfAccessToken;
