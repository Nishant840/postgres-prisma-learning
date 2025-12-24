import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


async function insertUser(email:string,password:string,firstname:string,lastname:string){
    const res = await prisma.user.create({
        data:{
            email,
            password,
            firstname,
            lastname
        },
        select:{
            email:true,
            password:true
        }
    })
    console.log(res);
}
insertUser("nk2@gmail.com","123","nishant","kumar")