"use server";

import { prisma } from "@/lib/prisma";


export async function getServers(){
    const servers = await prisma.server.findMany();

    return servers
}

export async function getUsers(){
    const users = await prisma.user.findMany();
    return users
}