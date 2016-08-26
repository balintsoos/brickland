import React from 'react'
import { Link } from 'react-router'

class Projects extends React.Component {
  render() {
    return (
      <div className="sub-header">
        <Link to="/" className="back-button"><span>&lang;</span></Link>
        <h2 className="sub-title">Projects</h2>
      </div>
    )
  }
}

export default Projects
