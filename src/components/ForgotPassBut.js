import React from 'react'

function ForgotPassBut( {navigate}) {
    const handler=(event)=>{
        // console.log("forgot password foooooooookkkkkkkkkkkk");
        // event.preventDefault();
        navigate('/forgot-password');
    }
  return (
    // <button onClick={handler}>Forgot Password?</button>
    <button onClick={handler} className='text-white text-sm '>Forgot Password?</button>
  )
}

export default ForgotPassBut;