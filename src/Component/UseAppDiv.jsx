import { SmallAddIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
const Img=styled.img`
width:40px;
`///https://www.clipartkey.com/mpngs/b/87-874947_instagram-logo-clipart.png
//https://tse4.mm.bing.net/th?id=OIP.e3mRh89mpw9gDKhmML9vmQHaI_&pid=Api&P=0&h=180
const Div=styled.div`
 display:flex;
 justify-contain:center;
 gap:20%;
`

function UseAppDiv() {
  return (
    <Div>
        {/* <Button style={{width:"250px",height:"200px"}} colorScheme='teal' variant='outline'>
        <Img src="https://www.iconpacks.net/icons/2/free-click-icon-2401-thumb.png" alt="" />
        <br />
            Meet With Just <br /> One Click
        </Button> */}
    </Div>
  )
}

export default UseAppDiv