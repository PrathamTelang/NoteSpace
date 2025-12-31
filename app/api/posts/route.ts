import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
import { PrismaClient } from "@/prisma/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});
const prisma = new PrismaClient({ adapter });

/* ---------------- GET: Fetch user's posts ---------------- */
export async function GET(request: NextRequest) {
  const payload = verifyAuth(request);

  if (!payload || typeof payload === "string" || !payload.username) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { username: payload.username },
    include: { posts: true },
  });

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ posts: user.posts });
}

/* ---------------- POST: Create post ---------------- */
export async function POST(request: NextRequest) {
  const payload = verifyAuth(request);

  if (!payload || typeof payload === "string" || !payload.username) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { username: payload.username },
  });

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title, content } = await request.json();

  if (!title || !content) {
    return NextResponse.json(
      { message: "Title and content are required" },
      { status: 400 }
    );
  }

  const post = await prisma.post.create({
    data: {
      title,
      content,
      userId: user.id,
    },
  });

  return NextResponse.json({ post });
}

/* ---------------- PUT: Update post ---------------- */
export async function PUT(request: NextRequest) {
  const payload = verifyAuth(request);

  if (!payload || typeof payload === "string" || !payload.username) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { username: payload.username },
  });

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id, title, content } = await request.json();

  if (!id || (!title && !content)) {
    return NextResponse.json(
      { message: "Post id and at least one field required" },
      { status: 400 }
    );
  }

  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  if (post.userId !== user.id) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const updatedPost = await prisma.post.update({
    where: { id },
    data: {
      title: title ?? post.title,
      content: content ?? post.content,
    },
  });

  return NextResponse.json({ post: updatedPost });
}

/* ---------------- DELETE: Delete post ---------------- */
export async function DELETE(request: NextRequest) {
  const payload = verifyAuth(request);

  if (!payload || typeof payload === "string" || !payload.username) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { username: payload.username },
  });

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await request.json();

  if (!id) {
    return NextResponse.json(
      { message: "Post id is required" },
      { status: 400 }
    );
  }

  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  if (post.userId !== user.id) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  await prisma.post.delete({ where: { id } });

  return NextResponse.json({ message: "Post deleted successfully" });
}
