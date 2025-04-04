import React, { useState, useEffect } from 'react';
import './App.css';

const phrases = [
  " Web Designer",
  " DevOps Enthusiast",
  " Full Stack Developer",
  " SecOps Enthusiast"
];

const Typewriter: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === phrases.length) return;

    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === phrases[index].length ? 1000 : 150, parseInt(Math.random() * 50)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <h1 className="text-3xl font-bold relative">
      I am a  
      <span className="text-blue-600 relative">
        {`${phrases[index].substring(0, subIndex)}`}
        <span className={`border-r-2 border-black ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
      </span>
    </h1>
  );
};

export default Typewriter;