import React from 'react';

const Button = ({ title }) => {
    const mybtn = {
        color: "#fff",
        backgroundColor: "#000",
        padding: "1rem",
        display:"inline-block",
        marginRight:"0.5rem"
    };
    return (
        <>
            <a style={mybtn} href="#">
                {title}
            </a>
            
        </>
    );
}

export default Button;