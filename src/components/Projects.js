import React from 'react'
// import Cards from './Cards'
import './Projects.css'
import { Suspense, lazy } from 'react'

export default function Projects() {

  const Cards = lazy(() => import('./Cards'))

  window.addEventListener('scroll', function () {
    let scrYWeb = window.pageYOffset
    document.getElementById('bgWebsites').style.left = -scrYWeb * .6 + 'px';
    document.getElementById('bgProjects').style.left = scrYWeb * .6 + 'px';
  })

  return (
    <div className='projectsBody' >
      <div id='bgWebsites' className='bgWebsites'>
        <p>WEBSITES</p>
      </div>
      <p className='someProjects'>Some of my Websites :</p>
      <div className='allWebsites' loading='lazy'>
        <Suspense fallback={<div>Loading</div>}>
          <Cards id='card1' className='card' visit="https://foodsite2003.netlify.app" image={require('./Screenshot (113).jpg')} title='Restaurant Site' desc='This was my third website that I made and I also added responsiveness to it.' />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <Cards id='card2' className='card' visit="https://blinktrip2003.netlify.app" image={require('./Screenshot (114).jpg')} title='Travel Site' desc='This was my fourth website and I used all my js knowledge(at that time) to make this.  ' />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <Cards id='card3' className='card ' visit="https://newzy2003.netlify.app/" image={require('./Screenshot (123).jpg')} title='News Site' desc='I made this using ReactJS and also used API for the first time. Learn alot about APIs.' />
        </Suspense>
      </div>

      <div className='allJSprojectsCont'>

        <div id='bgProjects' className='bgProjects'>
          <p>PROJECTS</p>
        </div>

        <p className='someProjects'>Some of my JS Projects :</p>

        <div className='allJSprojects' loading='lazy'>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card4' className='card' visit="https://chess2003.netlify.app" image={require('./Screenshot (115).jpg')} title='Chess' desc='I made this chess game with only html,css and javascript.And it took me 2 weeks to make.' />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card5' className='card' visit="https://tictactoe2003.netlify.app" image={require('./Screenshot (116).png')} title='TicTacToe' desc='This was also a fun project to make.Also I only used html,css and javascript' />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card6' className='card' visit="https://calculator2003.netlify.app" image={require('./Screenshot (117).png')} title='Calculator' desc='It is simple calculator to solve some basic calculations.' />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card7' className='card ' visit="https://stalwart-lebkuchen-49daf8.netlify.app" image={require('./Screenshot (118).jpg')} title='Carousel' desc='I could use carousels from bootstrap,etc. But I wanted to make it from scratch.' />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card8' className='card ' visit="https://piano2003.netlify.app/" image={require('./Screenshot (119).png')} title='Piano' desc='I wanted to use key elements in JS. So I decided to make a piano. For few days I was addicted to it.' />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card9' className='card ' visit='https://3dfollow.netlify.app' image={require('./Screenshot (120).jpg')} title='3D-Hover' desc='I always find 3D elements and hover effects cool. Hence I decided to make one.' />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card10' className='card ' visit='https://connect4-2003.netlify.app' image={require('./connect4.png')} title='Connect-4' desc='A simple game of connect-4 which you can play with your friend.' />
          </Suspense>

        </div>
      </div>
    </div>
  )
}
