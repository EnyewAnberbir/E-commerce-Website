import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        unique: true,
    },
    email: {
        type: String,
        required : true,
        unique: true,
    },
    password: {
        type: String,
        required : true,
    },
    avatar:{
        type: String,
        default : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Ficon-user-male-avatar-business-5359553%2F&psig=AOvVaw229YA_KTz0aAJmXDVRhQNc&ust=1698221011401000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCBrbGcjoIDFQAAAAAdAAAAABAE"

    }
}, {timestamp: true});

const User = mongoose.model("User", userSchema);

export default User;
