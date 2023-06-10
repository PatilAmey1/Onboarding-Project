import React from 'react'
import { CopyIcon, AtSignIcon, ChatIcon, SearchIcon, UnlockIcon } from '@chakra-ui/icons'
import Style from '../style/Slidebar.module.css'

function SlideBar() {
  return (
    <div className={Style.slidebar}>
       <AtSignIcon boxSize={6} color="white"/>
       <CopyIcon boxSize={6} color="white" />
       <ChatIcon boxSize={6} color="white"/>
       <SearchIcon boxSize={6} color="white"/>
       <UnlockIcon boxSize={6} color="white"/>
    </div>
  )
}

export default SlideBar