"use server"
import prisma from "@/lib/db"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { authOptions } from "../ut/auth"

export async function addToLove(formData: FormData) {
    "use client"
    const session = await getServerSession(authOptions)
    const pathName = formData.get('pathname') as string
    const movieId = formData.get('movieId')
    const data = await prisma.watchList.create({
        data: {
            userId: session?.user?.email as string,
            movieId: Number(movieId)
        }
    })
    revalidatePath(pathName)
}

export async function delLove(formData: FormData) {
    "use server"
    const watchListID = formData.get('watchListId') as string
    const pathname = formData.get('pathname')as string
    const data = await prisma.watchList.delete({
        where:{
            id : watchListID
        }
    })
    revalidatePath(pathname)
}