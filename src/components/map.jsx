import '../styles/map.css'
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
                <div onClick={handleBoxStatus} className={`minimize ${isBoxOpen?'':'maximize'}`}>
                    <img src={minimize} alt="" />
                </div>
                <div className="the-box-div">
                    <div className="box-unit"></div>
                    <div className="box-unit"></div>
                    <div className="box-unit"></div>
                    <div className="box-unit"></div>
                    <div className="box-unit"></div>
                    <div className="box-unit"></div>
                    <div className="box-unit"></div>
                    <div className="box-unit"></div>
                    <div className="box-unit"></div>
                    <div className="box-unit"></div>
                </div>
            </div>
        </div> 
        </>
    )
}
export default Map



