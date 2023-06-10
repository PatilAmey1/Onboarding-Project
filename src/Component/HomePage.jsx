import React from 'react'
import MainDiv from './MainDiv';
import SlideBar from './SlideBar';
import Style from '../style/Maindiv.module.css'

function HomePage() {
  return (
    <div className={Style.App}>  
        <SlideBar/>
        <MainDiv/>
    </div>
  )
}

export default HomePage