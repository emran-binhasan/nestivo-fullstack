import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config"
import userRoutes from "./routes/users"
import mongoose from "mongoose"

mongoose.connect(process.env.CONNECTION_STRING as string)

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/api/users", userRoutes)
app.get("/api/test", async (req: Request, res:Response) => {
    res.json({message : 'Hello from express endpoint'})
});

app.listen(7000, ()=> {
    console.log('Listening on localhost 7000')
});