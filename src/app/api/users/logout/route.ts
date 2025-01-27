import { NextResponse } from "next/server";

export async function GET(){
    try{

        const response = NextResponse.json({
            "msg": "Logout successful",
            success: true
        })

        response.cookies.set("token", "", {
            httpOnly: true, expires: new Date(0)
        })

        return response

    }
    catch(err: any){
        return NextResponse.json({
            "msg": "Error logging out"
        }, {
            status: 400
        })
    }
}