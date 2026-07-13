import logo from '../../assets/images/logo.png';
import './Header.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
function Header ( { role, user, setUser } ) {
const navigate = useNavigate();
 const handleLogout = () => {
        setUser(null);
        navigate("/");
    }

    return (
        <header className='header'>
            
             <div className='img'>
            <img src={logo} alt='AaruEdu Logo' />
        </div>
       <nav className="buttons">
                   
            
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/aboutus")}>About Us</button>
      {user?.role === "parent" && (
      <button className='par'
       onClick={() => navigate("/parents")}
       >
        Parents
        </button>
      )}
      {user?.role === "teacher" && (
      <button className='tech'
       onClick={() => navigate("/teachers")}>
        Teachers
        </button>
      )}
      {user?.role === "student" && (
      <button className='stu'
      disabled = {user?.role !== "student"}
      onClick={() => navigate("/students")}>
        Students
        </button>
      )}
        {user && (
            <button onClick={handleLogout}>
                Logout
            </button>
        )}
       
      </nav>
    </header>
    );
}
export default Header;