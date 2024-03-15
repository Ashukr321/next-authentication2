import User from '@/models/usersModel';
import { connectDb } from '@/utils/connectDb';
import { NextResponse } from "next/server";
import { getDataFromToken } from "../../../../utils/getDataFromToken.ts";

// Connect to MongoDB 
connectDb();

export async function GET(req) {
  try {
    const userId = await getDataFromToken(req);
    const user = await User.findById(userId);
    
    // Check if user exists
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
