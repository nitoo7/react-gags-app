import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchGagInfo } from '../../action/gagAction';
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './gagPage.css'

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
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
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
