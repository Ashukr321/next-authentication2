import {connectDb} from '@/utils/connectDb'
import User from '@/models/usersModel'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
connectDb()
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const {email,password}= reqBody;
    const user = await User.findOne({email})
    if(!user){
      return new Response.json({error:"User does't exit"},{status:400});
    }
    //  validate password
    const validPassword = await bcryptjs.compare(password,user.password);
    if(!validPassword){
      return new Response.json({error:"invalid password"},{status:400});
    }

    // create token data 
    const tokenData = {
      id:user._id,
      email:user.email,
      username:user.username,
    }
    // create token 
     const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"1d"})

      const response = NextResponse.json({
        message:"login successfully",
        status:true,
        
      })

      response.cookies.set("token",token,{
        htttpOnly:true,
      })

     

      return  response;
  } catch (error) {
    return NextResponse.json({error:error.message},{status:500})
  }
}