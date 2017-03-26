import Turbolinks from 'turbolinks'
import WebpackerReact from 'webpacker-react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Home from '../src/components/home'
import About from '../src/components/about'

injectTapEventPlugin()

Turbolinks.start()

WebpackerReact.setup({
  Home,
  About
})
