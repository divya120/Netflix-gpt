import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)
  const handleToggleForm = () =>{
    setIsSignedIn(!isSignedIn)
  }
  return (
    <div className='text-white'>
      <Header/>
     <div>
     <img className='absolute' src = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
     </div>
     <div>

     
     <form className='bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 rounded-md bg-opacity-90' >
     <h1 className='py-4 font-bold text-3xl'>{isSignedIn?'Sign In': 'Sign Up'}</h1>
     {!isSignedIn &&  <input type="text" placeholder='Full Name' className='p-2 my-4 w-full rounded-lg bg-slate-700 opacity-1 h-[50px]'/>}
        <input type="text" placeholder='email' className='p-2 my-4 w-full rounded-lg bg-slate-700 h-[50px]'/>
        <input type="password" placeholder='password' className='p-2 my-4 w-full rounded-lg bg-slate-700 opacity-1 h-[50px]'/>
        <button type='submit' className='p-4 my-10 bg-red-700 opacity-100 w-full rounded-lg'> {isSignedIn?'Sign In': 'Sign Up'}</button>
       <div>
       <span className='py-6 text-gray-500 m-2'>{isSignedIn?'New to Netflix?': 'Already Registered?'}</span>
        <span onClick={handleToggleForm} className='cursor-pointer'>{isSignedIn?'Sign Up': 'Sign In Now'}</span>
       </div>
      </form>
     </div>
    </div>
  )
}

export default Login