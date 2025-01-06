import React, { useState } from 'react';
import './Circle.css';

export default function Circle() {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });
  const [position2, setPosition2] = useState({
    left: 0,
    top: 0,
  });

  const [clickCount, setClickCount] = useState({
    first: false,
    second: false,
  });
  const [radius, setRadius] = useState({
    first:0,
    second:0
  });

  const getPosition = (e) => {
    let x = Math.floor(Math.random() * 200 + 20);

    console.log('clientX', e.screenX);
    console.log('clientX', e.screenY);
    console.log(e.target);
    let center = e.target.getBoundingClientRect()

    const offsetofX = e.clientX-center.left - 30;
    const offsetofY = e.clientY - center.top - 30

    if(clickCount.first && clickCount.second){
      setClickCount(prev=>({...prev, first:false, second:false}))
      return;
    }

    if(!clickCount.first){
      setPosition(prev=>({...prev, left:offsetofX, top: offsetofY}));
      setRadius(prev=>({...prev, first:x}))
      setClickCount(prev=>({...prev, first:true}))
    }

    if(clickCount.first){
      setPosition2(prev=>({...prev, left:offsetofX, top: offsetofY}));
      setRadius(prev=>({...prev, second:x}))
      setClickCount(prev=>({...prev, second:true}))
    }

  };

  return (
    <div onClick={getPosition} style={{width:'100%', height:'100vh' }}>
      <div
      onClick={getPosition}
        style={{
          width: `${radius.first}px`,
          height: `${radius.first}px`,
          left: `${position.left}px`,
          top: `${position.top}px`,
          display:`${clickCount.first ? 'block' : 'none'}`
        }}
        className="circle"
      ></div>

      <div
        style={{
          width: `${radius.second}px`,
          height: `${radius.second}px`,
          left: `${position2.left}px`,
          top: `${position2.top}px`,
          display:`${clickCount.second ? 'block' : 'none'}`,
          zIndex:2
        }}
        className="circle"
      ></div>
    </div>
  );
}
