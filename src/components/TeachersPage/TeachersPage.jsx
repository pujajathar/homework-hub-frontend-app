
import { useState } from "react";
import { Link } from "react-router-dom";
import mockAssignments from "../mockAssignments";
import AssignmentForm from "../AssignmentForm";
import Footer from "../Footer/Footer";
import teacher from "../../assets/images/teacher.png";
import './TeachersPage.css';
import AssignmentList from "../AssignmentList/AssignmentList";




function TeachersPage ({ assignments, setAssignments }) {
    
  
   const [showForm, setShowForm] = useState(false);
 

   const handleAddAssignment = (newAssignment) => {
     setAssignments((prev) => [
        ...prev,
        {
         ...newAssignment,
            id:Date.now(),
            completed:false
        },    
     ]);

    setShowForm(false);
};
   
    return (  
        
        <div>   
           
    <div className="dashboard">
        <div className="top-nav">
        <Link to="/" className="home-link">🏠Home</Link>
        </div>

        <div className="dashboard-header">
            <div className="header-text">
            <h1>Teacher Dashboard</h1>
            <p>Welcome back, Ms. Leah!</p> 
            </div> 
            <div className="profile">
                <img src={teacher} alt="Teacher" />
                <span>Ms. Leah</span>
            </div>
        </div>
         <div className="main-grid">
                <div className="card">
                    <div className="card-header">

                <h2>Assignments</h2> 

                    <button
                    className="btn-add" 
                    onClick={() => setShowForm(true)}>
                + Create New
                </button>
                  </div>
                  {showForm && (
            <AssignmentForm 
            onSubmit={handleAddAssignment}
            onCancel={() => setShowForm(false)}
            />
            )
            }
              
            <AssignmentList 
            assignments={assignments}
            toggleComplete={toggleComplete}
            />
              </div>
          </div>
          
    </div>
    
   </div>   
  
    
);  
};
export default TeachersPage;    
     
      

           
               
                
           