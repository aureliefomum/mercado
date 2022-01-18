import expressJwt from "express-jwt";

//get information from req.user

export const requireSignin = expressJwt({
	//check secret and expiry date
	secret: process.env.JWT_SECRET,
	algorithms: ["HS256"],
});
