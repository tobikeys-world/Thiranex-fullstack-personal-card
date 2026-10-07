const certifications = [
    {
        organization: "Utiva",
        title: "Full-Stack Web Development Program",
        type: "Diploma",
        date: "October 2026",
        description:
            "Completed practical full-stack web development training covering frontend development, backend development, REST APIs, authentication, databases, and application deployment.",
        skills: [
            "React",
            "JavaScript",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "REST APIs",
        ],
    },
    {
        organization: "Thiranex",
        title: "Full-Stack Developer Internship",
        type: "Certificate of Completion",
        date: "2026",
        description:
            "Completed practical full-stack development training and project work involving frontend interfaces, backend APIs, database integration, authentication, and cloud deployment.",
        skills: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Authentication",
        ],
    },
    {
        organization: "Coursera",
        title: "JavaScript Certificate",
        type: "Professional Certificate",
        date: "2026",
        description:
            "Completed JavaScript training focused on strengthening practical programming and web development skills.",
        skills: [
            "JavaScript",
            "Programming",
            "Web Development",
        ],
        link:
            "https://www.coursera.org/account/accomplishments/verify/6SMAMB405HXC",
    },
];

function Certifications() {
    return (
        <section
            className="certifications"
            id="certifications"
        >
            <div className="section-container">

                <h2 className="section-title">
                    Certifications & Professional Development
                </h2>

                <p className="section-subtitle">
                    Professional training and credentials supporting
                    my journey in full-stack software development.
                </p>

                <div className="certifications-grid">

                    {certifications.map((certification) => (

                        <article
                            className="certification-card"
                            key={`${certification.organization}-${certification.title}`}
                        >

                            <div className="certification-header">

                                <div>
                                    <h3>
                                        {certification.title}
                                    </h3>

                                    <p className="certification-organization">
                                        {certification.organization}
                                    </p>
                                </div>

                                <span className="certification-type">
                                    {certification.type}
                                </span>

                            </div>


                            <p className="certification-date">
                                {certification.date}
                            </p>


                            <p className="certification-description">
                                {certification.description}
                            </p>


                            <div className="certification-skills">

                                {certification.skills.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                ))}

                            </div>


                            {certification.link && (
                                <a
                                    href={certification.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certificate-link"
                                >
                                    Verify Certificate →
                                </a>
                            )}

                        </article>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Certifications;