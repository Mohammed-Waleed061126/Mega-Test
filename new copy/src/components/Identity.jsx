import React from 'react'
import Logo from './../assets/images/1.png'
import TextLogo from './../assets/images/2.png'
import'./../assets/css/components/identity.css';

export default function Identity() {
  return (
    <div className="main-logo">
        <img src={Logo} alt="" className='logo'/>
        <img src={TextLogo} alt="" className='text-logo'/>
    </div>
  )
}