import userModel,{Iuser} from "model/user.model";
import mongoose from "mongoose";

function findAllUser(){
    userModel.find().select(
        "_id name"
    )
}
function findUserByID(id:string){
    const ObjectId = new mongoose.Types.ObjectId(id)
    return userModel.findById(ObjectId).select(
        "_id name"
    )
}
function createUser(body:Iuser){
    return userModel.create(body)
}

function updateUser(id:string,body:Iuser){
    const objectId = new mongoose.Types.ObjectId(id)
    return userModel.findByIdAndUpdate(objectId,body)
}
function deleteUser(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return userModel.findByIdAndDelete(objectId)
}

export default{
    findAllUser,
    findUserByID,
    createUser,
    updateUser,
    deleteUser
    
}