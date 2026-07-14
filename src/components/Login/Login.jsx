
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login ({role, setUser}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        setError(""); //it clears old error
        if (!email.includes("@")) {
            setError("Please enter valid email address.")
            return;
        }
        if (!email.includes(".")) {
            setError("Please enter valid email address.")
            return;
        }
        if (password.length < 6) {
            setError ("Password must contain at least 6 characters.");
            return;
        }
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
        <div className="login-page">
            <div className="login-container">
                <h2>
                    {role ? role.charAt(0).toUpperCase() + role.slice(1) : "User"}
                <span> Login </span>
                </h2>
                <p>Sign in to access your dashboard</p>
                {error && (
                    <p className="error-msg">{error}</p>
                )}
                <form onSubmit={handleLogin}>
                    <label>Email <span>
                    <input className="input-box"
                    type="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    /> </span>
                    </label><br /><br />
                    <label>
                    Password  <span>
                    <input className="input-box"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    /></span> 
                    </label><br /><br />

                    <button className={`submitbtn ${role}-btn`} 
                    type="submit">
                        Sign in as {role ? role.charAt(0).toUpperCase() + role.slice(1) : "User"}
                    </button>
                </form>
            </div>
       </div>
    )   
}
export default Login;