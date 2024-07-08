import { connectDb } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";

connectDb();

export async function GET(req: NextRequest) {
    try {
        // Parse the query parameters
        const { searchParams } = new URL(req.url);
        const username = searchParams.get("username");

        if (!username) {
            return NextResponse.json({ message: "Username is required" }, { status: 400 });
        }

        // Aggregate pipeline to find user with profile details
        const userProfiles = await User.aggregate([
            {
                $match: {
                    username: username
                }
            },
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

        if (userProfiles.length === 0) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json(userProfiles[0], { status: 200 });
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ message: "ERROR: " + error.message }, { status: 500 });
    }
}
