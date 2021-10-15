import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <div>Create A New Account</div>
            <form onSubmit='' action="">
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" placeholder='Your Password' id="" />
                <br />
                <input type="password" name="" placeholder='Re-enter Password' id="" />
                <br />
                <input type="submit" value="Submit" />
                
            </form>
            <br />
            <button className='btn-regular'>Google Signin</button>
            <p>Already Have an Account?<Link to='/login'>login</Link> </p></div>
        </div>
    );
};

export default Register;<div>Create A New Account</div>