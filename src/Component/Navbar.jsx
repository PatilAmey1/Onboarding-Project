import React from 'react'
import Style from '../style/Navbar.module.css'
import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import {useNavigate} from 'react-router-dom'

const LoginText = styled.button`
 font-weight:bold;
`;

function Navbar() {
  const navigate=useNavigate();
  const handalClickSignUp=()=>{
    navigate("/signUp");
  }
  const handalClickLogin=()=>{
    navigate("/logIn");
  }
  return (
    <div className={Style.NavbarDiv}>
        <p>Home</p>
        <p>How it works</p>
        <p>Features</p>
        <p>Pricing</p>
        <LoginText onClick={handalClickLogin}>Log In</LoginText>
        <Button colorScheme='blue' onClick={handalClickSignUp}>Sign Up</Button>
    </div>
  )
}

export default Navbar