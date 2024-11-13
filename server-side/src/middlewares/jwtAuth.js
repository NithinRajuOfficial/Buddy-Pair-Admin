import jwt from "jsonwebtoken";

import { asyncHandler, ApiError } from "../utils/export&importJunction.js";
import { Admin } from "../models/user.js";

const verifyJwt = asyncHandler(async (req, _, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    throw new ApiError(401, "Failed to obtain AccessToken");
  }
  try {
    const decodedToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET_KEY
    );

    const user = await Admin.findById(decodedToken._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(
        401,
        "User not found with the id we got from decoding the accessToken"
      );
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Jwt verification ERROR:", error);
    if (error.name === "TokenExpiredError") {
      throw new ApiError(401, "AccessToken expired", error);
    }
  }
});

export default verifyJwt;
