import React, { useState } from 'react';
import style from './index.module.css';
import SimpleImageSlider from 'react-simple-image-slider';
import overview1 from '../image/overview1.png';
import overview2 from '../image/overview2.png';
import overview3 from '../image/overview3.png';
import overview4 from '../image/overview4.png';
import overview5 from '../image/overview5.png';
import overview6 from '../image/overview6.png';
import overview7 from '../image/overview7.png';
import overview8 from '../image/overview8.png';
import overview9 from '../image/overview9.png';
import project1_1 from '../image/project1_1.png';
import project2 from '../image/project2.png';
import project3 from '../image/project3.png';

// main page: shows overview slideshow and image links to each project
const Home = () => {
  // image slider
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    { url: overview1 },
    { url: overview2 },
    { url: overview3 },
    { url: overview4 },
    { url: overview5 },
    { url: overview6 },
    { url: overview7 },
    { url: overview8 },
    { url: overview9 }
  ];

  return (
    <div className={style.background}>
      <h1 className={style.title}>Overview of Portfolio</h1>
        <SimpleImageSlider
            width={1920}
            height={677}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            onStartSlide = { (index, length) => {
                setImageNum(index); 
            }}
            autoPlayDelay = {3}
        />
                        
      {/* image number */}
      <div style = {{ fontSize: "1.5rem"}}>
          {imageNum} / 8 
      </div>
      <br />

      {/* project1, 2, 3 image links */}
      <h1 className={style.title}>Journey of Circle</h1>
      <a href="/project1" className={style.image}>
        <img src={project1_1} alt="project1" className={style.image}/>
      </a>
      <h1 className={style.title}>Got2Go</h1>
      <a href="/project2" className={style.image}>
        <img src={project2} alt="project2" className={style.image}/>
      </a>
      <h1 className={style.title}>RecipeFinder</h1>
      <a href="/project3" className={style.image}>
        <img src={project3} alt="project3" className={style.image}/>
      </a>
    </div>
  );
};

export default Home;