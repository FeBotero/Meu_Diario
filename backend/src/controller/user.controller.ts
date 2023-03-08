
import service from "../service/user.service"
import { Request, Response } from 'express';
import bcrypt from "bcrypt"
import { Iuser } from "model/user.model";
// import { validateUser } from "utils/validateCreateUser";



interface Irequest{
    params:string, 
    
    body:Iuser
  
  }



async function readAllUser(req:Irequest,res:Response){
    const users = await service.findAllUser()
    res.send(users)
}
async function readUserByID(req:Irequest,res:Response){
    const id:any=req.params
    const request = await service.findUserByID(id)
    res.send(request)
}
async function createUser(req:Request,res:Response){
    const body = req.body
    const requiredFields = ["name","email","password","confirmPassword"]
    
    // const mess = validateUser(body.name)
    // console.log(mess)

    // if(requiredFields.some(field=>!body[field])){
    //     return res.status(400).json({message:`Erro no campos do formulário`})
    // }
    
    // const salt = await bcrypt.genSalt(12)
    // const passwordHash = await bcrypt.hash(body.password, salt);



    // const newUser = {
    //     name:body.name,
    //     email:body.email,
    //     password:passwordHash,
        
    // }

        // await service.createUser(newUser)
    
}
async function updateUser(req:Request,res:Response){
    const id:any = req.params
    const body = req.body

    const request = await service.updateUser(id,body)

    res.send(request)
}

async function deleteUser(req:Request,res:Response){
    const id:any=req.params
    await service.deleteUser(id)
    return res.status(200).json({message:"Usuário excluído com sucesso."})
}   




export default{    
    readAllUser,
    readUserByID,
    createUser,
    updateUser,
    deleteUser
}