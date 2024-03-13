import { connectDb } from '@/utils/connectDb';
import User from '@/models/usersModel';
import bcryptjs from 'bcryptjs';

import { NextRequest, NextResponse } from 'next/server';

connectDb();

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const user = await  User.findOne({email:reqBody.email});
    if(user){
     return new NextResponse("User already exists", { status: 400 });
    }
  

    const { username, email, password } =  reqBody;
     

    const salt = await bcryptjs.genSalt(10);
    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new User
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return new NextResponse(JSON.stringify({
      success: true,
      message: "Account created successfully",
      status: 200,
    }));
    
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
