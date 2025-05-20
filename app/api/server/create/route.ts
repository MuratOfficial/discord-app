import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name } = body;

  const server = await prisma.server.create({
    data:{
        name:name
    }
  })

  return NextResponse.json(server);
}
