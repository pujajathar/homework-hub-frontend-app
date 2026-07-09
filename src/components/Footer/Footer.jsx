import './Footer.css';
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className='footer-inner'>
            <p>
                @ {year} <span>AaruEdu Homework Hub.</span> 🌈 Learn. Grow. Achieve.
            </p>
            <nav className='footer-links'>
            <a 
            href={facebook}
            target='_blank'
            rel='noopener noreferrer'
            >
              Facebook
            </a>  
            |
            <a 
            href={linkedin}
            target='_blank'
            rel='noopener noreferrer'
            >
              LinkedIn 
            </a> 
            </nav>   
            <div>
                <p>📍 Location: St.Louis, Missouri, USA</p>

                <p>💙 Support: support@aaruedu.com </p>          
            </div>
            </div>  
        </footer>
    );
};
export default Footer;