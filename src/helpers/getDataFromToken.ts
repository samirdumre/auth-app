import { NextRequest } from "next/server";
import toast from "react-hot-toast";
import jwt from "jsonwebtoken"

export function getDataFromToken(req: NextRequest) {
    try{

        const token = req.cookies.get("token")?.value || '';
        const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!)
        return decodedToken.id;

    } catch(err : any){
        toast.error(err.message)
    }
}