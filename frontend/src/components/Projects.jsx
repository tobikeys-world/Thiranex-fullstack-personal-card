import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/projects`
                );

                const uniqueProjects = response.data.filter(
                    (project, index, array) =>
                        index ===
                        array.findIndex(
                            (item) =>
                                item.title === project.title
                        )
                );

                setProjects(uniqueProjects);
            } catch (err) {
                console.error("Failed to fetch projects:", err);

                setError("Unable to load projects.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === activeCategory
            );

    const sortedProjects = [...filteredProjects].sort(
        (a, b) => {
            if (
                a.title ===
                "Service Request Dashboard"
            ) {
                return -1;
            }

            if (
                b.title ===
                "Service Request Dashboard"
            ) {
                return 1;
            }

            return 0;
        }
    );

    return (
        <section
            className="projects"
            id="projects"
        >
            <div className="section-container">
                <h2 className="section-title">
                    My Projects
                </h2>

                <p className="section-subtitle">
                    A selection of frontend and
                    full-stack applications I've built.
                </p>

                <div className="project-filters">
                    <button
                        type="button"
                        className={`filter-btn ${activeCategory === "all"
                                ? "active"
                                : ""
                            }`}
                        onClick={() =>
                            setActiveCategory("all")
                        }
                    >
                        All
                    </button>

                    <button
                        type="button"
                        className={`filter-btn ${activeCategory === "frontend"
                                ? "active"
                                : ""
                            }`}
                        onClick={() =>
                            setActiveCategory(
                                "frontend"
                            )
                        }
                    >
                        Frontend
                    </button>

                    <button
                        type="button"
                        className={`filter-btn ${activeCategory ===
                                "full-stack"
                                ? "active"
                                : ""
                            }`}
                        onClick={() =>
                            setActiveCategory(
                                "full-stack"
                            )
                        }
                    >
                        Full-Stack
                    </button>
                </div>

                {loading && (
                    <p className="projects-message">
                        Loading projects...
                    </p>
                )}

                {error && (
                    <p className="projects-message error">
                        {error}
                    </p>
                )}

                {!loading &&
                    !error &&
                    sortedProjects.length === 0 && (
                        <p className="projects-message">
                            No projects found in this
                            category.
                        </p>
                    )}

                {!loading &&
                    !error &&
                    sortedProjects.length > 0 && (
                        <div className="projects-grid">
                            {sortedProjects.map(
                                (project) => (
                                    <article
                                        className="project-card"
                                        key={project._id}
                                    >
                                        {project.image && (
                                            <div className="project-image">
                                                <img
                                                    src={
                                                        project.image
                                                    }
                                                    alt={
                                                        project.title
                                                    }
                                                />
                                            </div>
                                        )}

                                        <div className="project-card-content">
                                            <div className="project-card-header">
                                                <h3>
                                                    {
                                                        project.title
                                                    }
                                                </h3>

                                                <span className="project-category">
                                                    {project.category ===
                                                        "full-stack"
                                                        ? "Full-Stack"
                                                        : "Frontend"}
                                                </span>
                                            </div>

                                            <p>
                                                {
                                                    project.description
                                                }
                                            </p>

                                            {project.technologies &&
                                                project
                                                    .technologies
                                                    .length >
                                                0 && (
                                                    <div className="technologies">
                                                        {project.technologies.map(
                                                            (
                                                                technology
                                                            ) => (
                                                                <span
                                                                    className="tech"
                                                                    key={
                                                                        technology
                                                                    }
                                                                >
                                                                    {
                                                                        technology
                                                                    }
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                )}

                                            <div className="project-links">
                                                {project.githubLink && (
                                                    <a
                                                        href={
                                                            project.githubLink
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        GitHub
                                                    </a>
                                                )}

                                                {project.liveLink && (
                                                    <a
                                                        href={
                                                            project.liveLink
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                )
                            )}
                        </div>
                    )}
            </div>
        </section>
    );
}

export default Projects;