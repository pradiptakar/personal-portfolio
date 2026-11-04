import React from 'react'
import {useState, useEffect} from 'react'
import "./Home.css"
import women from "../../assets/women.jpeg"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const WORDS = ["WEB DEVELOPER", "SOFTWARE DEVELOPER"];

function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 50) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        const nextText = currentWord.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === currentWord) {
          setDeleting(true);
        }
      } else {
        const nextText = currentWord.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed]);

  return text;
}


function Home(){

  useGSAP(()=>{
    let tl1 = gsap.timeline()
    tl1.from(".line1",{
      y:80,
      duration:1,
      opacity:0
  })
  tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
  })
  tl1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
  })

const typedText = useTypingEffect(WORDS, 150 , 100);

 return (
    <div id="home">
    <div className="lefthome">
      <div className="homedetails">
        <div className="line1">I'M</div>
        <div className="line2">PRADIPTA KAR</div>
        <div className="line3">
           {typedText}
           <span className="typing-cursor">|</span>
        </div>
        <button>HIRE ME</button>
      </div>
    </div>

    <div className="righthome">
      <img src={women} alt="" />
    </div>
    </div>
  )
}

export default Home
