import mongoose,{Schema,Document} from "mongoose"

export interface Iuser extends Document{
    name:string,
    email:string,
    password:string,
    confirmPassword?:string
    createdAt?:string
}


const User:Schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    access_token: {
        type: String, 
    },
    createdAt:{ 
        type: String, 
        require: true 
    }
})

export default mongoose.model<Iuser>("User",User,"users")