import '../styles/signup.css'
import carpool from '../assets/carpool.webp'
import { Link } from 'react-router-dom'
const SignUp = () =>{
    return(
        <>
        <div className="signup">
            <form action="">
                <h3>Get Started.</h3>
                <div className="inputs">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="City" />
                </div>
                <Link to="/Carpool/homepage">
                    <button className='signup-btn'>Sign Up</button>
                </Link>
                <div className='hyperlink-div'>
                    Already have an account ? <Link to="/Carpool/login"><span>Log In</span></Link>
                </div>
            </form>
            <img src={carpool} alt="" />
        </div>
        </>
    )
}
export default SignUp