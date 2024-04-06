import React, {useState} from 'react';
import './SignUp.css';
const SignUp = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>
                    {action}
                </div>
            </div>
            <div className='inputs'>
            {action==='Login'?<div></div>:<div className='input'>
                    <input type='text' placeholder='Name'></input>
                </div>}
                
                <div className='input'>
                    <input type='email' placeholder='Email'></input>
                </div>

                <div className='input'>
                    <input type='password' placeholder='Password'></input>
                </div>

            </div>
            <div className='submit-container'>
                <div className={action==='Login'? 'submit gray':'submit'} onClick={()=>{
                    setAction('Sign Up')
                }}>Sign Up</div>
                <div className={action==='Sign Up'? 'submit gray':'submit'} onClick={()=>{
                    setAction('Login')
                }}>Login</div>
            </div>
        </div>
    )
}

export default SignUp;