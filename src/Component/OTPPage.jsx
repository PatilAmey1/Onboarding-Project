import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { CardContext} from '../Context/CardContext';
import { Button, Flex, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { Div3, MainDiv1 } from './SignIn'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';
const P =styled.p`
text-align:center;
margin-bottom:30px;
`
const H5=styled.h5`
font-weight:bold;
margin-bottom:30px;
`
const Input=styled.input`
border:1px solid green;
width:40px;
height:38px;
padding:13px;
maxLength=1;
margin-left:5px;
font-weight:bold;
text-align:center;
border-radius:5px;
`

function OTPPage() {
    const [GOTP,SETGOTP]=useState((Math.ceil(Math.random()*10000)))
    const [otp1,setotp1]=useState();
    const [otp2,setotp2]=useState();
    const [otp3,setotp3]=useState();
    const [otp4,setotp4]=useState();
   //  const [VerifyButton,setverifyButton]=useState(true)
    const[mainOtp,setmainOtp]=useState("");
    const et1=useRef();
    const et2=useRef();
    const et3=useRef();
    const et4=useRef();
    const navigate=useNavigate();

    const {Count,Reset,ResetButton}=useContext(CardContext);

    const handalChange=()=>{
      if(mainOtp==GOTP){
         navigate("/profileDetails")
      }else{
         alert("Enter Correct Otp")
      }
       
    } 
    const handalChange1=()=>{
      SETGOTP((Math.ceil(Math.random()*10000)))
    }
    const check1=(e)=>{
      setotp1(e.target.value)
      if(e.target.value){
         et2.current.focus();
      }
    }
    const check2=(e)=>{
      setotp2(e.target.value)
      console.log(e)
      if(e.target.value){
         et3.current.focus();
      }
      else{
         et1.current.focus();
      }
    }
    const check3=(e)=>{
      setotp3(e.target.value)
      console.log(e)
      if(e.target.value){
         et4.current.focus();
      }
      else{
         et2.current.focus();
      }
    }
    const check4=(e)=>{
      setotp4(e.target.value)
      if(e.target.value){
         et4.current.focus();
      }
      else{
         et3.current.focus();
      }
    }
    useEffect(()=>{
      setmainOtp(otp1+otp2+otp3+otp4)
       },[otp1,otp2,otp3,otp4])

   //  const checkLength=()=>{
   //    if(mainOtp.length===4){
   //       setverifyButton(false)
   //    }
   //  }
   //  checkLength();
   
  return (
    <Div3>
       <MainDiv1>
        <H5>{Count}</H5>
        <P>
           type the verification code <br/>
           we've send you {GOTP}
        </P>
        <div style={{display:Flex}}>
        <Input ref={et1} maxLength={1} onChange={(e)=>{check1(e)}}></Input>
        <Input ref={et2} maxLength={1} onChange={(e)=>{check2(e)}}></Input>
        <Input ref={et3} maxLength={1} onChange={(e)=>{check3(e)}}></Input>
        <Input ref={et4} maxLength={1} onChange={(e)=>{check4(e)}}></Input>
        </div>
        {/* <HStack onChange={(e)=>{check()}}>  
        <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        </PinInput>
        </HStack> */}
           <Button onClick={handalChange} style={{padding:"0px 85px 0px 85px",color:"white",fontWeight:"bold",backgroundColor:"#e94057",marginTop:"30px"}}>Continue</Button>
           {ResetButton?<Button onClick={()=>{handalChange1();Reset()}} style={{padding:"0px 85px 0px 85px",color:"#e94057",fontWeight:"bold",backgroundColor:"white",marginTop:"30px",marginBottom:"30px"}}>Send Again</Button>:<Button onClick={()=>{handalChange1();Reset()}} style={{padding:"0px 85px 0px 85px",color:"white",fontWeight:"bold",backgroundColor:"white",marginTop:"30px",marginBottom:"30px",cursor:"default"}}>Send Again</Button>}
           {/* <Button onClick={()=>{handalChange1();Reset()}} style={{padding:"0px 85px 0px 85px",color:"#e94057",fontWeight:"bold",backgroundColor:"white",marginTop:"30px",marginBottom:"30px"}}>Send Again</Button> */}
       </MainDiv1>
    </Div3>

  )
}

export default OTPPage