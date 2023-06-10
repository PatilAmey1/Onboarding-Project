import React from 'react'
import { Avatar, WrapItem } from '@chakra-ui/react'
import styled from '@emotion/styled'
import style from '../style/NearUser.module.css'

const Button=styled.button`
border:1px solid gray;
padding:1px;
width:90px;
border-radius:13px;
color:red;
font-weight:bold;
margin-top:5px;
`
const Div=styled.div`
display:flex;
flex-direction:column;
padding:4px;
padding-bottom:10px;
width:120px;
border-radius:23px;
align-items: center;
background-color:#f1f6f6;
margin-left:50px;
`
const Span=styled.span`
color:Green;
`

function NearUser() {
  return (
    <Div>
      <WrapItem className={style.NearUserImg}>
      <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
      </WrapItem>
      <h4 >JOHN <Span>CARTER</Span> </h4>
      <p>Near <b>2.1</b> Miles</p>
      <Button>Say Hello</Button>
    </Div>
  )
}

export default NearUser