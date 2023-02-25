import React from 'react'
import './Youtube.css'
// import YtVideo from './YtVideo'
import { Suspense, lazy } from 'react'

export default function Youtube() {

  const YtVideo = lazy(() => import('./YtVideo'))

  window.addEventListener('scroll', function () {
    let scrYYT = window.pageYOffset
    document.getElementById('bgYoutube').style.left = -scrYYT + 'px';
  })


  return (
    <div className='ytBody' >
      <div id='bgYoutube' className='bgYoutube'>
        <p>YOUTUBE</p>
      </div>
      <p className='myYT'>My Youtube Channel:</p>
      <h2 className='para'>I have a youtube channel called <span><a href="https://www.youtube.com/channel/UCe65gfP4Vr1_NVbZo-r-oSA" target='_blank'> Techy Web Dev </a></span> where I upload tutorials and informative videos regarding web development.Here are some of my videos :</h2>

      <div className='allYTVideos'>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/Ev9tLeDYo5g' aLink='https://www.youtube.com/watch?v=Ev9tLeDYo5g' />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/HdObImYt6hM' aLink='https://www.youtube.com/watch?v=HdObImYt6hM' />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <p className='removeYTVidAt800px'><YtVideo vidLink='https://www.youtube.com/embed/LqV0AbZKFhw' aLink='https://www.youtube.com/watch?v=LqV0AbZKFhw' /></p>
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/bZgy9n-n9A4' aLink='https://www.youtube.com/watch?v=bZgy9n-n9A4' />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/yecQuFbM4Lc' aLink='https://www.youtube.com/watch?v=yecQuFbM4Lc' />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <p className='removeYTVidAt800px'><YtVideo vidLink='https://www.youtube.com/embed/jvaUnxrQbVI' aLink='https://www.youtube.com/watch?v=jvaUnxrQbVI' /></p>
        </Suspense>
      </div>
    </div>
  )
}
