import { requireSignin } from "../middlewares";

export const createConnectAccount = async (req, res) => {
	console.log("REQUEST USER FROM REQUIRE SIGNIN", req.user);
	console.log("YOu HIT CREATE ACCOUNT ENDPOINT");
};
