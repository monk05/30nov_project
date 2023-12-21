import {createContext, useContext, useState} from "react";

export const AuthContext=createContext();

//auth provider function is responsible for providing the data to its descendants

export const AuthProvider=({children})=>{
    const [token,setToken]=useState("")

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
    return(
        <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser}}>
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