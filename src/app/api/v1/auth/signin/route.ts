import { connectDb } from '../../../../../dbConfig/dbConfig.js';
import User from '../../../../../models/user.model.js';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

import jwt from 'jsonwebtoken'
import Profile from '@/models/profile.model.js';

connectDb()


//login route
export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {email,password} = reqBody;

        if(!email || !password){
            return NextResponse.json({error:'Please fill all fields'},{status:400})
        }

        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error:'Invalid Username'},{status:400})
        }

        const validPassword = await bcryptjs.compare(password,user.password)


        if(!validPassword){
            return NextResponse.json({error:'Invalid Password'},{status:400})
        }

        //generea jwt token

        const tokenData = {
            id: user._id,
            username:user.username,
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '7d' })

        // check if user has a profile if not redirect to profile creation page other wise on dashboard 

        const profile = await Profile.findOne({userId:user._id})

        let hasProfile;

        if(!profile){
             hasProfile = false
        }else{
             hasProfile = true
        }




        const response =  NextResponse.json({message:'Login successful',success:true ,hasProfile},{status:200})

        response.cookies.set("token",token,{httpOnly:true})

        return response

    } catch (error:any) {
        console.log(error);
        return NextResponse.json(error.message, {status: 500})
    }
}
