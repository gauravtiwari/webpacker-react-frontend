import React from 'react'
import AppBar from 'material-ui/AppBar'
import '../styles/appbar.sass'

const activeClass = (path) => (location.pathname === path ? 'active' : '')
const Appbar = () => (
  <AppBar title="Demo app" titleStyle={{ flex: 'inherit' }}>
    <ul className="nav">
      <li><a className={activeClass('/')} href="/">Home</a></li>
      <li><a className={activeClass('/about')} href="/about">About</a></li>
    </ul>
  </AppBar>
)

export default Appbar
