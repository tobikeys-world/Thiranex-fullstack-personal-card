import profileImage from "../assets/profile.jpeg";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>

                    <h1>
                        Oluwatobi Emmanuel
                        <span>Oluwagbohun</span>
                    </h1>

                    <h2>Frontend / Full-Stack Developer</h2>

                    <p className="hero-description">
                        I build responsive and user-focused web applications with modern
                        frontend and backend technologies.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn primary-btn">
                            View My Projects
                        </a>

                        <a href="#contact" className="btn secondary-btn">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-frame">
                        <img
                            src={profileImage}
                            alt="Oluwatobi Emmanuel Oluwagbohun"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;