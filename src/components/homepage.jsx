import '../styles/homepage.css'
import notification from '../assets/noti.svg'
import Sidebar from './sidebar';
import Notibar from './notibar';
import Message from './message';
import { useState } from 'react'
import { Link } from 'react-router-dom';
const Homepage = () =>{
    const [selectedOption,setSelectedOption] =useState('');
    const [isSidebarOpen,setSidebarStatus]=useState(false);
    const [isNotibarOpen,setNotibarStatus]=useState(false);
    const [isMsgBoxOpen,setMsgBoxStatus]=useState(false);
    const handleSidebarStatus=()=>{
        setSidebarStatus(!isSidebarOpen);
        setNotibarStatus(false);
    }
    const handleNotibarStatus=()=>{
        setNotibarStatus(!isNotibarOpen);
        setSidebarStatus(false);
    }
    const openMsgBox=()=>{
        setMsgBoxStatus(true);
    }
    const handleMsgBox=()=>{
        setMsgBoxStatus(false);
    }
    return(
        <>  
            <div className="homepage-profile" onClick={handleSidebarStatus}>
                Shayan Hassan Abbasi
            </div>
            <div className="notification-icon" onClick={handleNotibarStatus}>
                <img src={notification} alt="" />
            </div>
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <Notibar isNotibarOpen={isNotibarOpen} openMsgBox={openMsgBox}/>
            <Message isMsgBoxOpen={isMsgBoxOpen} handleMsgBox={handleMsgBox}/>
            <div className="homepage">
                <div className="homepage-helper">
                    <div className="homepage-shade"></div>
                    <div className="homepage-rest">
                        <form action="">
                            <input type="text" placeholder='Pickup Location' />
                            <input type="text" placeholder='Destination' />
                            <input type="text" placeholder='Date' />
                            <input className='no-border' type="text" placeholder='Leaving Time'/>
                            <select 
                                name="" 
                                id=""
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}>
                                    <option value="driver">Driver</option>
                                    <option value="passenger">Passenger</option>
                            </select>
                            {selectedOption === 'passenger' && (
                                <input type="number" placeholder='No. of Passengers' />
                                )
                            }
                            <Link to="/Carpool/map">
                                <button className='homepage-btn' type='submit'>Search</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage