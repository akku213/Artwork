// import React from 'react';
// import "./HomePage.css";
// const HomePage = () => {
//   return (
//     <>
//     <div className='main-1'>
//         <div>
//         <h1>Welcome</h1>
//         </div>
//         <div className='q-1'>
//             YOU'RE WORTHY JUST AS YOU ARE🤍🤍
//         </div> 
//         {/* <div style={{ color: 'white', fontSize: '24px' }}>&#x1F495;</div> */}

//         <div className='card'>
//             <div className="c-1">
//                 Card
//             </div>
//             <div className="c-2">
//                 Card
//             </div>
//         </div> 
//     </div>
//     </>
//   )
// }

// export default HomePage;


import React, { useState } from 'react';
import "./HomePage.css";
import profPic from './Assets/profPic.png'
import goku from './Assets/goku.jpg';
import a1 from './Assets/a1.jpg';
import a2 from './Assets/a2.jpg';


const HomePage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  
  return (
    <>
      <div className='main-1'>
        <div>
          <h1>Welcome</h1>
        </div>
        <div className='q-1'>
          YOU'RE WORTHY JUST AS YOU ARE🤍🤍
        </div>
        <div className='card'>
          <div className="c-1">
            <img src={goku} alt="Image 2" />
            <img src={profPic} alt="Image 1" />
          </div>
          <div className="c-2">
            <img src={a1} alt="Image 1" />
            <img src={a2} alt="Image 2" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;
