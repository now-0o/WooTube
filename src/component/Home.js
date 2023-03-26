import React,{useContext} from 'react'
import Popular from './Popular/Popular'
import Sidebar from './Sidebar'
import { ThemeContext } from "../contexts/ThemeContext";
import './Home.css'

const Home = ({
  youtubePop,
  viewCalc,
  sideActive,
  setVideoInfo,
  timeCalc,
  setYoutubeSearch,
  setVideoId
}) => {
  const {darkTheme} = useContext(ThemeContext);
  return (
    <div className={darkTheme ? 'home-container darkTheme' : 'home-container'}>
        <Sidebar sideActive={sideActive}/>
        <Popular youtubePop={youtubePop}
                 viewCalc={viewCalc}
                 setVideoInfo={setVideoInfo}
                 timeCalc={timeCalc}
                 setYoutubeSearch={setYoutubeSearch}
                 setVideoId={setVideoId}
        />
    </div>
  )
}

export default Home