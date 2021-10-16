import React from 'react';
import { Link  , useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    // const {user , signinUsingGoogle} =useFirebase();
    const {signinUsingGoogle} = useAuth()
    const location = useLocation()
    console.log(location.state?.from)
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form action="" onSubmit=''>
                    <input type="email" id='' placeholder='Enter your Email Address'/>
                    <br />
                    <input type="password" id='' placeholder='Enter your Password'/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <p>New to Amazone?<Link to='/register'>Create Account</Link></p>
                <div>---------------------or------------------------</div>
                <button onClick={signinUsingGoogle} 
                className='btn-regular'
                >Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;