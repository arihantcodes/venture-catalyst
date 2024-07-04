import { NextRequest,NextResponse } from "next/server"
import { connectDb } from "@/dbConfig/dbConfig"


connectDb()

export async  function GET(request:NextRequest,response:NextResponse){

    try {
      const response =  NextResponse.json({message:'Logout successful',success:true}, {status: 200}) 

      response.cookies.set("token","",{
        httpOnly:true,
        expires: new Date(0)
    })

    return response

    } catch (error:any) {
        return NextResponse.json(error.message, {status: 500})
    }
}