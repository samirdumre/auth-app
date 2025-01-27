import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(req: NextRequest){

    try{

        const reqBody = await req.json()
        const {email, password} = reqBody
        console.log(reqBody);

        // checks if the user exists

        const user = await User.findOne({
            email
        })

        if(!user){
            return NextResponse.json({
                "msg": "User doesn't exist"
            }, {
                status: 400
            })
        }

        // check is the password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({
                "msg": "Wrong password"
            }, { status: 401})
        }

        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // create token 
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {expiresIn: "30d"})

        const response = NextResponse.json({
            "msg": "Login successful",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response;

        
    }
    catch(e){
        console.error("Error: ", e.message)
    }
}