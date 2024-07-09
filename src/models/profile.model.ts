import { match } from 'assert';
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
            unique: true,
        },
        bio: {
            type: String,
            trim: true,
            maxLength: [160, "Bio must be at most 160 characters long"],
            minLength: [10, "Bio must be at least 10 characters long"],
        },
        profilePictureUrl: {
            type: String,
            trim: true,
        },
        ventureName: {
            type: String,
            trim: true,
            required: [true, "Please enter your venture name"],
            minLength: [3, "Venture name must be at least 3 characters long"],
            maxLength: [70, "Venture name must be at most 70 characters long"],
            
        },
        linkedinUrl: {
            type: String,
            lowerCase: true,
            trim: true,
            match: [
                /^(https?:\/\/)?(www\.)?linkedin\.com\/(pub|in|profile)\/[a-zA-Z0-9_-]+\/?$/,
                "Please enter a valid LinkedIn URL",
            ],
        },
        badges: {
            type: [String],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Profile = mongoose.models.profiles || mongoose.model("profiles", profileSchema);

export default Profile;
