import { useState, useEffect } from "react";
import { mockAssignments } from "../mockData";
import "./AssignmentForm.css";


function AssignmentForm ({onSubmit, assignment: editAssignment, onCancel, handleDelete}) { //assignment propery passing from teachers page

    const [assignment, setAssignment] = useState({
            subject: editAssignment?.subject || "",
            title: editAssignment?.title || "",
            dueDate: editAssignment?.dueDate || "",
            status: editAssignment?.status || ""
    });
    const isEditing = Boolean(editAssignment);
    useEffect (() => {      //fills the form when click edit
        if (editAssignment) {
            setAssignment(editAssignment);
        } else {
            setAssignment({
                subject:"",
                title: "",
                dueDate: "",
                status:""
            });
        }
    }, [editAssignment]);
    
    const handleChange = (e) => {
            const {name, value} = e.target;
            setAssignment({
                ...assignment,
                [name]:value
            });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       
         const updateAssignment = {
        ...assignment,
        id: editAssignment? editAssignment.id: Date.now()
    };
    onSubmit(updateAssignment);
  
        setAssignment({
            subject:"",
            title:"",
            dueDate:"",
            status:""
        });
    };
   
    return (
        <div className="assignmet-form-container">
            <h2>{editAssignment ? "Update Assignment" : "Create Assignment"}</h2> {/*changes title of form when editing or creating */}
            <form className="assignment-form" onSubmit={handleSubmit}>
                          {/* When editing assignments displays only selected assignment name */}
                {isEditing ? (       
                    <input 
                    type="text"
                    name="subject"
                    value={assignment.subject}
                    readOnly
                    />
                            
                ) : (       //when creating displays options of subjects
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
                   <option value="Social-Studies">Social-Studies</option>
                </select>                
                </label>
                )}
               
                <label>Title:
                    <input type="text"
                    name="title"
                    value={assignment.title} 
                    onChange={handleChange}
                    placeholder="Title of Assignment..."
                    required
                    />
                </label>
                <label>dueDate:
                    <input type="date"
                    name="dueDate"
                    value={assignment.dueDate}
                    onChange={handleChange}
                    required
                    />
                </label>
            <div className="button-group">  
                <button className="submit-btn" type="submit">      {/* button text changes depending on editing or creating */}
                    {editAssignment? "Update Assignment" : "Create Assignment"}
                </button>
                <button className="cancel-btn" type="button" onClick={onCancel}>
                    Cancel
                </button> 
            </div>                       
            </form>
        </div>
    );
};
export default AssignmentForm;
                    
                   
                   
           