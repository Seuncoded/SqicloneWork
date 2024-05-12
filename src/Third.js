
import './index.css';
import React from 'react'
import gridimage1 from "./images/grid1.jpeg"
import gridimage2 from "./images/grid2.jpeg"
import gridimage3 from "./images/grid3.jpeg"

export const Third = () => {
    return (
        <div className='thirdcontainer'>
            <div className="thirdfirstbar">
                <div className="thirdfirsttextup">
                    <h2>Start here. Change the world.</h2>
                </div>

                <div className="thirdgridlayer">
                    <div className="thirdgrid1">
                        <img style={{ height: "350px", maxWidth: "100%", color: "black", filter: "grayscale(100%)" }} src={gridimage1} alt="" />
                        <h3>National Innovative Diploma (NID)</h3>
                        <p>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</p>
                        <div className="lastpartgrid">
                            <span><a href="#">Learn More</a></span>
                        </div>
                    </div>
                    <div className="thirdgrid2">
                        <img style={{ height: "350px", width: "100%", color: "black", filter: "grayscale(100%)" }} src={gridimage2} alt="" />
                        <h3>National Innovative Diploma (NID)</h3>
                        <p>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>
                        <div className="lastpartgrid">
                            <span><a href="#">Learn More</a></span>
                        </div>

                    </div>
                    <div className="thirdgrid3">
                        <img style={{ height: "350px", width: "100%", color: "black", filter: "grayscale(100%)" }} src={gridimage3} alt="" />
                        <h3>Certificate Program</h3>
                        <p>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</p>
                        <div className="lastpartgrid">
                            <span><a href="#">Learn More</a></span>
                        </div>

                    </div>
                </div>


            </div>


        </div>
    )
}










export default Third