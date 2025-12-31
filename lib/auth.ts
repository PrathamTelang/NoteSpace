import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export function verifyAuth(request: NextRequest) {
    const authHeader = request.headers.get("Authorization")
    if (!authHeader) {
        return null;
    }
    const token = authHeader.replace("Bearer ", "");
    const secret = "your_jwt_secret_key";
    let payload: JwtPayload | string;
    try {
        payload = jwt.verify(token, secret)
    } catch (error) {
        return null;
    }
    return payload;
}