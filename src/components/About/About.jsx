import React from 'react'
import "./About.css"
import Card from '../Card/card'
import mern from "../../assets/mern logo 2.png"
import cpp from "../../assets/cpp 2.jpg"
import dsa from "../../assets/dsa 2.png"


function About() {
  return (
    <div id="about">
     <div className="leftabout">
      <div className="circle-line">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div>

    <div className="aboutdetails">
      <div className="personalinfo">
        <h1>Personal Info</h1>
        <ul>
          <li>
            <span>Name</span> : PRADIPTA KAR
          </li>
          <li>
            <span>AGE</span> : 22 YEARS
          </li>
          <li>
            <span>GENDER</span> : FEMALE
          </li>
           <li>
            <span>LANGUAGE KNOWN</span> : HINDI,ENGLISH
          </li>
        </ul>
      </div>
      <div className="education">
        <h1>EDUCATION</h1>
        <ul>
          <li>
            <span>DEGREE</span> : BTECH
          </li>
          <li>
            <span>BRANCH</span> : COMPUTER SCIENCE AND ENGINEERING
          </li>
          <li>
            <span>CGPA</span> : 7.98
          </li>
        </ul>
      </div>
      <div className="skills">
        <h1>SKILLS</h1>
        <ul>
          <li>
            MERN STACK WED DEVELOPER
          </li>
          <li>
            C++
          </li>
          <li>
            DSA
          </li>
        </ul>
      </div>
    </div>

     </div>

     <div className="rightabout">
      <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
      <Card title="C++" image={cpp}/>
      <Card title="DSA" image={dsa}/>
     </div>
    </div>
  )
}

export default About
