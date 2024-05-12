import './index.css';
import React from 'react'
import frame from "../src/images/bg-header.png"

export const Second = () => {
  return (
    <div className='containersecond'>
        
  <div className="firstBar">

    <div className="textpart">
    <h1>
        Study to become a global talent
    </h1>
    <p>
        Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.
    </p>

    <span>
        <button>Start Now</button>
    </span>
    
    </div>


    <div className="imageright">
    <img src={frame} alt="" />
    </div>

  </div>


    </div>
  )
}


















export default Second