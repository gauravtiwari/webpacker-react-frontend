/* global location */
import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from '../components/appbar'
import '../styles/fonts.sass'
import '../styles/application.sass'

const ApplicationLayout = props => (
  <MuiThemeProvider>
    <div className="app">
      <AppBar />
      <div className="main">
        {props.children}
      </div>
    </div>
  </MuiThemeProvider>
)

ApplicationLayout.defaultProps = {
  children: {}
}

ApplicationLayout.propTypes = {
  children: PropTypes.object
}

export default ApplicationLayout
