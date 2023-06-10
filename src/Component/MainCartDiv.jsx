import React from 'react'
import MainCart from './MainCart'
import styled from '@emotion/styled'
const MainDiv=styled.div`
display:flex;
margin-left:10%;
`

function MainCartDiv() {
  return (
    <MainDiv>
        <MainCart/>
    </MainDiv>
  )
}

export default MainCartDiv