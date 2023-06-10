import React from 'react'
import Navbar from './Navbar'
import UserDiv from './UserDiv'
import MainCartDiv from './MainCartDiv'
import Useapp from './Useapp'

function MainDiv() {
  return (
    <div>
        <Navbar></Navbar>
        <UserDiv/>
        <MainCartDiv></MainCartDiv>
        <Useapp></Useapp>
    </div>
  )
}

export default MainDiv