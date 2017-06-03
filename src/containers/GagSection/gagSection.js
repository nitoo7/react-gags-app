import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './gagSection.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'
import { fetchGagsData } from '../../action/gagAction';
import IconButton from 'material-ui/IconButton';
import ThumbpUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import Badge from 'material-ui/Badge';

class GagSection extends Component {
  
  static propTypes = {
    gagsData: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }  
  
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchGagsData());  
  }
  
  render() {
    return (
      <div className="content">
        {this.props.gagsData.map((gag)=>{
          return (
            <Card style={{'margin-bottom':'40px'}}>
              <CardHeader
                title={gag.gagName}
                avatar="http://lh6.googleusercontent.com/-zsRaghZgxlU/AAAAAAAAAAI/AAAAAAAAABQ/BmuAzJoy8i0/s96-c/photo.jpg"
              />
              <CardMedia>
                <img src={gag.gagImg} />
              </CardMedia>
              <CardText>
                {gag.gagDesc}
              </CardText>
              <CardActions>
              <Badge className="badge"
                badgeContent={gag.likes}
                primary={true}>
                <IconButton><ThumbpUp /></IconButton>
              </Badge>              
              <Badge className="badge"
                badgeContent={gag.dislikes}
                primary={true}>
                <IconButton><ThumbDown /></IconButton>
              </Badge>     
              </CardActions>
            </Card>            
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gagsData: state.gags.gagsData,
})

export default connect(
  mapStateToProps
)(GagSection)
