import mongoose from "mongoose";

export type userType = {
    _id: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
};

const userSchema =new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
});

const User = mongoose.model<userType>("User",userSchema);

export default User;