import {createContext, useContext, useEffect, useState} from "react";

export const AuthContext=createContext();

//auth provider function is responsible for providing the data to its descendants

export const AuthProvider=({children})=>{
    const [token,setToken]=useState("")
    const [user,setUser]=useState("") // made for passing data of authorization
    const [services,setService]= useState("")

    const storeTokenInLS=(serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem('token',serverToken);

    }
    let isLoggedIn=!!token;

    //logout function 
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token")

    }

    //jwt Authentication -to get the currently logged in user data 
    const userAuthentication=async()=>{
        try{
            const response=await fetch("http://localhost:5000/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            if(response.ok){
                const data= await response.json();
                console.log(data)
                setUser(data.userData);

            }

        }catch(error){
            console.log(error)
        }
    }
    const getServices=async()=>{
        try{
            const response=await fetch("http://localhost:5000/service",{
                method:"GET",
            });
            if(response.ok){
                const data=await response.json();
                //console.log(data.msg);
                setService(data.msg)
            }

        }catch(error){
            console.log(`service frontend error ${error}`)
        }
    }
    useEffect(()=>{
        getServices();
        userAuthentication();
    })



    return(
        <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser,user,services}}>
            {children}
        </AuthContext.Provider>
    );

};


export const useAuth =()=>{   //useAuth custom hook ,useAuth function now contains the value provided by the AuthContext.provider
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider"); //useless
    }
    return authContextValue;
}





//reuseable function anypage can use it