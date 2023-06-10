import React from 'react'
import img from '../assets/Image.png'
import styled from '@emotion/styled'
import UseAppDiv from './UseAppDiv'
const Div=styled.div`
margin-left:10%;
margin-top:30px;
`
const H5=styled.h5`
font-weight:bold;
font-size:18px;
margin-bottom:40px;
`
const IMG=styled.img`
margin:auto;
`
const Div1=styled.div`
 display:flex;
  justify-content: center;
 gap:10%;
 margin-top:30px;
`

function Useapp() {
  return (
    <>
     <Div>
        <H5>How to use this App?</H5>
        <IMG src={img} alt="" />
    </Div>
    <Div1>
        <UseAppDiv></UseAppDiv>
        <UseAppDiv></UseAppDiv>
        <UseAppDiv></UseAppDiv>
    </Div1>
    </>
   
  )
}

export default Useapp