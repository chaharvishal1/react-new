import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const AnotherDOM = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const newDom = "Coding and Sleeping"

const reactElement = React.createElement(
  'a',
  {href: 'abc.com', target: '_blank'},
  'Click here for ahed',
  <br />,
  <App />,
  newDom
)

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


createRoot(document.getElementById('root')).render(
  // <StrictMode>
     reactElement
  // </StrictMode>,
)
