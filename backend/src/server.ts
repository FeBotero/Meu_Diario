import express,{Request,Response} from "express"

async function main(){

const app = express()


app.get('/',function(req:Request,res:Response){
    res.send("Olá Brasil!!")
})

app.listen(3333,()=>console.log(`Server is running on port 3333`))

}
main()

