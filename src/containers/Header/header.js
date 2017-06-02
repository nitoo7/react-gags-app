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
import './header.css'

const iconStyles = {
  marginRight: 24,
};


class Login extends Component {
  static muiName = 'FlatButton';

// componentDidMount() {
//   window.gapi.load('auth2', function() {
//   let auth2 = window.gapi.auth2.init({
//     client_id: '409775674375-ik77js1a750tvmf63h7iebhfirgt85rh.apps.googleusercontent.com',
//     fetch_basic_profile: false,
//     scope: 'profile'
//   });
//   console.log('****', auth2)

//   // Sign the user in, and then retrieve their ID.
//   auth2.signIn().then(function() {
//     console.log('##########3', auth2.currentUser.get().getId());
//   });
// });
// }

  responseGoogle = (response) => {
    let userDetails = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      dp: response.profileObj.imageUrl
    }  
   this.props.logStatus();
    console.log('####==>', userDetails, this.props);

}

  render() {
    return (
  <GoogleLogin
    clientId="409775674375-ik77js1a750tvmf63h7iebhfirgt85rh.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
  />

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
