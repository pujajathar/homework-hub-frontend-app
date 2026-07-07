import { Link } from "react-router-dom";
import { useState } from "react";
import AssignmentList from "../AssignmentList/AssignmentList";
import TeachersPage from "../TeachersPage/TeachersPage";

function ParentsPage ({ assignments, toggleComplete }) {
  
    const [data, setData] = useState({
        subject:"",
        message:""
     });
    const [submitted, setSubmitted] = useState(false);
    const handleChanege = (e) => {
         
    const {name, value} = e.target;
        setSubmitted(false);  //message disappears after user starts typing
        setData((prevData)  => 
        ({   
            ...prevData,
            [name]:value
        }))
    };
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
            <Link to={"/"}>Home</Link>
            <h1>Parent Dashboard</h1>
            <h2>Aarya's Assignments</h2>
             {/* Assignment list component displays list of assignment */}
            <AssignmentList 
            assignments={assignments}
            toggleComplete={toggleComplete}
            />
            
            <div className="form">
                <label>Contact Teacher:</label><br /><br />
                <form onSubmit={handleSubmit}>  
                <input type="text" name="subject" value={data.subject} onChange={handleChanege} placeholder="Subject"/>
                    <br /><br />
                <textarea name="message" value={data.message} maxLength={200} onChange={handleChanege} 
                    placeholder="Message...."/>
                    <br /><br />
                <button type="submit">Submit</button>

                </form>
                  {submitted && (<p className="success-message">✅ Message has been sent successfully!</p>)}
                  
            </div>
        </div>
    )
}
export default ParentsPage;                    
                                  
                              

       
    
    
