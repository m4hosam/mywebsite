import React, { useEffect } from "react";
import logo from "../assets/m4h.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import "./style.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
    const smallScreen = useMediaQuery("(max-width: 900px)");
    const redius = !smallScreen ? 250 : 180
    // Animation settings for Text Cloud
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript",
                "React",
                "MongoDB",
                "Express",
                "NodeJS",
                "MVC.NET",
                "Python",
                "Kotlin",
                "GIT",
                "GITHUB",
                "SQL",
            ];

            const options = {
                radius: redius,
                maxSpeed: "fast",
                initSpeed: "fast",
                direction: 135,
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <>
            <div className="text-shpere">
                {/* span tag className must be "tagcloud"  */}
                <img className="logo" src={logo} alt="logo" />
                <span className="tagcloud"></span>
            </div>
        </>
    );
};



export default TextShpere;
