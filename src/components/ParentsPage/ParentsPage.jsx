import { Link } from "react-router-dom";
import { useState } from "react";
import AssignmentList from "../AssignmentList/AssignmentList";

import './ParentsPage.css';
import { useEffect } from "react";
import Header from "../Header/Header";



function ParentsPage ({ assignments, toggleComplete }) {
  
    const [data, setData] = useState({
        subject:"",
        message:""
     });
    const [submitted, setSubmitted] = useState(false);
    const completed = assignments.filter(a => a.completed).length;
    const pending = assignments.filter(a => !a.completed).length;
    const progressPct = assignments.length > 0 ? Math.round((completed/assignments.length)*100) : 0;
   

     const handleChange = (e) => {
         
    const {name, value} = e.target;
        setSubmitted(false);  //message disappears after user starts typing
        setData((prevData)  => 
        ({   
            ...prevData,
            [name]:value
        }))
    };
 useEffect(() => {   //success message disappears after set time
    if(submitted) {
        const timer = setTimeout(() => {
        setSubmitted(false);
        }, 2000);
    return () => clearTimeout(timer);
 }
}, [submitted]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); //marks the form submitted
        setData 
        ({              //resets state after submitting form/name and message are cleared and ready for new message
                subject:"",
                message:""
        })
    }
 return (
    <div>
         <Header />
   
    <div className="dashboard">
        
    
           
            <Link to={"/"}>Home</Link>
            <h1>Parent Dashboard</h1>
            <section className="stat-row">
            <div className="stat-card">
                <div className="stat-num">{assignments.length}</div>
                <div className="stat-label">Total</div>
            </div>
            <div className="stat-card">
                <div className="stat-num green">{completed}</div>
                <div className="stat-label">Completed</div>
            </div>
            <div className="stat-card">
                <div className="stat-num amber">{pending}</div>
                <div className="stat-label">Pending</div>
            </div>

            </section>
            <div className="two-col">
       
            <div className="card">
                <h2>Aarya's Assignments</h2>
             {/* Assignment list component displays list of assignment */}
            <AssignmentList 
            assignments={assignments}
            toggleComplete={toggleComplete}
            />
            </div>
            
            <div>  {/*Progress section */}
                <section className="card">
                    <h2>Progress</h2>
                    <div className="progress-label">
                        <span>Overall Completion</span>
                        <strong>{progressPct}%</strong>
                        </div>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar-fill" style={{ width: `${progressPct}%`}} />
                        </div>
                          
                            <p className="progress-note">{completed} of {assignments.length} assignments completed this week.</p>
                       
                </section>
            </div>
           
            </div>
            <div className="form">
                <label>Contact Teacher:</label><br /><br />
                <form onSubmit={handleSubmit}>  
                <input type="text" name="subject" value={data.subject} onChange={handleChange} placeholder="Subject"/>
                    <br /><br />
                <textarea name="message" value={data.message} maxLength={200} onChange={handleChange} 
                    placeholder="Message...."/>
                    <br /><br />
                <button type="submit">Submit</button>

                </form>
                {submitted && (<p className="success-message">✅ Message has been sent successfully!</p>)}

               
            
            </div>
      
        </div>
         </div>
    )
}
export default ParentsPage;                    
                                  
                              

       
    
    
