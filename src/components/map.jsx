import '../styles/map.css'
import pfp from '../assets/pfp.png'
import PotentialUnit from './potentialunit'
import { useState } from 'react'
import minimize from '../assets/minimize.svg'
const Map=()=>{
    const [isBoxOpen,setIsBoxStatus]=useState(true);
    const handleBoxStatus=()=>{
        setIsBoxStatus(!isBoxOpen);
    }
    return(
        <>
        <div className="map">
            
        </div>
        <div className={`the-box ${isBoxOpen ? '' : 'the-box-smol'}`}>
            <div className="the-box-helper">
                <div className={`minimize ${isBoxOpen?'':'maximize'}`}>
                    <img onClick={handleBoxStatus} src={minimize} alt="" />
                </div>
                <div className="the-box-div">
                    <div className="location-destination">
                        <div className="location-unit">
                            <div className="location-title">A</div>
                            <div>Meray Ghar</div>
                        </div>
                        <div className="location-unit">
                            <div className="destination-title">B</div>
                            <div>Teray Ghar</div>
                        </div>
                    </div>
                    <div className="potential">
                        <PotentialUnit   pfp={pfp}  />
                        <PotentialUnit   pfp={pfp}  />
                        <PotentialUnit   pfp={pfp}  />
                        <PotentialUnit   pfp={pfp}  />
                        <PotentialUnit   pfp={pfp}  />
                        <PotentialUnit   pfp={pfp}  />
                        <PotentialUnit   pfp={pfp}  />
                        <PotentialUnit   pfp={pfp}  />
                        <PotentialUnit   pfp={pfp}  />
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}
export default Map




    
  