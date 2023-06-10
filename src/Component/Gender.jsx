import React, { useContext } from 'react'
import { Div3,  MainDiv1 } from './SignIn'
// import { SkipButton } from './ProfileDetails'
import { Button, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { H5 } from './ProfileDetails'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { CardContext } from '../Context/CardContext'

export const Div1=styled.div`
display:flex;
// flex-direction:row;
justify-content: space-between;
// border:1px solid red;
width:230px;
margin-top:-100px;
margin-bottom:60px;
`
export const SkipButton=styled.button`
color:#e94057;
  font-weight:bold;
`
function Gender() {
    const navigate=useNavigate();
    const {GetName}=useContext(CardContext);
    const handalChange2=()=>{ 
        navigate("/")
    }
    const handalChange1=()=>{
        navigate("/profileDetails")
    }
    const handalChange=()=>{ 
        navigate("/YourInterests")
    }
  return (
    <Div3>
       <MainDiv1>
        <Div1>
           <SkipButton onClick={handalChange1}><ArrowLeftIcon/></SkipButton>
           <SkipButton onClick={handalChange2}>Skip</SkipButton>
        </Div1>
        <H5 style={{marginBottom:"50px"}}>I am a</H5>
        <RadioGroup defaultValue='woman' style={{marginBottom:"30px"}}>
           <Stack name='Gender' onChange={(e)=>{GetName(e)}}>
           <Radio value='woman' style={{fontSize:"30px",fontWeight:"bold"}}>WOMAN</Radio>
           <Radio value='man'>MAN</Radio>
           <Radio value='other'>OTHER</Radio>
           </Stack>
        </RadioGroup>
        <Button onClick={()=>{handalChange()}} style={{padding:"0px 85px 0px 85px",color:"white",fontWeight:"bold",backgroundColor:"#e94057",marginTop:"30px"}}>Continue</Button>   
       </MainDiv1>
    </Div3>
  )
}

export default Gender