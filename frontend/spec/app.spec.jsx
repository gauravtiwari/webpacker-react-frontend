import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Home from '../src/components/home'

injectTapEventPlugin()

it('renders without errors', () => {
  ReactDOM.render(<Home />, document.createElement('div'))
})
