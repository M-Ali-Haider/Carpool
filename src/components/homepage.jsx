import '../styles/homepage.css'
import { useState } from 'react'
const Homepage = () =>{
    const [selectedOption,setSelectedOption] =useState('');
    return(
        <>
            <div className="homepage">
                <div className="homepage-helper">
                    <div className="homepage-shade"></div>
                    <div className="homepage-profile">
                        Shayan Hassan Abbasi
                    </div>
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
                            <button className='homepage-btn' type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage