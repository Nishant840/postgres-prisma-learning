import {Client} from "pg"
import "dotenv/config";


async function getUser(email:string){
    const client = new Client({
        connectionString: process.env.DATABASE_URL!
    })
    try{
        await client.connect();
        const getQuery = "SELECT * FROM users WHERE email = $1";
        const values = [email]
        const res = await client.query(getQuery,values);
        if(res.rows.length > 0){
            console.log("User found: ", res.rows[0]);
            return res.rows[0];
        }
        else{
            console.log("No user found with this email!");
            return null;
        }
    }
    catch(err){
        console.log("Error during fetching data", err);
    }
    finally{
        await client.end();
    }
}
getUser("username3@example.com");
