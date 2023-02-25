import React from 'react'
import './Contact.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { AnimatePresence, motion } from 'framer-motion';

import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {

  const [state, handleSubmit] = useForm("xpzbbjjw");
  if (state.succeeded) {
    return <div className='suceed'>
      <div>
        <p>Your message was submitted successfully.</p>
        <Link to='/'><button>Go Back</button></Link>
      </div>
    </div>;
  }

  return (
    <form onSubmit={handleSubmit} >

      <motion.div
        className='framer'
        initial={{ position: 'absolute', top: '0%' }}
        animate={{ position: 'absolute', top: '-110%' }}
        exit={{ position: 'absolute', top: '0%' }}
        transition={{ duration: .5 }}>
        <div className='transition'>
        </div>
      </motion.div>

      <div className='contactBody'>

        <div className='wholeContactForm'>

          <div className='bgContact'>
            <p>Contact Me</p>
          </div>


          <div className='userName'>
            <label htmlFor="userNameinp"></label>
            <input id='userNameinp' required autoComplete='off' type="text" name="userNameinp" placeholder='Your Name' />
          </div>

          <div className='userEmail'>
            <label htmlFor="userEmailinp"></label>
            <input id='userEmailinp' required autoComplete='off' type="email" name="userEmailinp" placeholder='Your Email' />
          </div>

          <div className='userText'>
            <label htmlFor="userTextinp"></label>
            <textarea id='userTextinp' required autoComplete='off' name="userTextinp" placeholder='Write a message'></textarea>
          </div>

          <div className='userSubmit'>
            <input type="submit" name='submit' id='submit' value='Send Message ' />
          </div>

        </div>

      </div>
    </form>
  )
}
