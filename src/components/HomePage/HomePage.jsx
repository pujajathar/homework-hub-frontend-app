import React from "react";
import { useNavigate } from "react-router-dom";



function HomePage () {
 const navigate = useNavigate();
return (
 <div>
    <nav className="links">
       <button onClick={() => navigate("/")}>Home</button> 
       <button onClick={() => navigate("/aboutus")}>About Us</button> 
       <button onClick={() => navigate("/parents")}>Parents</button> 
       <button onClick={() => navigate("/teachers")}>Teachers</button> 
       <button onClick={() => navigate("/students")}>Students</button> 
    </nav>




 </div>
       
);
}
export default HomePage;