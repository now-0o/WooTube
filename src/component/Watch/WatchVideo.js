import React from 'react'
import './WatchVideo.css'

const WatchVideo = ({
  videoInfo,
  videoView,
  viewCalc,
  moreView,
  setMoreView,
  videoId
}) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="watch-content">
        <div className='video-box'>
            <iframe id="ytplayer" type="text/html"
                    src={videoURL} className='video'
                    frameBorder="0" allowFullScreen>
            </iframe>
        </div>
        <div className="video-info">
          <p className='video-title'>{videoInfo.snippet.title}</p>
          <div className={!moreView ? "video-more-info" : "video-more-info active"}
          >
            {
              // 조회수
              videoInfo.statistics ? <p className='video-views'>조회수 {viewCalc(videoInfo.statistics.viewCount)}</p> : <p className='video-views'>조회수 {videoView}</p>
            }
            <p className='video-description'>{videoInfo.snippet.description}</p>
          </div>
          <p className='video-moreView-btn'
             onClick={()=>{setMoreView(!moreView)}}
          >{!moreView ? '더보기' : '간략히'}</p>
        </div>
    </div>
  )
}

export default WatchVideo