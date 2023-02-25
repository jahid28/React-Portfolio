import React from 'react';
import { Suspense, lazy } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Opening from './Opening.js';
import Hero from './Hero.js';
import Skills from './Skills';
import Projects from './Projects';
import Youtube from './Youtube';
import Footer from './Footer';

export default function Home() {

    // const Opening=lazy(()=>import('./Opening.js'))
    const Hero = lazy(() => import('./Hero.js'))
    const Skills = lazy(() => import('./Skills.js'))
    const Projects = lazy(() => import('./Projects.js'))
    const Youtube = lazy(() => import('./Youtube.js'))
    const Footer = lazy(() => import('./Footer.js'))

    return (
        <div style={{ overflow: 'hidden', position: 'relative', }}>

            <motion.div
                className='framer'
                initial={{ position: 'absolute', top: '0%' }}
                animate={{ position: 'absolute', top: '-110%' }}
                exit={{ position: 'absolute', top: '0%' }}
                transition={{ duration: .5 }}>
                <div className='transition'>
                </div>
            </motion.div>

            {/* <Suspense fallback={<div>Loading</div>}> */}
            <Opening />
            {/* </Suspense> */}

            <Suspense fallback={<div>Loading</div>}>
                <Hero />
            </Suspense>

            <Suspense fallback={<div>Loading</div>}>
                <Skills />
            </Suspense>

            <Suspense fallback={<div>Loading</div>}>
                <Projects />
            </Suspense>

            {/* <Suspense fallback={<div>Loading</div>}>
                <Youtube />
            </Suspense> */}

            <Suspense fallback={<div>Loading</div>}>
                <Footer />
            </Suspense>


        </div>
    )
}
