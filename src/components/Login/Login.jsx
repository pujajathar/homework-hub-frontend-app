
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login ({role, setUser}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
   
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        const user ={
            email,
            role
        };
        setUser(user);
        
        if(role === "teacher"){
            navigate("/teachers");
        }
        if(role === "parent") {
            navigate("/parents");
        }
        if(role === "student") {
            navigate("/students");
        }
    };
    return (
        <div className="login-container">
         
            <div className="card">
            <h2>
                {role ? role.charAt(0).toUpperCase() + role.slice(1) : "User"} 

                <span>Login</span>
            </h2>
            <p>Sign in to access your dashboard</p>
            
            <form onSubmit={handleLogin}>
                <label>Email:
                <input 
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /> 
                </label><br /><br />
                <label>Password:
                <input 
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </label><br /><br />

                <button className="bt">
                    Sign in as {role ? role.charAt(0).toUpperCase() + role.slice(1) : "User"}
                </button>
            </form>
           
            <p className="demo-text">
                Any email & password (4+ characters) works
            </p>
            </div>
       </div>
    )   
}
export default Login;