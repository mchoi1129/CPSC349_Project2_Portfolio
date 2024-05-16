import React from 'react';
import style from './about.module.css';

// self-introduction
const About = () => {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <h1 className={style.h1}>Myoungji Choi</h1>
        <h2 className={style.h2}>Software Developer</h2>

        {/* link to my linkedin */}
        <div className={style.container2}>
        <a href="https://www.linkedin.com/in/myoungji-choi-9a04a424b">
          <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
        </a>
        </div>

        <p className={style.info}>A hardworking and passionate job seeker with strong organizational skills eager to secure an entry-level Software engineering position. Offering skills in analysis and coding. Ready to help the team achieve company goals.</p>

        <h3 className={style.h3}>Education</h3>
        <p className={style.info}>
          Computer Science, BS
          <br />
          California State University Fullerton, Fullerton, CA
          <br />
          09.2020 - 05.2024
        </p>

        <h3 className={style.h3}>Skills</h3>
        <p className={style.info}>
          Programming Languages: C++, C#, Python, Java, JavaScript, HTML, CSS, Swift, SQL
          <br />
          Technology and Frameworks: Unix, Git, React Native, MySQL, FirebaseDB, Bash, Google Cloud Platform
        </p>

        <h3 className={style.h3}>Softwares</h3>
        <p className={style.info}>Visual Studio, Visual Studio Code, Android Studio, Unity</p>
      </div>
    </div>
  );
};

export default About;