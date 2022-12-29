import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import signin_bg from '../assets/signin_bg.png';

const LoginPage = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
  return (
    <div className=' flex justify-start items-center'>
      <div className=' hidden md:block h-screen w-5/12'>
        <img src={signin_bg} alt="futuristic computer desk with holographic bitcoin" className=' h-full'/>
      </div>
      <div className=' w-full md:w-7/12'>
        <form className=' mx-auto p-8 block'>
            <h1 className=' text-3xl md:text-5xl text-yellow-500 text-center mb-4 '>Welcome Chief! <span role='img' aria-label="Waving Hand" className=' border-none'>&#128075;</span></h1>
            <p className=' text-center text-xl mb-8'>Signin to continue</p>
            <div className=' border border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                <input type="email" className=' pl-6 pr-1 py-2 w-full' name="email" value={formData.email} onChange={(e)=> setFormData({email: e.currentTarget.value})} placeholder='Enter Your Email'/>
            </div>
            <div className=' flex justify-between items-center border border-solid border-gray-500 rounded-lg p-0 overflow-hidden mx-auto focus:outline-none w-2/3'>
                <input type={show? 'text': 'password'} 
                    name="password"
                    className=' pl-6 pr-2 py-2 w-full'
                    value={formData.password}
                    onChange={(e)=> setFormData({password: e.currentTarget.value})}
                    placeholder='Password'/>
                {show? 
                    <div className=' hover:bg-gray-200 p-3'>
                        <AiOutlineEyeInvisible onClick={()=> setShow(!show)}/>
                    </div> : 
                    <div className=' hover:bg-gray-200 p-3'>
                        <AiOutlineEye onClick={()=> setShow(!show)}/>
                    </div> }
            </div>
            <Link></Link>
        </form>
        
      </div>
    </div>
  )
}

export default LoginPage
