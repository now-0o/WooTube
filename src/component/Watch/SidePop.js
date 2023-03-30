import React from 'react'
import './SidePop.css'

const SidePop = ({
    youtubePop,
    setVideoInfo,
    viewCalc,
    youtubeSearch,
    setVideoId
}) => {
    let pops;
    youtubeSearch.items ? pops= youtubeSearch.items : pops = youtubePop.items
  return (
    <ul className='side-content'>
        {
            pops.map(pop=>(
                !(pop.id.kind && pop.id.kind.includes('channel')) && <li className='side-box'
                    onClick={()=>{setVideoInfo(pop); pop.id.kind ? setVideoId(pop.id.videoId) : setVideoId(pop.id)}}
                    key={pop.id}
                >
                    <div className='side-thum-box'>
                        <img src={pop.snippet.thumbnails.medium.url}
                            className='side-thumbnails'
                        />
                    </div>
                    <div className='side-info-box'>
                        <p  key={pop.id}
                            className='side-title'
                        >{pop.snippet.title}</p>
                        <p className='side-channelTitle'>{pop.snippet.channelTitle}</p>
                        {/* <p className='side-channelViews'>조회수 {viewCalc(pop.statistics.viewCount)}</p> */}
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default SidePop