import React from 'react'
import NavCss from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={NavCss.container}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#">Contact Me</a>
    </div>
  )
}

export default Navbar