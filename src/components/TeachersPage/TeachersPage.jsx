
import { useState } from "react";
import { Link } from "react-router-dom";
import mockAssignments from "../mockAssignments";
import AssignmentForm from "../AssignmentForm";
import './TeachersPage.css';


function TeachersPage () {
    
   const [assignments, setAssignments] = useState(mockAssignments);
   const [showForm, setShowForm] = useState(false);

   const handleAddAssignment = (newAssignment) => {
     setAssignments((prev) => [
        ...prev,
        {
         ...newAssignment,
            id:Date.now(),
        },    
     ]);

    setShowForm(false);
};
    return (          
        

    <div>
        <Link to={"/"}>Home</Link>
         
        <div>
        
            <h1>Teacher Dashboard</h1>
            <p>Welcome back, Ms. Leah!</p>  
        </div>
        <div className="assignment-section">
            <div className="assignment-header">
                <h2>Assignments</h2> 
           
                <button onClick={() => setShowForm(true)}>
                <span>+ Create New</span>
                </button>
            </div>
            {showForm && 
            <AssignmentForm 
            onSubmit={handleAddAssignment}
            onCancel={() => setShowForm(false)}
            />
            }
            <div>   
                
                      
                <div className="assignment-list">
                      {/*display assignment*/ }
               {assignments.map((assignment) => (
                <div key={assignment.id} className="assignment-card">
                    <div className="arrange"> 
                       <div className="title-duedate">
                        <p>{assignment.title}</p>
                        <p>{assignment.dueDate}</p>
                     </div>
                       <p><strong>{assignment.subject}</strong></p>
                    
                    </div>
                </div>
                   ))} 
                
                </div>         
            </div>

        </div>

    </div>
);  
};
export default TeachersPage;    
     
      

           
               
                
           