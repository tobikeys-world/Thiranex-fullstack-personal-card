import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/projects"
                );

                const uniqueProjects = response.data.filter(
                    (project, index, array) =>
                        index ===
                        array.findIndex(
                            (item) => item.title === project.title
                        )
                );

                setProjects(uniqueProjects);
            } catch (err) {
                setError("Unable to load projects.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <h2 className="section-title">My Projects</h2>

                <p className="section-subtitle">
                    Some of the applications I've built.
                </p>

                {loading && <p>Loading projects...</p>}

                {error && <p>{error}</p>}

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project._id}>
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="technologies">
                                {project.technologies.map((technology) => (
                                    <span className="tech" key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                )}

                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;