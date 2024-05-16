import React, { useState } from 'react';
import style from './project.module.css'
import SimpleImageSlider from 'react-simple-image-slider';
import project1 from '../image/project1.png';
import project1_1 from '../image/project1_1.png';
import project1_2 from '../image/project1_2.png';
import project1_3 from '../image/project1_3.png';
import project1_4 from '../image/project1_4.png';
import project1_5 from '../image/project1_5.png';


// project1 display page: screenshots of the project and small description
const Project = () => {
    // image slider
    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
        { url: project1 },
        { url: project1_1 },
        { url: project1_2 },
        { url: project1_3 },
        { url: project1_4 },
        { url: project1_5 }
    ];
    
    return (
        <div className={style.container}>
            <h1 className={style.title}>Journey of Circle</h1>
            <div className={style.imageContainer}>
                <SimpleImageSlider
                    width={672}
                    height={378}
                    images={sliderImages}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    onStartSlide = { (index, length) => {
                        setImageNum(index); 
                    }}
                    autoPlayDelay = {3}
                />
            </div>
                        
            {/* image number */}
            <div style = {{ fontSize: "1.5rem"}}>
                {imageNum} / 5 
            </div>
            <br />
            
            {/* project description */}
            <div className={style.description}>
                <p>
                    Journey of Circle is a 2D platformer game where the player controls a circle to reach the end of the level. The player can jump and crouch to avoid obstacles and enemies. The game has 3 levels with increasing difficulty. The game was developed using Unity and C#. The game was developed as a part of the Game Development course at California State University Fullerton.
                </p>
            </div>
        </div>
    );
};

export default Project;