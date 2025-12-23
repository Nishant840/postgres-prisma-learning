import {Client} from "pg"
import "dotenv/config";

async function getUser(your_user_id:number){
    const client = new Client({
        connectionString: process.env.DATABASE_URL!
    })
    try{
        await client.connect();
        const getQuery = `SELECT u.id,u.username,u.email,a.city,a.street,a.pincode
                          FROM USERS u JOIN addresses a on u.id = a.user_id WHERE u.id = $1
                        `;
        const values = [your_user_id]
        const res = await client.query(getQuery,values);
        console.log(res);
    }
    catch(err){
        console.log("Error: ", err);
    }
    finally{
        await client.end();
    }
}
getUser(1);