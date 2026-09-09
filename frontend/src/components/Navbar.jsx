function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#home" className="logo">
                    OE<span>.</span>
                </a>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;