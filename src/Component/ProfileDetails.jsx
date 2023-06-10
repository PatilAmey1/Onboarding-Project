import React, { useContext, useRef, useState } from 'react'
import { Div3, MainDiv1 } from './SignIn'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, WrapItem } from '@chakra-ui/react'
import { CardContext } from '../Context/CardContext'

export const SkipButton=styled.button`
  color:#e94057;
  font-weight:bold;
  margin-right:-190px;
  margin-top:-50px;
  margin-bottom:30px;
`
export const H5=styled.h5`
  font-weight:bold;
  font-size:25px;
  margin-left:-20px;
`
const Input=styled.input`
// margin-top:30px;
width:200px;
height:40px;
border:1px solid gray;
border-radius:10px;
padding-left:20px;
font-size:16px;
font-weight:bold;
`
const Lable=styled.label`
 margin-top:10px;
 margin-bottom:5px;
 margin-left:-100px;
//  font-weight:bold;
 color:#e94057;
`
function ProfileDetails() {
    const navigate=useNavigate();
    const et1=useRef();
    const et2=useRef();
    const handalChange=()=>{ 
       
        navigate("/")
    }
    const {GetName,user}=useContext(CardContext);
    const handalChange1=()=>{
      if(user.FirstName&&user.LastName){
        navigate("/GenderDetails")
      }else if(user.FirstName){
        et2.current.focus();
      }else{
        et1.current.focus();
      }
        
    }
    
  return (
    <Div3>
       <MainDiv1>
        <SkipButton onClick={handalChange}>Skip</SkipButton>
        <H5>Profile details</H5>
        <WrapItem style={{marginTop:"20px",cursor:"pointer"}}>
            <Avatar size='xl' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
        </WrapItem>
        <Lable>First Name</Lable>
        <Input ref={et1} name='FirstName' onChange={(e)=>{GetName(e)}}></Input>  
        <Lable>Last Name</Lable>
        <Input ref={et2} name='LastName'  onChange={(e)=>{GetName(e)}}></Input>  
        {/* <>
        <fieldset>
          <legend>Personalia:</legend>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"><br><br>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname"><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"><br><br>
          <label for="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday"><br><br>
          <input type="submit" value="Submit">
        </fieldset>
        </> */}
        {/* <HStack>
        <PinInput >
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        </PinInput>
        </HStack> */}
           <Button onClick={handalChange1} style={{padding:"0px 85px 0px 85px",color:"white",fontWeight:"bold",backgroundColor:"#e94057",marginTop:"30px"}}>Continue</Button>
           {/* <Button  style={{padding:"0px 85px 0px 85px",color:"#e94057",fontWeight:"bold",backgroundColor:"white",marginTop:"30px",marginBottom:"30px"}}>Send Again</Button> */}
       </MainDiv1>
    </Div3>
  )
}

export default ProfileDetails