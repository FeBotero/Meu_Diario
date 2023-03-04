import { useState } from "react"
import profile from "../../assets/user16.svg"
import { getUser } from "../../utils/getUser"
import { HeaderContainer, HeaderHome, HeaderUser, Profile } from "./styles"

const getInfo:any = localStorage.getItem("user")
export function Header(){
    const [user,setUser]=useState()
    if(!getInfo){

        const userId = getInfo!=undefined?JSON.parse(getInfo).id:""
        // const uReturn:any = getUser(userId)
        // setUser(uReturn)
    }
    


    return(

        <HeaderContainer>
        <h1>Querido diario</h1>  
        {/* Logo do projeto acima */}
        {
            !user?<HeaderHome>
            <button>
                    Login
                </button>
            </HeaderHome>:
            <HeaderUser>

            <input type="date" name="selectDay" id="selectDay" />
    
            <Profile>
                <p>Felipe Botero</p>
                <button>
                    <img src={profile} alt="" />
                </button>
            </Profile>
            </HeaderUser>
        }
        

        


        
        </HeaderContainer>
    )
}