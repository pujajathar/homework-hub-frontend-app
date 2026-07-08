import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './StudentsPage.css';
import AssignmentList from "../AssignmentList/AssignmentList";
import { mockAssignments, mockStudent, mockBadges, mockTeacher } from "../mockData";
import ParentsPage from "../ParentsPage/ParentsPage";

function StudentsPage ({assignments, toggleComplete}) {

 const completed = assignments.filter(a => a.status === "completed");
 const total = assignments.length;
 const progressPct = (total > 0) ? Math.round((completed / total) * 100) : 0;
 const earnedCount = mockBadges.filter(b => b.earned).length;


    return (
    <div className="page">
        <header className="dashboard-header">
            <h1>🧑‍🎓 Student Dashboard</h1>
            <p>Hey, <strong>{mockStudent.name}</strong>! You're in {mockStudent.grade} with {mockTeacher.name}⭐</p>
        </header>

        <section className="stats-row">
            <div className="stat-card">
                <div className="stat-num">{total}</div>
                <div className="stat-label">Assignments 📝</div>
            </div>
            <div className="stat-card">
                <div className="stat-num green">{completed}</div>
                <div className="stat-label">Done ✅</div>
            </div>
            <div className="stat-card">
                <div className="stat-num amber">{total - completed}</div>
                <div className="stat-label">To Do 📌</div>
            </div>
            <div className="stat-card">
                <div className="stat-num purple">{mockStudent.points}</div>
                <div className="stat-label">Points ⭐</div>
            </div>
        </section>
        <div className="two-columns">
            <section className="card">
                <h2>📚🎯 My Homework</h2>
                <AssignmentList 
                assignments={assignments}
                onToggle={toggleComplete}
                />
            </section> 
        </div>
        
      
       
    </div>
    );
}
export default StudentsPage;