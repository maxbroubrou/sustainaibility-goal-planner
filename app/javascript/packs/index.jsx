// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Goals from '../components/Goals/Goals'
import Goal from '../components/Goal/Goal'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Routes>
        <Route exact path="/" element={<Goals />} />
        <Route exact path="/goals/:id" element={<Goal />} />
      </Routes>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
