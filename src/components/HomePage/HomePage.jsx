import React from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function HomePage () {
 const navigate = useNavigate();
return (
 <div>
  <div className="tagline">
      <h1>AaruEdu - Homework Hub</h1>
      <h2>For Elementary Schools</h2>
      <p>AaruEdu Homework Hub connects students, parents, and teachers in one place.<br/>
      It is designed by parents and educators to make homework management simple and organized.
      </p>
   </div>
   <div className="buttons1">
      <button onClick={() => navigate("/parents")}>👨‍👩‍👧‍👦 I'm a Parent</button>
      <button onClick={() => navigate("/teachers")}>👩‍🏫 I'm a Teacher</button>
      <button onClick={() => navigate("/students")}>🧑‍🎓 I'm a Student</button>
   </div>
  <h2>Choose your role to get started</h2>
   <div className="select-card">
     
    <div className="role-card" onClick={() => navigate("/parents")}>
      <h3>👨‍👩‍👧‍👦 Parents</h3>
      <p>View assignments, track progress and contact teachers easily</p>
   </div>
   <div className="role-card" onClick={() => navigate("/teachers")}>
      <h3>👩‍🏫 Teachers</h3>
      <p>Create assignments, track progress and Respond to parents easily</p>
   </div>
   <div className="role-card" onClick={() => navigate("/students")}>
      <h3>🧑‍🎓 Students</h3>
      <p>View assignments, track progress and contact teachers easily</p>
   </div>
 </div>   
</div>
       
);
}
export default HomePage;