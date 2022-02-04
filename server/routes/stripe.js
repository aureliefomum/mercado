import express from "express";

const router = express.Router();
//controllers
import { createConnectAccount } from "../controllers/stripe";

//import middleware
import { requireSignin } from "../middlewares";

router.post("/create-connect-account", requireSignin, createConnectAccount);

module.exports = router;
