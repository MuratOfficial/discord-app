"use server"

import { prisma } from "@/lib/prisma"

export async function addUsers(){
    const users = await prisma.user.createMany({
        data:[
            {
                username:"damir",
                email:"damir@email.com"
            },
            {
                username:"aena",
                email:"aena@email.com"
            },
            {
                username:"akbota",
                email:"akbota@email.com"
            },
            {
                username:"umar",
                email:"umar@email.com"
            }
        ]
    })


    return users

}