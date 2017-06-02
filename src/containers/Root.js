import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App/App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    <div>
      <Route path="/" children={({ match }) => (
    <App match={match} />
  )}/> />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
