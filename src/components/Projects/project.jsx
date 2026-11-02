import React from 'react'
import Card from "../Card/card"
import "./project.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import chatbot2 from "../../assets/chatbot2.jpg"

function project() {
  return (
    <div id="projects">
        <h1 id="para">1 YEARS EXPERIENCED IN PROJERCTS</h1>
        <div className="slider">
             <Card title="VIRTUAL ASSISTANT" image={va}/>
             <Card title="AI POWERED FISTNESS WEBSITE" image={fw}/>
             <Card title="AI CHAT BOT" image={chatbot2}/>
             <Card title="AI TEXT TO IMAGE"/>
             <Card title="AI BACKGROUND REMOVER"/>
        </div>
    </div>
  )
}

export default project
