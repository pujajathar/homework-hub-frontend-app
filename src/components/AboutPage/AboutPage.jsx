import { Link } from "react-router-dom";
import './AboutPage.css';
function AboutPage () {
    const team = [
        {name: "Puja Jathar", role: "Founder & CEO", emoji:"👩‍💼"},
        {name: "Place Holder", role: "Lead Developer", emoji:"👨‍💻"},
        {name: "Place Holder", role: "Curriculum Designer", emoji: "👩‍🏫"},
    ];

return (
 <div className="page">
    <h1>About Us</h1>
    <p>We believe every child deserves a stress-free homework experience. AaruEdu
    Homework Hub was built by parents and educators to bridge the gap between
    school and home. 
    </p>
    <p><strong>AaruEdu</strong> makes it easy to manage homework without relying on paper handouts that can be misplaced
    or forgotten.<br/>
    Teachers can post assignments online, parents can easily keep track of their child's homework and upcoming
    deadlines, and students can access their assignments anytime. <br/>
    By bringing everything together in one place, we help families stay organized and make homework management 
    simpler and more efficien.
    </p>
    <div className="about-grid">
    <div className="about-card">
        <div className="about-icon">🎯</div>
        <h3>Our Mission</h3>
        <p>Our mission is to make homework management simple, organized, and accessible for elementary school communities.<br/>
        We are committed to helping teachers, parents, and students stay connected by providing one central place to manage
        assignments, due dates, classroom updates, and learning resources.</p>
    </div>
    <div className="about-card">
        <div className="about-icon">🌱</div>
        <h3>Our vision</h3>
        <p>Our vision is to create a future where every elementary school family has an easy and reliable way to stay engaged in their child's education.<br/>
        We aspire to strengthen the partnership between home and school by reducing missed assignments, improving collaboration, and making homework management
        simple, efficient, and accessible for everyone.</p>
    </div>
    <div className="about-card">
        <div className="about-icon">💡</div>
        <h3>Why AaruEdu?</h3>
        <p>AaruEdu was inspired by my own experience as a parent of elementary school children.<br/>
         I wanted to create a simple solution that helps families and teachers stay connected while reducing the stress of 
         keeping track of paper assignments.</p>
    </div>
    <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
            {team.map(({ name, role, emoji }) => (
                <div className="team-card" key={name}>
                    <div className="team-avatar">{emoji}</div>
                    <h4>{name}</h4>
                    <p>{role}</p>
                    </div>
            ))}
        </div>
    </section>

    </div>
    <div>
        <h3>Contact Us</h3>
        <p>Email:</p>
        <p>Phone:</p>
    </div>
</div>


);



}
export default AboutPage;