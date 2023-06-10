import { Avatar, WrapItem } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
const Div=styled.div`
  width:80px;
  height:40px;
  border-radius:20px;
  background-color:#ffc247;
  padding:3px;
`

function NearUser1() {
  return (
    <Div>
        <WrapItem>
          <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </WrapItem>
    </Div>
  )
}

export default NearUser1