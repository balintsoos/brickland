import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
      </div>
    )
  }
}

export default Main
