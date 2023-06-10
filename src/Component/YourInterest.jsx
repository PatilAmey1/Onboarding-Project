import React, { useEffect, useState } from 'react'
import {  Div3, H5, MainDiv1 } from './SignIn'
import {Div1,SkipButton} from './Gender'
import { ArrowLeftIcon, AtSignIcon, DragHandleIcon, InfoOutlineIcon, LinkIcon, NotAllowedIcon, PhoneIcon, RepeatClockIcon, RepeatIcon, SunIcon, TimeIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { P } from './Number'
import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'
import style from '../style/Maindiv.module.css'

const DivInterest =styled.div`
display: grid;
grid-template-columns: auto auto;
gap:12px;
`
const DivItem=styled.div`
  border:1px solid gray;
  width:110px;
  height:30px;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items: center;
  padding:0px 5px 0px 5px;
  border-radius:8px;
`
const P2=styled.p`
 font-weight:bold;
 font-size:12px;
 margin-left:10px;
`

function YourInterest() {
   const url='https://productdata-exf8.onrender.com/userData'
    const [btn1,setbtn1]=useState(false);
    const [btn2,setbtn2]=useState(false);
    const [btn3,setbtn3]=useState(false);
    const [btn4,setbtn4]=useState(false);
    const [btn5,setbtn5]=useState(false);
    const [btn6,setbtn6]=useState(false);
    const [btn7,setbtn7]=useState(false);
    const [btn8,setbtn8]=useState(false);
    const [btn9,setbtn9]=useState(false);
    const [btn10,setbtn10]=useState(false);
    const [btn11,setbtn11]=useState(false);
    const [btn12,setbtn12]=useState(false);
    const [btn13,setbtn13]=useState(false);
    const [btn14,setbtn14]=useState(false);

    const navigate=useNavigate();
    const handalChange1=()=>{
        navigate("/GenderDetails")
    }
    const handalChange2=()=>{
        navigate("/")
    }
    const check1=(a,b)=>{
        if(a===true){
            b(false)
        }else{
            b(true)
        }
        
    }
    const handalchage=()=>{
        navigate("/")
    }
    
    
  return (
    <Div3>
       <MainDiv1>
        <Div1  style={{marginBottom:"20px"}}>
           <SkipButton onClick={handalChange1}><ArrowLeftIcon/></SkipButton>
           <SkipButton onClick={handalChange2}>Skip</SkipButton>
        </Div1>
        <H5 style={{marginLeft:"-85px",fontSize:"25px"}}>Your interest</H5>
        <P>Select a few of your interest and let everyone <br /> 
           know what you're passianate about.</P>
        <DivInterest>
           <DivItem className={btn1?style.ButtonStyle:null} onClick={()=>check1(btn1,setbtn1)}>
             <DragHandleIcon></DragHandleIcon>
             <P2>Photography</P2>
           </DivItem >
           <DivItem className={btn2?style.ButtonStyle:null} onClick={()=>check1(btn2,setbtn2)}>
              <SunIcon></SunIcon>
              <P2>Shopping</P2>
           </DivItem>
           <DivItem className={btn3?style.ButtonStyle:null} onClick={()=>check1(btn3,setbtn3)}>
            <PhoneIcon></PhoneIcon>
            <P2>Karaoke</P2>
           </DivItem>
           <DivItem className={btn4?style.ButtonStyle:null} onClick={()=>check1(btn4,setbtn4)}>
            <LinkIcon></LinkIcon>
            <P2>Yoga</P2>
           </DivItem>
           <DivItem className={btn5?style.ButtonStyle:null} onClick={()=>check1(btn5,setbtn5)}>
             <NotAllowedIcon></NotAllowedIcon>
             <P2>Cooking</P2>
           </DivItem>
           <DivItem className={btn6?style.ButtonStyle:null} onClick={()=>check1(btn6,setbtn6)}>
             <AtSignIcon></AtSignIcon>
             <P2>Tennis</P2>
           </DivItem>
           <DivItem className={btn7?style.ButtonStyle:null} onClick={()=>check1(btn7,setbtn7)}>
             <DragHandleIcon></DragHandleIcon>
             <P2>Run</P2>
           </DivItem>
           <DivItem className={btn8?style.ButtonStyle:null} onClick={()=>check1(btn8,setbtn8)}>
             <NotAllowedIcon></NotAllowedIcon>
             <P2>Swimming</P2>
           </DivItem>
           <DivItem className={btn9?style.ButtonStyle:null} onClick={()=>check1(btn9,setbtn9)}>
             <RepeatClockIcon></RepeatClockIcon>
             <P2>Art</P2>
           </DivItem>
           <DivItem className={btn10?style.ButtonStyle:null} onClick={()=>check1(btn10,setbtn10)}>
             <DragHandleIcon></DragHandleIcon>
             <P2>Traveling</P2>
           </DivItem>
           <DivItem className={btn11?style.ButtonStyle:null} onClick={()=>check1(btn11,setbtn11)}>
             <RepeatIcon></RepeatIcon>
             <P2>Extreme</P2>
           </DivItem>
           <DivItem className={btn12?style.ButtonStyle:null} onClick={()=>check1(btn12,setbtn12)}>
             <PhoneIcon></PhoneIcon>
             <P2>Music</P2>
           </DivItem>
           <DivItem className={btn13?style.ButtonStyle:null} onClick={()=>check1(btn13,setbtn13)}>
             <TimeIcon></TimeIcon>
             <P2>Drink</P2>
           </DivItem>
           <DivItem className={btn14?style.ButtonStyle:null} onClick={()=>check1(btn14,setbtn14)}>
             <InfoOutlineIcon></InfoOutlineIcon>
             <P2>Video Game</P2>
           </DivItem>
        </DivInterest>
        <Button onClick={handalchage} style={{padding:"0px 85px 0px 85px",color:"white",fontWeight:"bold",backgroundColor:"#e94057",marginTop:"20px",marginBottom:"-100px"}}>Continue</Button>   
       </MainDiv1>
    </Div3>
  )
}

export default YourInterest