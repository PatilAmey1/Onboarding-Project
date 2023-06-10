import styled from '@emotion/styled'
import {  Div3, MainDiv1 } from './SignIn'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import { CardContext} from '../Context/CardContext';
import { useContext } from 'react';

import { Button, border} from '@chakra-ui/react'
const H2=styled.h2`
  font-weight:bold;
  font-size:23px;
  margin-left:-130px;
  margin-top:-130px;
  margin-bottom:10px;
`
export const P=styled.p`
  font-size:12px;
  margin-bottom:15px;
`
const NumberDiv=styled.div`
display:flex;
width:80%;
border:1px solid gray;
// border:1px solid red;
margin-bottom:40px;
border-radius:10px;
padding:5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
height:40px;

`
const Select=styled.select`
   border:none;

`
const Input=styled.input`
border-left: 1px solid black;
padding-left:15px;
font-weight: bold;
width:80%;
`
function Number() {
  const navigate=useNavigate();
  const {Start,lengthArr,Length,OTP,GetName}=useContext(CardContext);
 const handalChange=()=>{
      Start();
      navigate("/OtpPage")
 }
  return (
    <Div3>
       <MainDiv1>
           <H2>My mobile</H2>
           <P>
             Please enter your valid phone Number. We will <br />
             send you a 4-digit code to verify your account. 
           </P>
           <NumberDiv>
            <Select name="" id="" style={{border:"none"}}>
                <option value="" ></option>
                <option value="" >+91</option>
            </Select>
            <Input name='Number' type="number" onChange={(e)=>{lengthArr(e);GetName(e)}}/>
           </NumberDiv>
           {Length?<button  onClick={(e)=>{handalChange()}} style={{padding:"0px 85px 0px 85px",color:"white",fontWeight:"bold",backgroundColor:"#e94057",marginBottom:"30px",height:"40px",borderRadius:"15px"}}>Continue</button>:<button  onClick={()=>{handalChange()}} style={{padding:"0px 85px 0px 85px",color:"white",fontWeight:"bold",backgroundColor:"white",marginBottom:"30px",height:"40px",borderRadius:"15px",cursor:"default"}}>Continue</button>}
           {/* <button disabled={Length} onClick={()=>{handalChange()}} style={{padding:"0px 85px 0px 85px",color:"white",fontWeight:"bold",backgroundColor:"#e94057",marginBottom:"30px",height:"40px",borderRadius:"15px"}}>Continue</button> */}
       </MainDiv1>
    </Div3>
  )
}

export default Number