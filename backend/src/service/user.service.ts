import userModel from "model/user.model";
import mongoose from "mongoose";

function findAllUser(){
    userModel.find().select(
        "_id name"
    )
}