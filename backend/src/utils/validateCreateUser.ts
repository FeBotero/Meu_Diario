// export function validateUser(field:any){
//     if(!field){
//         return `Favor verificar o campo ${field}`
//     }
// }

export function validLogin(email:any,password:any){
    if(!email||!password) return ({message:"Erro nos dados enviado!"})
}

export function validUser(user:any){
    if (!user) return ({ message: "Email ou senha incorreto!" })
}