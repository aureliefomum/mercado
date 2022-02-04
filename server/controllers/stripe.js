import User from "../models/user";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET);

export const createConnectAccount = async (req, res) => {
	//find user from database
	const user = await User.findById(req.user._id).exec();
	console.log("USER===>", user);

	// //if user doesnt have a stripe account ID yet, create one now
	// const account = await stripe.accounts.create({
	// 	type: "express",
	// });
	// console.log("ACCOUNT ====>", account);
	if (!user.stripe_account_id) {
		const account = await stripe.accounts.create({
			country: "BR",
			type: "express",
			capabilities: {
				card_payments: {
					requested: true,
				},
				transfers: {
					requested: true,
				},
			},
		});
		console.log("ACCOUNT => ", account.id);
		user.stripe_account_id = account.id;
		await user.save();
	}
};
