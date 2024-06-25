import { connectDb } from '../../../../../dbConfig/dbConfig.js';
import User from '../../../../../models/user.model.js';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connectDb();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, fullname, password } = reqBody;

        if (!username || !email || !fullname || !password) {
            return NextResponse.json({ message: 'Please fill in all fields' }, { status: 400 });
        }

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            return NextResponse.json({ message: 'Please enter a valid email address' }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({ username, email, fullname, password: hashedPassword });

        const savedUser = await newUser.save();

        console.log('User created:', savedUser);

        // Send verification email (not implemented)

        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            savedUser
        });

    } catch (error:any) {
        console.error('Error:', error.message);
        return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
    }
}
