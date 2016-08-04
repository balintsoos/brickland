import React from 'react'
import { Link } from 'react-router'

import styles from './styles.module.css'

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Link to="about">About</Link>
      </div>
    )
  }
}

export default App
