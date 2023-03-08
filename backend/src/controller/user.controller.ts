import mongoose from "mongoose";
import service from "../service/user.service"
import { Request, Response } from 'express';
import bcrypt from "bcrypt"

import User,{Iuser}from "../model/user.model"
import { sign } from "jsonwebtoken";




interface Irequest{
    params:string, 
    body:Iuser
  
  }

  const auth = {  
    expires: '24h',
  };
  


async function readAllUser(req:Irequest,res:Response){
    const users = await service.findAllUser()
    res.send(users)
}

async function readUserByID(req:Irequest,res:Response){
    const id:any=req.params
    const request = await service.findUserByID(id)
    res.send(request)
}

async function createUser(req:Irequest,res:Response){
    const {name,email,password,confirmPassword,createdAt} = req.body

    const users:any = await service.findAllUser()

    if(!name){
      return res.status(422).json({
        message: "Favor inserir nome!",
      });
    }
    if (!email) {
      return res.status(422).json({
        message: "Favor inserir o email!",
      });
    }

    const checkEmail = users.some((user:Iuser) => user.email === email)
    if (checkEmail) {
      return res.status(422).json({
        message: "Email já cadastrado!",
      });
    }
    if (!password) {
      return res.status(422).json({
        message: "Favor inserir a senha!",
      });
    }
    if (password != confirmPassword) {
      return res.status(422).json({
        message: "Senhas não coicidem!",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);


    const newUser =  new User({
      name:name,
      email:email,
      password: passwordHash,
      createdAt:createdAt,
      
    })


    const user = await service.createUser(newUser)
    res.send(user)
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


async function loginUser(req:Irequest,res:Response){

    try {
          const { email, password:passBody } = req.body;
          console.log(email)

          if (!email || !passBody) return res.status(400).json({ message: "Erro nos dados!" });

          const user = await User.findOne({ email })

          if (!user) return res.status(401).json({ message: "Email ou senha incorreto!" })

          await bcrypt.compare(passBody, user.password)

            const secret = process.env.SECRET||"";
            const access_token =  sign(
            {
              user
            },
            secret,{
              expiresIn: auth.expires
            }
          );

          res.status(200).json({
              id: user._id,
              access_token: access_token,
          })
          

      } catch (err) {
        console.log(err);

        res.status(500).json({
          message: "Aconteceu algo no servidor, tente novamente mais tarde.",
        });
      }
      
  }



export default{    
    readAllUser,
    readUserByID,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}