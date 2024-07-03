import Profile from '@/models/profile.model'
import { connectDb } from '@/dbConfig/dbConfig'
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helper/getDataFromToken';


connectDb();

// create a new profile for user take thier bio , profile pic and thier venture name andn thier linkeding username 

export async function POST(request: NextRequest) {


    try {

        const reqBody = await request.json();
        const { bio, ventureName, linkedinUrl } = reqBody;

        // take token from cookie and get the user id from it assign userId to the profile 

        const userId = getDataFromToken(request);


        if (!bio ||  !ventureName || !linkedinUrl) {
            return NextResponse.json({ message: 'Please fill in all fields' }, { status: 400 });
        }

        const existingProfile = await Profile.findOne({ userId });



        if (existingProfile) {
            return NextResponse.json({ message: "Profile already exists" }, { status: 400 });
        }

        // logic to handle profile pic upload



        const newProfile = new Profile({ bio, ventureName, linkedinUrl, userId});

        const savedProfile = await newProfile.save();

        console.log('Profile created:', savedProfile);

        // Send verification email (not implemented)

        return NextResponse.json({
            message: 'Profile created successfully',
            success: true,
            savedProfile
        });

    } catch (error:any) {
        console.error('Error:', error.message);
        return NextResponse.json({ message: 'Failed to create profile' }, { status: 500 });
    }
}