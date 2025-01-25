import React, { useState, useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FadeIn from './fade';

import p from "../css/projects.module.css";
import Card from "./card"
import snake from "../img/snake.bmp";
import planner from "../img/planner.bmp";
import games from "../img/games.jpg";

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        p.gallery_item_1,
        p.gallery_item_2,
        p.gallery_item_3,
    ];

    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;

    const startTouch = useRef(0); // To track the starting point of a touch

    const handlePrevious = () => {
        setCurrentIndex(prevIndex);
    };

    const handleNext = () => {
        setCurrentIndex(nextIndex);
    };

    // Handle touch start event to register the start position
    const handleTouchStart = (e) => {
        startTouch.current = e.touches[0].clientX;
    };

    // Handle touch move to detect swipe direction
    const handleTouchMove = (e) => {
        if (startTouch.current === 0) return;

        const moveTouch = e.touches[0].clientX;
        // Swiped left, move to next item
        if (startTouch.current - moveTouch > 50) {
            setCurrentIndex(prevIndex);
            startTouch.current = 0;
        // Swiped right, move to previous item
        } else if (moveTouch - startTouch.current > 50) {
            setCurrentIndex(nextIndex);
            startTouch.current = 0;
        }
    };

    // Handle touch end to finalize the swipe
    const handleTouchEnd = () => {
        startTouch.current = 0; // Reset after touch ends
    };

    return (
        <section id="projects" className={p.projects}>
            <FadeIn>
                <h1 className={p.header}>
                    Projects
                </h1>

                <div 
                    className={p.gallery} 
                    onTouchStart={handleTouchStart} 
                    onTouchMove={handleTouchMove} 
                    onTouchEnd={handleTouchEnd}
                >
                    <ul className={p.gallery_container}>
                        <Card 
                            name={"Snake A.I."} 
                            img={snake} 
                            itemNo={items[nextIndex]} 
                            link={"https://github.com/marksalamander/Snake-AI"}
                            desc={["Python", "PyGame"]}
                        />
                        <Card 
                            name={"Android Planner App"} 
                            img={planner} 
                            itemNo={items[currentIndex]} 
                            link={"https://github.com/marksalamander/Planner_App"}
                            desc={["Kotlin", "Jetpack Compose", "Android Studio"]}
                        />
                        <Card 
                            name={"Multiplayer Games Website"} 
                            img={games} 
                            itemNo={items[prevIndex]} 
                            link="https://github.com/marksalamander/COSC484_Group_Project"
                            desc={["React", "Node.js", "Express.js", "MongoDB"]}
                        />
                    </ul>

                    <div className={p.arrows_container}>
                        <button className={p.arrows} onClick={handlePrevious}>
                            <ArrowBackIcon style={{fontSize:"50px"}} />
                        </button>
                        
                        <button className={p.arrows} onClick={handleNext}>
                            <ArrowForwardIcon style={{fontSize:"50px"}} />
                        </button>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}