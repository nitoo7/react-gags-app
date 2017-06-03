import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header/header'
import GagSection from '../GagSection/gagSection'
import GagPage from '../GagPage/gagPage'
import GagUpload from '../GagUpload/gagUpload'
import './App.css'

class App extends Component {
    render() {
        console.log('Appp===>', !this.props.match.isExact)
        return (
        <MuiThemeProvider>
            <div className="app">
                <Route path='/' component={Header}/>   
                <Route path='/' exact="true"  component={GagSection}/>           
                <Route path='/:gagType' exact="true" component={GagSection} />
                <Route path='/gag/:gagId' exact="true" component={GagPage} />
                <Route path='/post/gag' exact="true" component={GagUpload} />
            </div>   
        </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps
)(App)
