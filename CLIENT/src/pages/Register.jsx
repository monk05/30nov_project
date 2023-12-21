import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";

export const Register=()=>{
    const navigate=useNavigate();
    const storeTokenInLS=useAuth();

    
    const [user,setUser]=useState({ //creating objects 
        username:"",
        email:"",
        phone:"",
        password:""
    });


    //handling the input

    const handleInput=(e)=>{
        let name=e.target.name;  //gets name of the field 
        let value=e.target.value;  // gets entered value in the field live

        setUser({
            ...user, // SPREAD OPERATOR (only modify the modified field rest keep it default)
            [name]:value, //dynamic 

        })
    }

    //handling the form submit
    const  handleSubmit=async(e)=>{
        e.preventDefault(); // prevent reload
        console.log(user);
        try{
            const response=await fetch(`http://localhost:5000/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user),
            });
            if(response.ok){
                const res_data=await response.json();
                console.log("response from server",res_data)
                storeTokenInLS(res_data.token);
                //localStorage.setItem("token",res_data.token); //you have to do this every time to get token that is why above function is made 
                setUser({
                    username:"",
                    email:"",
                    phone:"",
                    password:""
                })
                navigate("/login");
            }
            console.log(response)

        }catch(error){
            console.log(error)
        }
        
    }
    



    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        {/*image on reg. page*/}
                        <div className="registration-image">
                            <img src="/images/register.png" 
                            alt="registration form "
                            width="500"
                            height="500"
                             />
                        </div>
                        {/*registration form */}
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">registration form</h1>
                            <br/>
                            <form onSubmit={handleSubmit} >
                                <div>
                                    <label htmlFor="username">username :</label>
                                    <input  
                                        type="text" 
                                        name="username" 
                                        placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">email :</label>
                                    <input  
                                        type="text" 
                                        name="email" 
                                        placeholder="email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">phone : </label>
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        placeholder="phone"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInput}

                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">password :</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-submit">Register now</button>

                            </form>

                        </div>



                    </div>
                </div>

            </main>
        </section>
    </>
}