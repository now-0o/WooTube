import React from 'react'
import WatchVideo from './Watch/WatchVideo'
import SidePop from './Watch/SidePop'
import './Watch.css'

const Watch = ({
  youtubePop,
  videoInfo,
  videoView,
  setVideoInfo,
  viewCalc,
  moreView,
  setMoreView,
  youtubeSearch,
  videoId,
  setVideoId
}) => {
  return (
    <div className='watch-container'>
        <WatchVideo videoInfo={videoInfo}
                    videoView={videoView}
                    viewCalc={viewCalc}
                    moreView={moreView}
                    setMoreView={setMoreView}
                    videoId={videoId}
        />
        <SidePop youtubePop={youtubePop}
                 setVideoInfo={setVideoInfo}
                 viewCalc={viewCalc}
                 youtubeSearch={youtubeSearch}
                 setVideoId={setVideoId}
        />
    </div>
  )
}

export default Watch