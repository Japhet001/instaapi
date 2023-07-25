import dotenv from 'dotenv';
import assert from "assert";

dotenv.config()

const { PORT,HOST,HOST_URL, SQL_SERVER, SQL_DB, SQL_PWD, SQL_USER, JWT_SECRET } = process.env

assert(PORT, "PORT is required")
assert(HOST, "HOST is required")
const sqlEncrypt = process.env.SQL_ENCRYPT === 'true'



const config={
    port: PORT,
    host:HOST,
    url:HOST_URL,
    sql:{
        server: SQL_SERVER,
        database: SQL_DB,
        user: SQL_USER,
        password: SQL_PWD,
        options:{
            encrypt: sqlEncrypt,
            trustServerCertificate: true
        }
    },    
    jwt_secret: JWT_SECRET
}
export default config