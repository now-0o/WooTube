import React from 'react'
import Sidebar from './Sidebar'
import SearchBox from './SearhBox/SearchBox'
import './Search.css'

const Search = ({
    youtubeSearch,
    sideActive,
    timeCalc,
    setVideoInfo,
    setVideoView,
    youtubeViewHandle,
    setVideoId
}) => {
  return (
    <div className='search-container'>
        <Sidebar sideActive={sideActive}/>
        <SearchBox youtubeSearch={youtubeSearch} 
                   timeCalc={timeCalc}
                   setVideoInfo={setVideoInfo}
                   setVideoView={setVideoView}
                   youtubeViewHandle={youtubeViewHandle}
                   setVideoId={setVideoId}
        />
    </div>
  )
}

export default Search