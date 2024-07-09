import User from "@/models/user.model"; 
import { connectDb } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connectDb();

// get all profile details with user details and merge them and send response

export async function GET(request: NextRequest) {
    try {
        const userProfiles = await User.aggregate([
            {
                $lookup: {
                    from: "profiles",
                    localField: "_id",
                    foreignField: "userId",
                    as: "profile"
                }
            },
            {
                $unwind: "$profile"
            },
            {
                $project: {
                    username: 1,
                    fullname: 1,
                    "profile.ventureName": 1,
                    "profile.profilePictureUrl": 1,
                    "profile.bio": 1,
                    "profile.linkedinUrl": 1
                }
            }
        ]);

        if (!userProfiles.length) {
            return NextResponse.json({ message: "No user profiles found" }, { status: 404 });
        }

        return NextResponse.json(userProfiles, { status: 200 });

    } catch (error: any) {
        console.error(error.message);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
