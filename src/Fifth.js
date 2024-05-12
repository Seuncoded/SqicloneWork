import  './index.css'
import React from 'react'
import google from './images/google.png'
import intersw from './images/Interswitch.png'
import andela from './images/Andela.png'
import Microsoft from './images/Microsoft.png'
import paystack from './images/Paystack.png'
import brewery from './images/brewery.png'
import Wema from './images/Wema.png'
import clan from './images/clan.png'
import edozzier from './images/edozzier.png'
import moniemie from './images/moneymie.png'
import NDA from './images/NDA.png'
import Aella from './images/Aella.png'

export const Fifth = () => {
  return (
    <div className='fifcontainer'>
      <div className="fifbox">

        <div className="fittext">
          <h2>Our alumni work at world-class companies around the world including</h2>
        </div>

        <div className="fifgridlayer">
          <div className="smallbox">
          <img src={google} alt="" />
          </div>
          <div className="smallbox">
          <img src={intersw} alt="" />
          </div>
          <div className="smallbox">
          <img src={andela} alt="" />
          </div>
          <div className="smallbox">
          <img src={Microsoft} alt="" />
          </div>
          <div className="smallbox">
          <img src={paystack} alt="" />
          </div>
          <div className="smallbox">
          <img src={brewery} alt="" />
          </div>
          <div className="smallbox">
          <img src={Wema} alt="" />
          </div>
          <div className="smallbox">
          <img src={clan} alt="" />
          </div>
          <div className="smallbox">
          <img src={edozzier} alt="" />
          </div>
          <div className="smallbox">
          <img src={moniemie} alt="" />
          </div>
          <div className="smallbox">
          <img src={NDA} alt="" />
          </div>
          <div className="smallbox">
          <img src={Aella} alt="" />
          </div>


        </div>

      </div>
    </div>
  )
}



export default Fifth