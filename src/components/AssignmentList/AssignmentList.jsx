
import './AssignmentList.css';
function AssignmentList ({assignments, toggleComplete, showCheckbox=true}) {

    return (
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
            );
        };
        export default AssignmentList;
        
            