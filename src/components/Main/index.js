import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
      </div>
    )
  }
}

export default Main
