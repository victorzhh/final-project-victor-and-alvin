function Footer() {
    const footerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        whiteSpace: "nowrap"
    };

    return (
        <footer style={footerStyle}>
            <span>&copy; 2026 Homelessness is Bad</span>
            <span>All rights reserved</span>
            <span>Email: homelessnessisbad@gmail.com</span>
            <span>Instagram: @homelessnessisbad</span>
            <span>X: homelessnessisverybadverybad</span>
        </footer>
    );
}

export default Footer;