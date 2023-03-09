import axios from "axios"

const api = axios.create({
    baseURL:"",
    headers:{
        "Content-Type":"application/json"
    }
})



export const apiService = {
    user:{
        readAllURL:function(){
            return api.get("/user")
        },
        readByIdURL:function(id:any){
            return api.get("/user/"+id)
        },
        readByIdUpdateURL:function(id:any){
            return api.get("/user/update/"+id)
        },
        createURL:function(body:any){
            return api.post("/user",body)
        },
        
        updateURL:function(id:any,body:any){
            return api.put<any>("/user/"+id,body)
        },
        deleteURL:function(id:any){
            return api.delete<any>("/user/"+id)
        },
        conectUrl: function (body:any) {
            return api.post("/user/login",body)
          },

    },
    post:{
        readAllURL:function(){
            return api.get("/post")
        },
        readByIdURL:function(id:any){
            return api.get("/post/"+id)
        },
        readByUserID:function(id:any){
            return api.get("/post/",id)
        },
        createURL:function(body:any){
            return api.post("/post",body)
        },
        
        updateURL:function(id:any,body:any){
            return api.put<any>("/post/"+id,body)
        },
        deleteURL:function(id:any){
            return api.delete<any>("/post/"+id)
        },

    }




}