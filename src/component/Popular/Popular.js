import React from 'react'
import axios from 'axios'
import './Popular.css'
import {Link} from 'react-router-dom'

const Popular = ({
    youtubePop,
    viewCalc,
    setVideoInfo,
    timeCalc,
    setYoutubeSearch,
    setVideoId
}) => {
    const pops = youtubePop.items
  return (
    <div className='pop-container'>
        {
            pops && pops.map(pop=>(
                <Link className="pop-box"
                      onClick={()=>{setYoutubeSearch({});setVideoInfo(pop);setVideoId(pop.id)}}
                      key={pop.id} to='/watch'
                >
                    <img src={pop.snippet.thumbnails.medium.url} 
                        className='thumbnails'
                    />
                    <p  key={pop.id}
                        className='title'
                    >{pop.snippet.title}</p>
                    <p className='channelTitle'>{pop.snippet.channelTitle}</p>
                    <div className='channelInfo'>
                        <p className='channelViews'>조회수 {viewCalc(pop.statistics.viewCount)} ·&nbsp;</p>
                        <p>{timeCalc(pop.snippet.publishedAt)}</p>
                    </div>
                </Link>
            ))
        }

    </div>
  )
}

export default Popular