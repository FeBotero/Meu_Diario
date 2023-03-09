import mongoose, { Schema, Types } from "mongoose";

export interface IPost{
    author:String;
    content:String;
    date:Date
}

const postSchemna = new mongoose.Schema({
    author: { 
        type: String, 
        require: true 
    },
    content:{ 
        type: String, 
        require: true 
    },
    createdAt:{ 
        type: String, 
        require: true 
    }
})

export const Post = mongoose.model("Post",postSchemna)

