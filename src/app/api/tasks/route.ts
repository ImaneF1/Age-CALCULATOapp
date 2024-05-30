
import { Task } from "@/app/page"
import prisma from "../../../../server/db"


export async function POST(request: Request) {
 try {
    const body = await request.json();
    const res = await prisma.task.create({
        data: {
            text: body.text
        }
    })
    return Response.json(res)
    
 } catch (error) {
    console.log(error)
    return Response.json({ message: "error" })
 }
}
export async function GET() {
    try {
        const res = await prisma.task.findMany({orderBy: {createdAt: "desc"}})
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({ message: "error" })

    }
}
export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const res = await prisma.task.update({
            where: {
                id: body.id
            },
            data: {
                isCompleted: true
            }
        })
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({ message: "error" })
    }
}
export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const res = await prisma.task.delete({
            where: {
                id: body.id
            }
        })
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({ message: "error" })
    }
}
