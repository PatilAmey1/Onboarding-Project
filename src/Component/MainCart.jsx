import React from 'react'
import img1 from '../assets/photo (1).png'
import img2 from '../assets/photo (2).png'
import img3 from '../assets/photo (3).png'
import styled from '@emotion/styled'
import { HStack, Icon } from '@chakra-ui/react'
const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props}>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )

let img=[{
    img:img1,
    boxSize1:12,
    boxSize2:12,
    boxSize3:16
    },{img:img2,
       boxSize1:12,
       boxSize2:16,
       boxSize3:12
    },
       {img:img3,
       boxSize1:16,
       boxSize2:12,
       boxSize3:12
    }];
const DivMain=styled.div`
display:flex;
width:30%;
// border:1px solid red;
flex-direction:column;
padding:0% 2.5% 0% 2.5%; 
align-items: center;
`
const DivInside=styled.div`
display:flex;
width:50%;
flex-direction:row;
justify-content:center;
gap:15%;
margin-top:15px;
`
const Button=styled.button`
padding:1% 10% 2% 10%;
width:67%;
border-radius:13px;
font-size:12px;
font-weight:bold;
`
const H3=styled.h3`
margin-left:-160px;
margin-top:-70px;
font-weight:bold;
color:white;

`

function MainCart() {
  return (
    img.map((elm)=>(
        <DivMain>
        <img src={elm.img} alt="" />
        <H3>Leilani,19</H3>
        <DivInside>
            <Button style={{backgroundColor:"#fe365d",color:"white"}}>Music</Button>
            <Button style={{backgroundColor:"white",color:"#fe365d"}}>Parties</Button>
            <Button style={{backgroundColor:"white",color:"#fe365d"}}>Dating</Button>
        </DivInside>
        <div style={{marginTop:"10px"}}>
        <HStack>
            <CircleIcon boxSize={elm.boxSize1} />
            <CircleIcon boxSize={elm.boxSize2} />
            <CircleIcon boxSize={elm.boxSize3} color='red.500' />
        </HStack>
        </div>
       </DivMain>
    ))
  )
}

export default MainCart