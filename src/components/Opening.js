import React, { useEffect, useState } from 'react'
import './Opening.css';

export default function Opening() {

    // const [offsetY, setoffsetY] = useState(0)

    // window.addEventListener('scroll', function () {

    //     setoffsetY(window.pageYOffset)
    // })

    window.addEventListener("scroll", function () {
        let yaxis = window.pageYOffset
        document.getElementById("openingBody").style.top = `${-yaxis * .5}px`
        // document.getElementById("myname").style.top=`${yaxis}px`
        // document.getElementById("myname").style.opacity=`${1-yaxis*0.004}`

    })

    return (
        <div id='openingBody' className='body'>

            <a id='upArrow' href="#openingBody">
                <i className="fa-solid fa-circle-chevron-up"></i>
            </a>

            <div className='heading'>
                <p className='hi'>Hi, I'm</p>
                <h1 id='myname'>Jahid Khan</h1>
                {/* <p className='welcome'>and welcome to my portfolio</p> */}
            </div>

            {/* <a href="#bgWhoAmI" className='anchor'> */}
            <p className='welcome'>Scroll Down</p>
            <i className="fa-solid fa-arrow-down-long arrow"></i>
            {/* </a> */}


        </div>
    )
}
