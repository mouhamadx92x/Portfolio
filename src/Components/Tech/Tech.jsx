import React from 'react'
import TechCss from "./tech.module.css"
import { BrandHtml5,BrandGithub,BrandSass,BrandCss3,BrandBootstrap,BrandJavascript,BrandReact } from 'tabler-icons-react';

const Tech = () => {
  return (
    <div className={TechCss.techContainer}>
<h1 className={TechCss.techHeader}>Tech</h1>
<p >I'm happy to turn your ideas into live by CODING</p>
<div className={TechCss.iconsContainer}>
<span>
  <BrandGithub size={80}/>
</span>
<span>
  <BrandHtml5 size={80}/>
</span>
<span>
  <BrandCss3 size={80}/>
</span>
<span>
  <BrandBootstrap size={80}/>
</span>
<span>
  <BrandSass size={80}/>
</span>
<span>
  <BrandJavascript size={80}/>
</span>
<span>
  <BrandReact size={80}/>
</span>

</div>

</div>
  )
}

export default Tech