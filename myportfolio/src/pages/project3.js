import React, { useState } from 'react';
import style from './project.module.css'
import SimpleImageSlider from 'react-simple-image-slider';
import project3 from '../image/project3.png'
import project3_2 from '../image/project3_2.png'
import project3_3 from '../image/project3_3.png'
import project3_4 from '../image/project3_4.png'
import project3_5 from '../image/project3_5.png'
import project3_6 from '../image/project3_6.png'
import project3_7 from '../image/project3_7.png'
import project3_8 from '../image/project3_8.png'

// project3 display page
const Project = () => {
    // image slider
    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
        { url: project3 },
        { url: project3_2 },
        { url: project3_3 },
        { url: project3_4 },
        { url: project3_5 },
        { url: project3_6 },
        { url: project3_7 },
        { url: project3_8 }
    ];
    
    return (
        <div className={style.container}>
            <h1 className={style.title}>Recipe Finder Website</h1>
            <div className={style.imageContainer}>
                <SimpleImageSlider
                    width={672}
                    height={300}
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
                {imageNum} / 8 
            </div>
            <br />
            
            {/* project description */}
            <div className={style.description}>
                <p>
                    Recipe Finder is a website that allows users to search for recipes based on the ingredients they have. The website uses the Spoonacular API to search for recipes. The website also allows users to create an account and save their favorite recipes. The website was developed using React.js, Node.js, and FirebaseDB. The website was developed as a part of the Open Source development course at California State University Fullerton.
                </p>
            </div>
        </div>
    );
};

export default Project;