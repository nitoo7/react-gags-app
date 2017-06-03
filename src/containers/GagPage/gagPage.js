import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchGagInfo } from '../../action/gagAction';
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './gagPage.css'
import ThumbpUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';

class GagPage extends Component {
  
  static propTypes = {
    gagInfo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }  
  
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchGagInfo());  
  }  
  
  render() {
    console.log('NAVVVVV==>', this.props.gagInfo)
    return (
      <div>
        <Card style={{'margin-bottom':'40px'}}>
          <CardHeader
            title={this.props.gagInfo.gagName}
            avatar="images/jsa-128.jpg"
          />
          <CardMedia>
            <img src={this.props.gagInfo.gagImg} />
          </CardMedia>
          <CardText>
            {this.props.gagInfo.gagDesc}
          </CardText>
          <CardActions>
              <Badge className="badge"
                badgeContent={this.props.gagInfo.likes}
                primary={true}>
                <IconButton><ThumbpUp /></IconButton>
              </Badge>              
              <Badge className="badge"
                badgeContent={this.props.gagInfo.dislikes}
                primary={true}>
                <IconButton><ThumbDown /></IconButton>
              </Badge>   
          </CardActions>
        </Card> 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gagInfo: state.gags.gagInfo,
})

export default connect(
  mapStateToProps
)(GagPage)
