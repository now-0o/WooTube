import './App.css'
import Header from './component/Header';
import Home from './component/Home';
import Watch from './component/Watch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './component/Search';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const [youtubePop, setYoutubePop] = useState({});
  const [youtubeSearch, setYoutubeSearch] = useState({});
  const [sideActive, setSideActive] = useState(false);
  const [videoInfo, setVideoInfo] = useState({});
  const [videoView, setVideoView] = useState(0);
  const [moreView, setMoreView] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [videoId, setVideoId] = useState('');

  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
  const youtubePopUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=24&regionCode=kr&key=${API_KEY}`

  const youtubePopHandle = async ()=>{
    try{
      const res = await axios.get(youtubePopUrl);
      setYoutubePop(res.data);
    }catch(err){
      console.log(err);
    }
  }
  const youtubeSearchHandle = async (searchValue)=>{
    try{
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${encodeURI(searchValue)}&part=snippet&maxResults=24&regionCode=kr&key=${API_KEY}`);
      setYoutubeSearch(res.data);
      console.log(youtubeSearch)
    }catch(err){
      console.log(err);
    }
  }
  const youtubeViewHandle = async (videoId)=>{
    try{
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=statistics`)
      setVideoView(res.data.items[0].statistics.viewCount)
    }catch(err){
      console.log(err);
    }
  }
  
  const viewCalc = (view)=>{
    return view >= 10000 ? Math.floor(view/10000)+'만' :  (view >= 1000).toFixed(1) ? view/100+'천' :  view
  }

  const timeCalc = (time)=>{
    const eqTime = Math.floor((new Date() - new Date(time.replace(/[T,Z]/g, ' ')))/60000);
    let upload;
    eqTime < 60 ?  upload = Math.floor(eqTime) + '분 전' : eqTime < 1440 ? upload = Math.floor(eqTime/60) + '시간 전' : eqTime < 43200 ? upload = Math.floor(eqTime/1440) + '일 전' : upload = Math.floor(eqTime/43200) + '달 전'
    return upload;
  }

  useEffect(()=>{
    youtubePopHandle();
  },[])

  return (
    <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
      <BrowserRouter>
        <div className={darkTheme? "App darkTheme" : "App"}>
          <Header sideActive={sideActive}
                  setSideActive={setSideActive}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  API_KEY={API_KEY}
                  youtubeSearchHandle={youtubeSearchHandle}
          />
          <Routes>
            <Route path='/' element={
              <Home youtubePop={youtubePop}
                    viewCalc={viewCalc}
                    sideActive={sideActive}
                    setVideoInfo={setVideoInfo}
                    timeCalc={timeCalc}
                    setYoutubeSearch={setYoutubeSearch}
                    setVideoId={setVideoId}
              />}
            />
            <Route path='/home' element={
              <Home youtubePop={youtubePop}
                    viewCalc={viewCalc}
                    sideActive={sideActive}
                    setVideoInfo={setVideoInfo}
                    timeCalc={timeCalc}
                    setYoutubeSearch={setYoutubeSearch}
                    setVideoId={setVideoId}
              />}
            />
            <Route path='/watch' element={
              <Watch  videoInfo={videoInfo}
                      videoView={videoView}
                      setVideoInfo={setVideoInfo}
                      youtubePop={youtubePop}
                      viewCalc={viewCalc}
                      moreView={moreView}
                      setMoreView={setMoreView}
                      youtubeSearch={youtubeSearch}
                      videoId={videoId}
                      setVideoId={setVideoId}
              />}
            />
            <Route path='/search/:id' element={
              <Search youtubeSearch={youtubeSearch}
                      setVideoView={setVideoView}
                      sideActive={sideActive}
                      timeCalc={timeCalc}
                      setVideoInfo={setVideoInfo}
                      youtubeViewHandle={youtubeViewHandle}
                      videoId={videoId}
                      setVideoId={setVideoId}
              />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
