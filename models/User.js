import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	userid: {
		type: String,
		required: [true, "UserId is required!"],
		trim: true,
		unique: true
	},
	password: {
		type: String,
		required: [true, "Password is required!"],
		trim: true,
	},
	name: {
		type: String,
		required: [true, "Name is required!"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Email is required!"],
		trim: true,
	},
    phone: {
        type: String,
        required: [true, "Phone is required!"]
    },
	address: {
        type: String,
        required: [false]
    },
    birth: {
        type: String,
        required: [false]
    },
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User ||
	mongoose.model("User", UserSchema);