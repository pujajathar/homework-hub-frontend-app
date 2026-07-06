import { useState } from "react";
import mockAssignments from "./mockAssignments";

function AssignmentForm ({onSubmit}) {

    const [assignment, setAssignment] = useState({
             subject:"",
            title:"",
            dueDate:"",
            status:"" 
    });
    const handleChange = (e) => {
            const {name, value} = e.target;
            setAssignment({
                ...assignment,
                [name]:value
            });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAssignment = {
            ...assignment,
            id:Date.now()
        };
        onSubmit(newAssignment);
        setAssignment({
            subject:"",
            title:"",
            dueDate:"",
            status:""
        });
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>Subject:
                <select 
                      name="subject"
                    value={assignment.subject}
                    onChange={handleChange} >
                   <option value="">Select Subject:</option>
                   <option value="Math">Math</option>
                   <option value="Science">Science</option>
                   <option value="Art">Art</option>
                   <option value="English">English</option>
                   <option value="Social Studies">Social Studies</option>
                </select>
                </label><br />
                <label>Title:
                    <input type="text"
                    name="title"
                    value={assignment.title} 
                    onChange={handleChange}
                    />
                </label><br />
                <label>dueDate:
                    <input type="date"
                    name="dueDate"
                    value={assignment.dueDate}
                    onChange={handleChange}
                    /><br />
                </label>
               
                <button type="submit">Create Assignment</button>
            </form>
         
        </div>
    );
};
export default AssignmentForm;
                    
                   
                   
           