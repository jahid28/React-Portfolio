import React from 'react'
import './Cards.css'

export default function Cards(props) {



  let astyle = {
    textDecoration: 'none',
  }

  return (
    <div className='cardBody' >
      <div id={props.id} className='cards ' style={{ color: 'white', }}>
        <div className="card" >
          <a href={props.visit} target='_blank' style={astyle}>
            <img loading='lazy' style={{ maxHeight: '200px' }} src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
            </div>
          </a>
        </div>
      </div>



    </div>
  )
}
