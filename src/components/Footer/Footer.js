import React from 'react';

const Footer = () => {
    const footerStyle = {
        marginTop: "20px",
        textAlign: "center",
        fontStyle: "italic",
        fontSize: "20px"
    }
    return (
       <div style={footerStyle}>
            Blogpost Made by Aregbesola OJ &copy; 2019.
        </div>
    )
}
export default Footer;