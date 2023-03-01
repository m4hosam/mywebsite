import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import logo from "../assets/m4h.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import "./sphereStyles.css";

export default function TextShpere() {
    const smallScreen = useMediaQuery("(max-width: 900px)");
    const redius = !smallScreen ? 250 : 180
    // Animation settings for Text Cloud
    useEffect(() => {
        function createSphere() {
            const container = ".tagcloudContainer";
            const texts = [
                "HTML",
                "CSS",
                "SQL",
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
            ];

            const options = {
                radius: redius,
                maxSpeed: "fast",
                initSpeed: "fast",
                direction: 135,
                keep: true,
            };

            TagCloud(container, texts, options);
        }
        for (let item of document.querySelectorAll('.tagcloud')) {
            item.remove();
        }
        createSphere();
    }, [redius]);


    return (
        <>
            <div className="text-shpere">
                {/* span tag className must be "tagcloud"  */}
                <img className="logo" src={logo} alt="logo" />
                <span className="tagcloudContainer"></span>
            </div>
        </>
    );
};



