import './Footer.css';
import facebook from "../../assets/images/facebook.png"
function Footer() {
    return (
        <footer className="footer">
            <p>
                @ 2026 AaruEdu Homework Hub. All rights reserved.
            </p>
            <a 
            href={facebook}
            target='_blank'
            rel='noopener noreferrer'
            >
              Facebook  
            </a>


        </footer>

    );
};
export default Footer;