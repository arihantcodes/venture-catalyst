import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowerCase: true,
            trim: true,
            unique: true,
            match: [/.+\@.+\..+/, "Please fill a valid email address"]
        },
        password: {
            type: String,
            required: true,
            minLength: [6, "Password must be at least 6 characters long"],
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            maxLength: [50, "Full name must be at most 50 characters long"],
        },
        username: {
            type: String,
            required: true,
            lowerCase: true,
            unique: true,
            trim: true,
            maxLength: [20, "Username must be at most 20 characters long"],
        },
        profileId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "profiles",
        },
        followers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }],
        following: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }]

    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
