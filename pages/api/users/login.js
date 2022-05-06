import User from "@/models/User";
import "@/models/dbConnect";

export default async (req, res) => {
	const { method } = req;
	const bcrypt = require('bcrypt');

	switch (method) {
		case "POST":
			try {
                const user = await User.findOne({userid : req.body.userid});

                if (user && bcrypt.compareSync(req.body.password, user.password)) {
                    return res.status(200).json({
                        success: true,
                        data : user
                    })
                } else {
                    return res.status(401).json({
                        sucess: false,
                        message : "login Failed"
                    })
                }
            } catch (error) {
				console.log('error', error)
				return res.status(400).json({
					success: false,
                    message: "400 error"
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