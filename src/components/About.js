import React from 'react';
import {Link} from 'react-router-dom'

function About() {
    return (
            <div className="about_c">
                 <Link to={"/"}>
                <button className="about_back"></button>
                </Link>
                <div className="about_title">About the app</div>
                <div className="about_description">
                    This app was made using React 16.8.6, it's a web 
                    app that allows you to chose a gradient graphically
                    and then copy the CSS snippet to the clipboard.
                </div>  
                <div className="about_description">
                    The colors you select are stored in your browser, therefore
                    if you refresh the page the colors you selected will be saved!
                </div>
                <div className="about_description">
                    To hide to color picker click where the gradient is being shown
                </div>
            </div>
    );
}

export default About;
