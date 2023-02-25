import React, { memo } from 'react'
import './About.css'
import { AnimatePresence, motion } from 'framer-motion';
export default function About() {
  return (
    <div className='aboutBody' >

      <motion.div
        className='framer'
        initial={{ position: 'absolute', top: '0%' }}
        animate={{ position: 'absolute', top: '-110%' }}
        exit={{ position: 'absolute', top: '0%' }}
        transition={{ duration: .5 }}>
        <div className='transition'>
        </div>
      </motion.div>

      <div className='mainContent'>
        <div className='aboutImg'>
          <img loading='lazy' src={require('./pexels-miguel-á-padriñán-2882509.jpg')} alt="" />
        </div>


        <div className='aboutContent' >
          <p>Hello Everyone, my name is Jahid Khan, and I'm a 19-year-old native of New Delhi, India.
            I have always been interested in learning and writing code, and since I had a pretty good foundation
            in Python from my school days, learning the fundamentals of C++ were not so difficult. Having learned 
            this, in January 2022, I start studying web development.
            Then, in March, I launched my 'Techy Web Dev' YouTube channel to impart Web-Dev knowledge.
            I practised ReactJS after learning front-end development (infact I made this portfolio with react).
            I then studied nodeJS, expressJS, and mongoDB for backend.
            <br />
            Now that you've read about my entire coding adventure, if you have any questions, comments, or you
            just want to chat, you can contact me by visiting to the Contact Page.
            <br />
            I appreciate you reading this.
            <br />
            <span>-last updated July, 2022</span>
          </p>
        </div>
      </div>

    </div>
  )
}
