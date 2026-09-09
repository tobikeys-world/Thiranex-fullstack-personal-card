import { useState } from "react";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/messages`,
                formData
            );

            setStatus(response.data.message);

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setStatus(
                error.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="section-container">
                <h2 className="section-title">Let's Connect</h2>

                <p className="section-subtitle">
                    Have a project, opportunity, or question? Send me a message.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        className="btn primary-btn submit-btn"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status && (
                        <p style={{ marginTop: "15px" }}>
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;