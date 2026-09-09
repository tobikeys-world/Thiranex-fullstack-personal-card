const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Axios",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "Git & GitHub",
];

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="section-container">
                <h2 className="section-title">Skills</h2>

                <p className="section-subtitle">
                    Technologies and tools I use to build web applications.
                </p>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;