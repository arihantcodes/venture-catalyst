import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
    {
        email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
        },
    },
    {
        timestamps: true,
    }
    );

const Waitlist = mongoose.models.waitlists || mongoose.model("waitlists", waitlistSchema);

export default Waitlist;