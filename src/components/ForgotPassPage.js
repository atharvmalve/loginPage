import React from 'react';
import { useState } from 'react';
import bck from "../assets/bck.jpg"


const ForgotPassPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
  };

  return (
    // <div className='text-white px-100 py-100 flex jusitfy-center'>
    <div className='container-lg  w-full min[320px]:h-screen'>

    <div className='flex max-w-screen min-[320px]:flex-wrap-reverse min-[320px]:place-content-center md:flex-wrap-reverse lg:flex-nowrap '>

        <div className='flex-row min-[320px]:px-12  sm:px-28 md:mt-32 min[320px]:mt-10 mb-5'>
            <h1 className='text-white text-2xl font-bold'>Forgot Password?</h1>
            <h2 className='text-white '>Check your email for reset link.</h2>
      {/* <h2>Forgot Password</h2> */}
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-y-2  text-zinc-400'>
            <label htmlFor="username">Your Email</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className='  min-[320px]:h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3 '
                />
                <button type="submit" className='bg-white text-black rounded-md h-10 gap-34 font-bold hover:bg-zinc-200 boder-solid border-2 hover:border-zinc-700  '>Send Reset Email</button>
                </div>
            </form>
      </div>
      {/* </div> */}
      <div className='flex place-content-center w-7/12  p-5npm'>
            <img src={bck} className='lg:w-full h-5/12'/>
      </div>
      </div>
    </div>
  );
};

export default ForgotPassPage;
