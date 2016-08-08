import React from 'react'
import { Link } from 'react-router'

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <Link to="/">Back</Link>
        <Link to="about">About</Link>
      </div>
    )
  }
}

export default Projects
