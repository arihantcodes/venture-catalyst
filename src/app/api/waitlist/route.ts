import { connectDb } from "../../../dbConfig/dbConfig.js";
import Waitlist from "../../../models/waitlist.model.js";
import { NextRequest, NextResponse } from "next/server";

connectDb();

// test data
//{
//     "email":"jain@gmail.com"
// }

// response

//{
//     "message": "You have been added to the waitlist",
//     "success": true
// }

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    if (!email) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 400 }
      );
    }

    const waitlist = await Waitlist.findOne({ email });
    if (waitlist) {
      return NextResponse.json(
        { error: "You are already in the waitlist" },
        { status: 400 }
      );
    }

    const newWaitlist = new Waitlist({ email });
    await newWaitlist.save();
    return NextResponse.json(
      { message: "You have been added to the waitlist", success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
