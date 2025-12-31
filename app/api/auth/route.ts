import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@/prisma/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});
const prisma = new PrismaClient({ adapter });

export function GET() {
    return NextResponse.json({ message: "auth api is working"})
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const secret = "your_jwt_secret_key";
    const action = body.action;
    const username = body.username;
    const password = body.password;
    const payload = { username };
    if (action === "register") {
        const hashedPassword = bcrypt.hashSync(password, 10);
    const token = jwt.sign(payload, secret)
    try {
        const user = await prisma.user.create({
        data: {
            username,
            password: hashedPassword
        }
    })
    } catch (error) {
        return NextResponse.json({ message: "User already exists", error: error }, { status: 400 });
    }
    return NextResponse.json({ message: "auth api POST request received", data: { hashedPassword, token } });
    } else if (action === "login") {
        const token = jwt.sign(payload, secret)
        return NextResponse.json({ message: "auth api POST request received", data: { token } });
    } else {
        return NextResponse.json({ message: "Invalid action" }, { status: 400 });
    }
}