import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './StudentsPage.css';

function StudentsPage () {

    return (
    <div>
        <div className="home">
            <Header />
            <Link to={"/"}>Home</Link>
            <h1>Student Dashboard</h1>
            
        </div>
    </div>
    );
}
export default StudentsPage;