export type Tuser = {
    id?:String;
    name?:String;
    email?:String;
    password?:String;
    confirmPassword?:String;
    createdAt?:Date
    
}


export type Tpost={
    _id?:string;
    author:string;
    content:string;
    createdAt?:String
    map?:Array<Object>
}
export type TImageUser={
    avatar:string
}