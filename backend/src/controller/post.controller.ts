import mongoose from "mongoose"
import service from "../service/post.service"
import { Request, Response } from 'express';
import { IPost } from "../model/post.model";


interface Irequest{
  params:string, 
  body:IPost
}

function isObjectIdValid(id:any) {
    return mongoose.Types.ObjectId.isValid(id);
  }

async function findAll(req:Irequest,res:Response){
    const posts = await service.findAllPosts()
    res.send(posts)
}
async function findById(req:Irequest,res:Response){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(400).json({ message: "ID inválido!" });
      }
    const post = await service.findByIdPost(id)
    res.send(post)
}
async function findByUserId(req:Irequest,res:Response){
  const {author,date} = req.body
  if (!isObjectIdValid(author)) {
      return res.status(400).json({ message: "ID inválido!" });
    }
  const posts = await service.findAllPosts()
  const postFilter = posts.filter(
    (post)=>
    post.author?.toString()=== author &&post.createdAt&&
    (post.createdAt)===date
  )

  res.send(postFilter)
}

async function create(req:Irequest,res:Response){
    const body = req.body
    if(body.content==""){
      res.status(400).send({ message: "Favor inserir conteúdo!" });
    }else{
      await service.createPost(body)
      res.status(200).json({ message: "Post realizado com sucesso!" });
    }
    
}
async function updateById(req:Irequest,res:Response){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(400).json({ message: "ID inválido!" });
      }
    const body = req.body
    const post = await service.updatePost(id,body)
    res.send(post)
}
async function deleteByID(req:Irequest,res:Response){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(400).json({ message: "ID inválido!" });
      }
    await service.deletePost(id)
    res.send({message:"Post deleted"})
}
export default {
    findAll,
    findById,
    create,
    updateById,
    deleteByID,
    findByUserId
}