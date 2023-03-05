
import service from "../service/user.service"
import { Request, Response } from 'express';



async function readAllUser(req:Request,res:Response){
    const users = await service.findAllUser()
    res.send(users)
}
async function readUserByID(req:Request,res:Response){
    const id:any=req.params
    const request = await service.findUserByID(id)
    res.send(request)
}
async function createUser(req:Request,res:Response){
    const body = req.body
    const requiredFields = ["name","email","password","confirmPassword"]


    if(requiredFields.some(field=>!body[field])){
        return res.status(400).json({message:`Erro no campos do formulário`})
    }

        await service.createUser(body)
    
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