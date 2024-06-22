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
        },
        profilePictureUrl: {
            type: String,
            trim: true,
        },
        website: {
            type: String,
            trim: true,
        },
        linkedin: {
            type: String,
            trim: true,
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
