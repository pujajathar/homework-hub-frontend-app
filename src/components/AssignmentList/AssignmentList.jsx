
import './AssignmentList.css';
function AssignmentList ({
    assignments, 
    setAssignments, 
    toggleComplete, 
    showCheckbox=true,
    showActions=false,
    onEdit,
    onDelete
 }) {
  
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
                        {showActions && (
                            <>
                            <button className='edit-btn'
                            onClick={() => onEdit(assignment.id)}>
                                Edit
                            </button>
                            <button className='delete-btn'
                            onClick={() => onDelete(assignment.id)}>
                                Delete
                            </button>
                            </>
                        )}
                        </div>

                    </div>  
            ))}
        </div> 
            );
        };
        export default AssignmentList;
        
            