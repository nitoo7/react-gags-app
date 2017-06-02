import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './gagSection.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'
import { fetchGagsData } from '../../action/gagAction';

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
                avatar="images/jsa-128.jpg"
              />
              <CardMedia>
                <img src={gag.gagImg} />
              </CardMedia>
              <CardText>
                {gag.gagDesc}
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
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
