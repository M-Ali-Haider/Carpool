import '../styles/login.css'
import { Link } from 'react-router-dom'
const Login = () =>{
    return (
        <>
        <div className="login">
            <h1>Sign In</h1>
            <div className='hyperlink-div login-sign'>Don't have an account? <Link to="/Carpool"><span>Sign Up</span></Link></div>
            <form action="">
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Email' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password' />
                <Link to="../Carpool/homepage"><button type='submit'>Sign In</button></Link>

            </form>
        </div>  
        </>
    )
}
export default Login