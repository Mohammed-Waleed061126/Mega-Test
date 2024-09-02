// import React from 'react'
import { useState, useEffect } from 'react';

export default function AnimatedText() {
      const texts = ["Hello Marwan", "Your passing score 's 75%", "Are You Ready"]
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [texts.length]);
    return (
        <>
                   {texts.map((text, index) => {
          <p key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>{text}</p>
        })}
        </>
   

  )
}