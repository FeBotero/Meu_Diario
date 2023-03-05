import User,{Iuser} from "../model/user.model"
import mongoose from "mongoose";

function findAllUser(){
    User.find().select(
        "_id name"
    )
}
function findUserByID(id:string){
    const ObjectId = new mongoose.Types.ObjectId(id)
    return User.findById(ObjectId).select(
        "_id name"
    )
}
function createUser(body:Iuser){
    return User.create(body)
}

function updateUser(id:string,body:Iuser){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.findByIdAndUpdate(objectId,body)
}
function deleteUser(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.findByIdAndDelete(objectId)
}

export default{
    findAllUser,
    findUserByID,
    createUser,
    updateUser,
    deleteUser
    
}