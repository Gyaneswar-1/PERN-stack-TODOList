import pg from "pg";

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"perntodo",
    password:"@Gyana87356",
    port:5432
})

db.connect();
export default db;