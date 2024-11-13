import { Router } from "express";

import {
  adminLogin,
  renewalOfAccessToken,
} from "../utils/export&importJunction.js";
const router = Router();

// renewal of accessToken
router.route("/refresh-token").post(renewalOfAccessToken);

// admin login
router.route("/login").post(adminLogin);

export default router;
