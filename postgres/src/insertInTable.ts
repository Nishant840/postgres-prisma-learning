import {Client} from "pg"
import "dotenv/config";

// async function insertData(){
//     const client = new Client({
//         connectionString: `postgresql://neondb_owner:npg_FHEbOBrp0t6m@ep-long-field-ah23qyb3-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require`
//     })
//     try{
//         await client.connect();
//         const insertQuery = "INSERT INTO users (username,email,password) VALUES ('username1','username@example.com','user1_password'); ";
//         const res = await client.query(insertQuery);
//         console.log("Insertion successfull!", res);
//     }
//     catch(err){
//         console.log("Error during insertion", err);
//     }
//     finally{
//         await client.end();
//     }
// }
// insertData()

// above code has major security bug we should not pass inout value in query string 
// sql injection: inject wrong input: input sql query along with input
// ex:    SELECT * FROM users WHERE id = 'user_input';
//        user_input = ' OR 1=1; --
// After Injection: SELECT * FROM users WHERE id = '' OR 1=1; --';
// Result: The condition 1=1 is always true, and the -- makes the rest of the original query a comment, 
// so the database returns all user records, effectively bypassing authentication. 


// better way/ secure way:
async function insertData(){
    const client = new Client({
        connectionString: process.env.DATABASE_URL!
    })
    try{
        await client.connect();
        const insertQuery = "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
        const values = ['username3','username3@example.com','user3_password']
        const res = await client.query(insertQuery,values);
        console.log("Insertion successfull!", res);
    }
    catch(err){
        console.log("Error during insertion", err);
    }
    finally{
        await client.end();
    }
}
insertData()