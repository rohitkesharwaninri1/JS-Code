// 1. Building a Traffic Light with React


// You are tasked with building a simple traffic light component using React. The traffic light  should consist of three lights: red, yellow, and green. The lights should switch from green  to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit  for the following durations:
// Green light: 3000ms 
// Yellow light: 500ms 
// Red light: 4000ms 
// Your task is to implement a React component that represents the traffic light and switches  between these colors based on the specified intervals. Additionally, you should style the  traffic light to make it visually appealing.

import React, { useState, useEffect } from 'react';

export default function App() {
const [active, setActive] = useState(0);
const lightTime = {
    green: 3000, 
    yellow: 500, 
    red: 4000
}
  useEffect(() => {
          let newCount = active;
          const timeout = setInterval(()=>{
          if(active == 2){
              newCount = 0
          }
          else{
                  newCount = active + 1
          }
          setActive(newCount)
              },  Object.values(lightTime)[active])
      return ()=>{
              clearInterval(timeout)
      }
  }, [active]);

  return (
    <div className="App">
      <div className={`light ${active === 0 && 'green'}`}></div>
      <div className={`light ${active === 1 && 'yellow'}`}></div>
      <div className={`light ${active === 2 && 'red'}`}></div>
    </div>
  );
}

// Optimized
import React, { useState, useEffect } from 'react';

export default function App() {
const [active, setActive] = useState("green");
const lightTime = {
    green: {
        time: 3000,
        next: "yellow",
    },
    yellow: {
        time: 500,
        next: "red",
    },
    red: {
        time: 4000,
        next: "green",
    }
}
  useEffect(() => {
          const timeout = setInterval(()=>{
          setActive(lightTime[active].next)
              },  lightTime[active].time)
      return ()=>{
              clearInterval(timeout)
      }
  }, [active]);
  return (
    <div className="App">
      <div className={`light ${active === "green" && 'green'}`}></div>
      <div className={`light ${active === "yellow" && 'yellow'}`}></div>
      <div className={`light ${active === "red" && 'red'}`}></div>
    </div>
  );
}




// .App {
//     color: #72a24d;
//     display: flex;
//   }
//   .light {
//     width: 50px;
//     height: 50px;
//     border-radius: 50px;
//     background-color: rgb(18, 26, 18);
//     margin-right: 10px;
//   }
  
//   .green {
//     background-color: rgb(13, 255, 0);
//   }
  
//   .red {
//     background-color: rgb(255, 34, 34);
//   }
  
//   .yellow {
//     background-color: rgb(238, 255, 0);
//   }
  







