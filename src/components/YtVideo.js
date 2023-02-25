import React from 'react'
import './YtVideo.css'

export default function YtVideo(props) {
    return (
        <div className='YtVideoBody' >

            <div className='YtvidButton'>
                <a href={props.aLink} target='_blank'>Watch on Youtube</a>
            </div>
            <iframe id={props.ytID} className='video' src={props.vidLink} allowFullScreen frameBorder="0"></iframe>

        </div>
    )
}
