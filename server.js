import express from "express";
import { rout } from "./router.js";

const PORT = process.env.PORT || 3008
export const app = express()

app.use(express.json())
app.use("/reports",rout)

app.listen(PORT,() =>{
    console.log('server run in port: ', PORT);
})