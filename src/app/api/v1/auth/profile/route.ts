import Profile from '@/models/profile.model';
import { connectDb } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helper/getDataFromToken';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

// Configure cloudinary
cloudinary.config({
 cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
 api_key: process.env.CLOUDINARY_API_KEY,
 api_secret: process.env.CLOUDINARY_API_SECRET,
 secure: true,
});

// Connect to the database
connectDb();

// Upload image to cloudinary
const uploadAvatar = (buffer: Buffer) => {
 return new Promise((resolve, reject) => {
 const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
 if (result) {
 resolve(result.secure_url);
 } else {
 reject(error);
 }
 });

 streamifier.createReadStream(buffer).pipe(uploadStream);
 });
};

// Create a new profile for a user, taking their bio, profile pic, venture name, and LinkedIn username
export async function POST(request: NextRequest) {
 try {
 console.log('Received POST request');

 const data = await request.formData();
 console.log('Request body:', data);

 if (!data) {
 return NextResponse.json({ message: 'Please provide required fields' }, { status: 400 });
 }

 const bio = data.get('bio');
 const ventureName = data.get('ventureName');
 const linkedinUrl = data.get('linkedinUrl');
 const profilePic = data.get('profilePic') as File;

 console.log('Fields:', { bio, ventureName, linkedinUrl, profilePic });

 if (!bio || !ventureName || !linkedinUrl || !profilePic) {
 console.log('Missing fields:', { bio, ventureName, linkedinUrl, profilePic });
 return NextResponse.json({ message: 'Please fill in all fields' }, { status: 400 });
 }

 // Take token from cookie and get the user ID from it to assign userId to the profile
 const userId = getDataFromToken(request);
 console.log('User ID from token:', userId);

 const existingProfile = await Profile.findOne({ userId });
 if (existingProfile) {
 console.log('Profile already exists for user ID:', userId);
 return NextResponse.json({ message: 'Profile already exists' }, { status: 400 });
 }

 // Convert profilePic to buffer
 const buffer = Buffer.from(await profilePic.arrayBuffer());

 // Upload profile picture and create a new profile
 const uploadPicUrl = await uploadAvatar(buffer);
 console.log('Uploaded profile picture URL:', uploadPicUrl);

 const newProfile = new Profile({
 bio,
 ventureName,
 linkedinUrl,
 userId,
 profilePictureUrl: uploadPicUrl,
 });

 const savedProfile = await newProfile.save();
 console.log('Profile created:', savedProfile);

 return NextResponse.json({
 message: 'Profile created successfully',
 success: true,
 savedProfile,
 });
 } catch (error: any) {
 console.error('Error:', error.message);
 return NextResponse.json({ message: 'Failed to create profile' }, { status: 500 });
 }
}