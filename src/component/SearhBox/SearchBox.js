import React from 'react'
import './SearchBox.css'
import {useNavigate} from 'react-router-dom'

const SearchBox = ({
    youtubeSearch,
    youtubeChannel,
    timeCalc,
    setVideoInfo,
    setVideoView,
    youtubeViewHandle,
    setVideoId
}) => {
    const searchs = youtubeSearch.items
    const navigate = useNavigate();
  return (
    <ul className='search-video-container'>
        {
            searchs && searchs.map(search=>(
                search.id.kind.includes('channel') ?
                // 검색 결과가 유튜브 채널
                    <li className='search-channel-box'
                        key={search.etag}
                    >
                            <div className="search-channel-thumbnailsBox">
                                <img src={search.snippet.thumbnails.medium.url}
                                     className='search-channel-thumbnails'
                                />
                            </div>
                            <div className="search-channel-info">
                                <p>{search.snippet.title}</p>
                                <button className='search-channel-subscribe'>구독</button>
                            </div>
                    </li> :
                // 검색 결과가 유튜브 영상
                    <li className='search-video-box'
                        key={search.etag}
                        onClick={()=>{youtubeViewHandle(search.id.videoId);setVideoInfo(search); navigate('../watch'); setVideoId(search.id.videoId)}}
                    >
                        <div className='search-video-thumbnailsBox'>
                            <img src={search.snippet.thumbnails.medium.url}
                                className='search-video-thumbnails'
                            />
                        </div>
                        <div className='search-video-info'>
                            <p  key={search.id}
                                className='search-video-title'
                            >{search.snippet.title}</p>
                            <p className='search-video-channelTitle'>{timeCalc(search.snippet.publishTime)}</p>
                            <p className='search-video-channelTitle'>{search.snippet.channelTitle}</p>
                            <p className='search-video-description'>{search.snippet.description}</p>
                            {/* <p className='search-video-channelViews'>조회수 {viewCalc(search.statistics.viewCount)}</p> */}
                        </div>
                    </li>
            ))
        }
    </ul>
  )
}

export default SearchBox