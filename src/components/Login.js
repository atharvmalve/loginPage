import React from 'react';
import { Formik, Form, Field, ErrorMessage,  } from 'formik';
import {Link, useNavigate } from 'react-router-dom';
import ForgotPassBut from './ForgotPassBut';
import * as Yup from 'yup';
import axios from 'axios';
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import bck from "../assets/bck.jpg"


const Login = () => {
  const navigate=useNavigate();
  return (
    // <div className='bg-black min-[320px]:h-full sm:w-screen sm:h-screen lg:h-full lg:w-screen'>
    <div className='container-lg bg-black w-full'>

      {/* <h2>Login</h2> */}
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:5000/api/login', values)
            .then(response => {
              alert('Login successful!');
              setSubmitting(false);
            })
            .catch(error => {
              alert('Login failed');
              setSubmitting(false);
            });
        }}
      >
        {/* <div className='flex max-w-screen min-[320px]:flex-wrap-reverse min-[320px]:place-content-center md:flex-wrap-reverse lg:flex-nowrap '> */}
        <div className='container flex max-w-screen min-[320px]:flex-wrap-reverse min-[320px]:place-content-center md:flex-wrap-reverse lg:flex-nowrap '>

        <div className='flex-row min-[320px]:px-12  sm:px-28 mt-10 mb-5'>
          <h1 className='text-white text-2xl font-bold'>Welcome Back!</h1>
          <h2 className='text-white'>Your flights await. Log in and take off.</h2>
          <button className=' flex min-[320px]:px-12 py-2  jusitfy-center rounded-lg my-3 min-[320px]:h-11 md:w-48 lg:w-72 border-solid border-2 border-zinc-800  hover:bg-zinc-900 hover:text-white gap-2'>
              <div className='flex justify-center gap-2'>
                <img src={google} className='w-1/12 h-1/12 py-1'/>
                <h1 className='gap-y-30 text-zinc-400 text-sm'>Login with Google</h1>
              </div>
            </button>
            <button className=' flex min-[320px]:px-12 py-2  jusitfy-center rounded-lg my-3 min-[320px]:h-11 md:w-48 lg:w-72 border-solid border-2 border-zinc-800  hover:bg-zinc-900 hover:text-white gap-2'>
              <div className='flex justify-center gap-2'>
                <img src={apple} className='w-1/12 h-1/12 py-1'/>
                <h1 className='gap-y-30 text-zinc-400 text-sm'>Login with Apple</h1>
              </div>
            </button>
        <Form>
          <div className='flex flex-col gap-y-2  text-zinc-400'>
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" placeholder="xyz" className=' min-[320px]:h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg  p-3 ' />
          <ErrorMessage name="username" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" placeholder="Atleast 8 characters" className='  min-[320px]:h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3' />
          <ErrorMessage name="password" />

          {/* <button type="submit">Login</button> */}
          <div className='flex justify-between'>
            <div className='flex gap-1'>
                <input type='checkbox' className='px-2 py-2 bg-green-300'></input>
                <h1 className='text-zinc-500'>Remember me.</h1>
            </div>
            <div>
                  {/* <button className='text-white text-sm '>Forgot Password?</button> */}
                  <ForgotPassBut navigate={navigate}/>
            </div>
          </div>

          <button type="submit" className='bg-white text-black rounded-md h-10 gap-34 font-bold hover:bg-zinc-200 boder-solid border-2 hover:border-zinc-700  '>Login</button>
          </div>
        </Form>
        </div>
        <div className='flex place-content-center w-7/12 p-5npm'>
            <img src={bck} className='lg:w-full h-5/12'/>
          </div>
      </div>
      </Formik>
    </div>
  );
};

export default Login;
