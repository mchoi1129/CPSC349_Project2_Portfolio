import React, { useState } from 'react';
import style from './project.module.css'
import SimpleImageSlider from 'react-simple-image-slider';
import project2 from '../image/project2.png'
import project2_2 from '../image/project2_2.png'
import project2_3 from '../image/project2_3.png'


// project2 display page
const Project = () => {
    // image slider
    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
        { url: project2 },
        { url: project2_2 },
        { url: project2_3 }
    ];
    
    return (
        <div className={style.container}>
            <h1 className={style.title}>Android Application Got2Go</h1>
            <div className={style.imageContainer}>
                <SimpleImageSlider
                    width={672}
                    height={445}
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
                {imageNum} / 3 
            </div>
            <br />
            
            {/* project description */}
            <div className={style.description}>
                <p>
                    Got2Go is an Android application that helps users to find public restrooms near them. The application uses the Google Maps API to display the location of the restrooms. The application allows users to add new restrooms to the database. The application was developed using Android Studio and Kotlin. The application was developed as a part of the course at California State University Fullerton.
                </p>
            </div>
        </div>
    );
};

export default Project;