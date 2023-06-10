import React from 'react'
import NearUser from './NearUser'
import NearUser1 from './NearUser1'
import style from '../style/NearUser.module.css'

function UserDiv() {
  return (
    <div className={style.userDiv}>
        <NearUser/>
        <NearUser1/>
    </div>
  )
}

export default UserDiv