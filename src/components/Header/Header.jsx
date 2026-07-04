import logo from '../../assets/images/logo.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';
function Header () {
const navigate = useNavigate();
    return (
        <div className='header'>
             <div>
            <img src={logo} alt='AaruEdu Logo' />
        </div>
       
        <div>            
            <nav className="buttons">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/aboutus")}>About Us</button>
      <button onClick={() => navigate("/parents")}>Parents</button>
      <button onClick={() => navigate("/teachers")}>Teachers</button>
      <button onClick={() => navigate("/students")}>Students</button>
   </nav>

        </div>
      </div> 
    
    );
}
export default Header;