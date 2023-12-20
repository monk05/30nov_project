import { useState } from "react"

export const Login=()=>{
    const [user,setUser]=useState({ //creating objects 
        email:"",
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
    const  handleSubmit=(e)=>{
        e.preventDefault(); // prevent reload
        
    }
    



    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        {/*image on reg. page*/}
                        <div className="registration-image">
                            <img src="/images/login.png" 
                            alt="coding together"
                            width="500"
                            height="500"
                             />
                        </div>
                        {/*registration form */}
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Login </h1>
                            <br/>
                            <form onSubmit={handleSubmit} >
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
                                <button type="submit" className="btn btn-submit">Login now</button>

                            </form>

                        </div>



                    </div>
                </div>

            </main>
        </section>
    </>
}