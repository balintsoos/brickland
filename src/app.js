import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'

class App extends React.Component {
  render() {
    return (
      <div>
        Hi
      </div>
    )
  }
}

const root = document.querySelector('#root')
ReactDOM.render(<App />, root)
