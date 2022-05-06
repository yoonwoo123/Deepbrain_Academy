import User from "@/models/User";
import "@/models/dbConnect";

export default async (req, res) => {
	const { method } = req;
	const bcrypt = require('bcrypt');

	switch (method) {
		case "GET":
			try {
				const users = await User.find({}).sort({
					createdAt: "desc",
				});

				return res.status(200).json({
					success: true,
					data: users,
				});
			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}
		case "POST":
			try {
				console.log("POST 요청 받음");
				console.log("req.body", req.body)
				console.log("password", bcrypt.hashSync(req.body.password, 10))
				const users = await User.create({
					...req.body,
					password: bcrypt.hashSync(req.body.password, 10)
				});
				console.log("users 생성", users);
				return res.status(201).json({
					success: true,
					data: users,
				});
			} catch (error) {
				console.log('error', error)
				return res.status(400).json({
					success: false,
				});
			}
		default:
			res.setHeaders("Allow", ["GET", "POST"]);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};