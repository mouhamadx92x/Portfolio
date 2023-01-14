import React from 'react'
import HeaderCss from "./header.module.css"
import Img from "../Header/img.png"

const Header = () => {
  return (
    <div id='home' className={HeaderCss.container}>
    <img src={Img} alt="my img" className={HeaderCss.headerImg} />
    <h1 className={HeaderCss.header}>Mhd Khalil Alsbinati</h1>
    

    
    
    </div>
  )
}

export default Header