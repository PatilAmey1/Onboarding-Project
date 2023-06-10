import React from 'react'
import img1 from '../assets/photo (4).png'
import img2 from '../assets/photo (5).png'
import styled from '@emotion/styled'
import { Button} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom' 
export const MainDiv1=styled.div`
   display:flex;
   flex-direction:column;
   margin:auto;
//    border:1px solid red;
   justify-content: center;
   width:300px;
   align-items: center;
   margin-top:20px;
   padding:20px 0px 20px 0px;
   border-radius:15px;
   background-color:white;
   height:600px;
`
export const MainDiv= styled.div`
   display:flex;
//    margin:auto;
//    border:1px solid red;
   justify-content: center;
   width:260px;
   padding:80px 30px 10px 30px;
`
export const Div1=styled.div`
 margin-right:-70px;
 margin-top:-80px;
`
export const Div2=styled.div`
margin-left:-180px;
`
export const Div3=styled.div`
background-color:black;
height: 100vw;
padding-top:50px;
`
export const H5=styled.h5`
font-weight:bold;
margin:7px 0px 10px 0px;
`
function SignIn() {
    const navigate=useNavigate();
  const handalChangeNumber=()=>{
       navigate("/NumberPage")
  }
  return (
    <Div3>
    <MainDiv1>
    <MainDiv> 
         <Div1>
             <img src={img1} alt="" />
         </Div1>
         <Div2>
             <img src={img2} alt="" />
         </Div2>
    </MainDiv>
         <H5>Sign up to continue</H5>
         <Button style={{padding:"0px 50px 0px 50px",color:"white",fontWeight:"bold",backgroundColor:"#e94057",marginBottom:"20px"}}>Coutinue with email</Button>
         <Button onClick={handalChangeNumber} style={{padding:"0px 50px 0px 50px",color:"#e94057",fontWeight:"bold",backgroundColor:"white",marginBottom:"30px"}}>Use Phone number</Button>
    </MainDiv1>
    </Div3>
  )
}

export default SignIn