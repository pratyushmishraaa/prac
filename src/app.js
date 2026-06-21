import express from "express"
// import dotenv from "dotenv"

dotenv.config();

const app = express();

app.get("/api/health",(req,res)=>{
   res.end("OK");

})

export default app;
