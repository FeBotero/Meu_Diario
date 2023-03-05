import express,{Request,Response} from "express"
import cors from "cors";

import userRoutes from "./routes/user.routes"


async function main(){

const app = express()


app.get('/',function(req:Request,res:Response){
    res.send("Olá Brasil!!")
})

app.use(cors())
app.use(express.json())
app.use("/user",userRoutes)



app.listen(3333,()=>console.log(`Server is running on port 3333`))

}
main()

