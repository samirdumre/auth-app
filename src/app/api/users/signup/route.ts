import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const { username: username, email: email, password: password } = reqBody;

    console.log(reqBody);

    // check if the user already exists
    const user = await User.findOne({ email: email });

    if(user){
        return NextResponse.json({
            "msg": "Error, user already exists"
        }, {
            status: 400
        })
    }

    // hashing the password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })

    const savedUser = await newUser.save()

    console.log(savedUser);

    return NextResponse.json({
        "msg": "User created successfully",
        success: true,
        savedUser
    })
    


  } catch (error: any) {
    return NextResponse.json(
      {
        msg: error.message,
      },
      { status: 500 }
    );
  }
}
