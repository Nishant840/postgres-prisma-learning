import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


// async function insertUser(email:string,password:string,firstname:string,lastname:string){
//     const res = await prisma.user.create({
//         data:{
//             email,
//             password,
//             firstname,
//             lastname
//         },
//         select:{
//             email:true,
//             password:true
//         }
//     })
//     console.log(res);
// }
// insertUser("nk2@gmail.com","123","nishant","kumar")


// updating data in db
// interface UpdateParams{
//     firstname: string,
//     lastname: string
// }
// async function updateUser(username:string,{firstname,lastname}:UpdateParams){
//     const res = await prisma.user.update({
//         where:{email:username},
//         data:{
//             firstname,
//             lastname
//         }
//     })
//     console.log(res);
// }
// updateUser("nk1@gmail.com",{
//     firstname: "chhotu",
//     lastname: "kumar"})

// getting user details
// async function getUserDetails(username:string){
//     const res = await prisma.user.findMany({
//         where:{email:username}
//     })
//     console.log(res);
// }
// getUserDetails("nk1@gmail.com");

// get all todos
// async function getTodos(userId:number){
//     const res = await prisma.todo.findMany({
//         where:{
//             id: userId
//         }
//     })
//     console.log(res);
// }
// getTodos(1);

// insert some todos:
// async function insertTodos(userId:number){
//     const res = await prisma.todo.create({
//         data:{
//             title:"Gym",
//             description: "Go to gym from 5 ot 9 p.m",
//             userId:1
//         }
//     })
//     console.log(res);
// }
// insertTodos(1)

// get Todos and user details
async function getTodosAndUserDeatails(userId:number){
    const res = await prisma.todo.findMany({
        where:{
            id: userId
        },
        select:{
            id: true,
            title:true,
            description: true,
            user: true
        }
    })
    console.log(res);
}
getTodosAndUserDeatails(1);