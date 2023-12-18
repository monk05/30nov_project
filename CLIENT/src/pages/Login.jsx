import { useState } from "react"

export const Login=()=>{
 const[user,setUser]=useState({
    email:"",
    password:""
 });

 const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setUser({
        ...user,
        [name]:value
    })
 }

 const handleSubmit=(e)=>{
    e.preventDefault();
 }




    return <>
        <section>
            <div>
                <div className="image">

                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
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

                        <button>Login</button>
                    </form>
                </div>
            </div>
        </section>
    </>
}