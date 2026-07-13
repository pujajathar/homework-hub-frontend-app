
import './AssignmentList.css';
function AssignmentList ({
    assignments, 
    toggleComplete, 
    completedAssignments = [],
    showCheckbox=true,
    showActions=false,
    onEdit,
    handleDelete
 }) {
  
    return (
        <div className="assignment-list">
                            {/*display assignment*/ }
            {assignments.map((assignment) => (
                <div key={assignment.id} className="assignment-row">
                    <div className="assignment-left"> {/*left side */}
                        {toggleComplete && (
                        <button 
                            className="check-btn"
                            onClick={() => toggleComplete(assignment.id)}>
                            {completedAssignments.includes(assignment.id) ? "✅":"⬜"}
                        </button>
                        )}
                    <div>
                        <h3 className={completedAssignments.includes(assignment.id) ? "completed" : ''}>
                            {assignment.title}
                        </h3>
                        <p className="due">
                            Due on : {assignment.dueDate}
                        </p>
                    </div>
                    </div>
                        <div className="assignment-right">  {/*right side */}
                            <span className={`tag ${assignment.subject.toLowerCase()}`}>
                                {assignment.subject}
                            </span>
                        {showActions && (
                            <div className='buttonspace'>
                            <button className='edit-btn'
                            onClick={() => onEdit(assignment.id)}>
                                Edit
                            </button>
                            <button className='delete-btn'
                            onClick={() => handleDelete(assignment.id)}>
                                Delete
                            </button>
                            </div>
                        )}
                        </div>
                </div>  
            ))}
        </div> 
            );
        };
        export default AssignmentList;
        
            