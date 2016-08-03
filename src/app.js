import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'
import styles from './styles.module.css'

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        Hi, my name is Balint
      </div>
    )
  }
}

const root = document.querySelector('#root')
ReactDOM.render(<App />, root)
