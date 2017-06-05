import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import GoogleLogin from 'react-google-login';
import RaisedButton from 'material-ui/RaisedButton';
import './header.css'

const iconStyles = {
  marginRight: 24,
};


class Login extends Component {
  static muiName = 'FlatButton';

  constructor(props) {
    super(props);
    this.triggerGoogleSignIn = this.triggerGoogleSignIn.bind(this);
  }  

  responseGoogle = (response) => {
    let userDetails = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      dp: response.profileObj.imageUrl
    }  
   this.props.logStatus();
    console.log('####==>', userDetails, this.props);

  }

  triggerGoogleSignIn() {
    this.refs.signInBtn.click();
  }

  render() {
    return (
      <div>
        <RaisedButton label="SignIn" onClick={this.triggerGoogleSignIn} />
        <GoogleLogin style={{"display":"none"}}
          clientId="409775674375-ik77js1a750tvmf63h7iebhfirgt85rh.apps.googleusercontent.com"
          buttonText="Login" ref="signInBtn"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />      
      </div>
    );
  }
}


const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="New Posts" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class Dashboard extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  state = {
    logged: false,
    open: false
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };
  test= () => {
    console.log('click triggered')
    this.setState({open: true});
  }
  handleClose = () => {
this.setState({logged: true})
  }
  render() {
    return (
      <div>
        <AppBar className="header" 
          title="Qgag"
          iconElementLeft={<IconButton onClick={this.test}><NavigationClose /></IconButton>}
          iconElementRight={
            this.state.logged ?
             <Logged /> 
             :
            <Login logStatus={this.handleClose}/>}
        />
        <Drawer containerStyle={{'background-color':'black'}}
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem style={{"color":"white"}} onTouchTap={this.handleClose}>All</MenuItem>
          <MenuItem style={{"color":"white"}} onTouchTap={this.handleClose}>Sports</MenuItem>
          <MenuItem style={{"color":"white"}} onTouchTap={this.handleClose}>Fun</MenuItem>
          <MenuItem style={{"color":"white"}} onTouchTap={this.handleClose}>Games</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Dashboard;
