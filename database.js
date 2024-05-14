import mysql from "mysql2";
const pool = mysql
  .createPool({
    host: "mysql",
    user: "root",
    password: "root",
    database: "cloud",
  })
  .promise();
export async function getInfo() {
  try {
    const [result] = await pool.query("SELECT * FROM students");
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const info = await getInfo();
console.log(info);
