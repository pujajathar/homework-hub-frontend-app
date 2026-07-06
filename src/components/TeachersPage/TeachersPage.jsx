
import { useState } from "react";
import { Link } from "react-router-dom";
import mockAssignments from "../mockAssignments";
import AssignmentForm from "../AssignmentForm";
import Footer from "../Footer/Footer";
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
            completed:false
        },    
     ]);

    setShowForm(false);
};
    const toggleComplete = (id) => {
        setAssignments((prev) => 
        prev.map((a) => 
        a.id === id ? {...a, completed : !a.completed} : a
    )
);
    };
    return (  
        
        <div>   
           
    <div className="dashboard">
        <div className="top-nav">
        <Link to="/" className="home-link">🏠Home</Link>
        </div>

        <div className="dashboard-header">
            <h1>Teacher Dashboard</h1>
            <p>Welcome back, Ms. Leah!</p>  
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
              
           
                <div className="assignment-list">
                      {/*display assignment*/ }
               {assignments.map((assignment) => (
                <div key={assignment.id} className="assignment-row">
                    <div className="assignment-left"> {/*left side */}
                    <button 
                    className="check-btn"
                    onClick={() => toggleComplete(assignment.id)}>
                        {assignment.completed ? "✅":"⬜"}
                    </button>

                      
                        <div>
                            <h3 className={assignment.completed ? "completed" : ''}>
                                {assignment.title}
                            </h3>
                            <p className="due">
                                Due {assignment.dueDate}
                            </p>
                            </div>
                         </div>
                         <div className="assignment-right">  {/*right side */}
                            <span className={`tag ${assignment.subject.toLowerCase()}`}>
                                {assignment.subject}
                            </span>
                         </div>

                </div>  
             ))}
              </div> 
              </div>
          </div>
          
    </div>
    <Footer />
   </div>   
  
    
);  
};
export default TeachersPage;    
     
      

           
               
                
           