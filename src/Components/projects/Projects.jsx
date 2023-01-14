import React from 'react'
import ProjectsCss from "./projects.module.css"
import CardList from '../Tech/CardList'

const Projects = () => {
  return (
    <div id='projects'>
                <h1 className={ProjectsCss.projectsHeader}>My Projects</h1>
                <CardList />
    </div>
  )
}

export default Projects