
import { useState, useEffect } from "react";
import AssignmentList from "../AssignmentList/AssignmentList";
import { mockMessages, mockAssignments, mockParent } from "../mockData";
import './ParentsPage.css';

function ParentsPage ({ assignments, toggleComplete, completedAssignments }) {
  
    const [data, setData] = useState({
        subject:"",
        message:""
     });
    const [submitted, setSubmitted] = useState(false);
    const completed = completedAssignments.length;
    const pending = assignments.length - completed;
    const progressPct = assignments.length > 0 ? Math.round((completed/assignments.length)*100) : 0;
    const unread = mockMessages.filter(m => !m.read).length;
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
       <div className="page">
        <header className="dashboard-header">
            <h1>👨‍👩‍👧 Parent Dashboard</h1>
            <p>Welcome back, <strong>{mockParent.name}</strong> - tracking {mockParent.child} ({mockParent.grade})</p>
        </header>

            <section className="stats-row">
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
            <div className="stat-card">
                <div className="stat-num red">{unread}</div>
                <div className="stat-label">Unread Messages</div>
            </div>
            </section>

            <div className="two-col">      
            <section className="card">
                <h2>📝 {mockParent.child}'s Assignments</h2>
             {/* Assignment list component displays list of assignment */}
            <AssignmentList 
            assignments={assignments}
            toggleComplete={toggleComplete}
            completedAssignments={completedAssignments}
            />
            </section>
            <div>  {/*Progress section */}
                <section className="card">
                    <h2>📊 Progress</h2>
                    <div className="progress-label">
                        <span>Overall Completion</span>
                        <strong>{progressPct}%</strong>
                        </div>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar-fill" style={{ width: `${progressPct}%`}} />
                        </div>                          
                            <p className="progress-note">{completed} of {assignments.length} assignments completed this week.</p>
                </section>
          
                <section className="card">
                <h2>💬 Messages from Teachers</h2>
                <ul className="message-list">
                    {mockMessages.map(m => (
                        <li key={m.id} className={`message-item ${m.read ? "" : "unread"}`}>
                            <div className={`message-dot ${m.read} ? "read" : ""}`} />
                            <div>
                                <div className="message-from">{m.from}</div>
                                <div className="messade-subject">{m.subject}</div>
                            </div>
                            <span className="message-date">{m.date}</span>
                        </li>             
                    ))}
                </ul>
            </section>

           <section className="card">
                <label>📨 Contact Teacher:</label><br /><br />
                <form className="contact-form" onSubmit={handleSubmit}>  
                <input type="text" name="subject" value={data.subject} onChange={handleChange} placeholder="Subject"/>
                 
                <textarea name="message" value={data.message} maxLength={200} onChange={handleChange} 
                    placeholder="Message...."/>
                   
                <button variant="yellow" type="submit">Send Message</button>
                </form>
                {submitted && (<p className="success-message">✅ Message has been sent successfully!</p>)}
            </section>
            </div>
            </div>    
        </div>
    )
}

export default ParentsPage;                    
                                  
                              

       
    
    
