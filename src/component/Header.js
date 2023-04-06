import React, {useContext} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from "../contexts/ThemeContext";
import './Header.css'

const Header = ({
    sideActive,
    setSideActive,
    searchValue,
    setSearchValue
}) => {
    const navigate = useNavigate();
    const {darkTheme, setDarkTheme} = useContext(ThemeContext);
  return (
    <div className={darkTheme ? 'header-container darkTheme' : 'header-container'}>
        <nav>
            <div className="header-left">
                <RxHamburgerMenu className='ham-menu'
                                 onClick={()=>{sideActive? setSideActive(false):setSideActive(true)}}
                />
                <Link to='/home'>
                    {
                        darkTheme ? <img src="/imgs/logo_white.png" className='logo'/> : <img src="/imgs/logo.png" alt="" className='logo'/>
                    }
                </Link>
            </div>
            <div className="header-center">
                <input type="text"
                       className='search-input'
                       placeholder='검색'
                       onKeyDown={(e)=>{if(e.key === 'Enter'){
                                        setSearchValue(e.target.value);
                                        navigate(`./search/${e.target.value}`);
                                    }
                        }}
                />
                <div className='search-btn-box'>
                    <TfiSearch className='search-btn'/>
                </div>
            </div>
            <button className={darkTheme ? "header-right darkTheme" : 'header-right'} onClick={()=>{setDarkTheme(!darkTheme)}}>
                {darkTheme ? <IoMoon /> : <MdWbSunny />}
            </button>
        </nav>
    </div>
  )
}

export default Header