import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchGagInfo } from '../../action/gagAction';
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { uploadGag } from '../../action/gagAction';
import './gagUpload.css'

class GagUpload extends Component {
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }  
  
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
      gagTitle: '',
      gagDesc: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.triggerImgUpload = this.triggerImgUpload.bind(this);
  }
  
  componentWillMount() {
    const {dispatch} = this.props;
  }  
  
  handleChange = (event, type) => {
    console.log('hhhh==>', type)
    if (type === "title") {
      this.setState({
        gagTitle: event.target.value,
      });
    } else {
      this.setState({
        gagDesc: event.target.value,
      });      
    }
  };
  
  _handleSubmit(e) {
    const {dispatch} = this.props;
    console.log('oooo==>', this.state.gagTitle)
    var gagsData = {
      gagTitle: this.state.gagTitle,
      gagDesc: this.state.gagDesc,
      gagImg: this.state.imagePreviewUrl
    }
    dispatch(uploadGag(gagsData));  
    // TODO: do something with -> this.state.file
  }
  
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    
    console.log('FILE===>', file);

    reader.onloadend = () => {
      console.log('REDAEr==>', reader.result)
      this.setState({
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  } 
  
  triggerImgUpload() {
    this.refs.imgInput.click();
  }


  render() {
    var items = ["fun", "games", "sports"]
    return (
        <Card className="gagUploadContainer" style={{'margin-top':'68px'}}>
        
            <TextField
            hintText="Gag Title" value={this.state.gagTitle}
             onChange={(e) => {this.handleChange(e, 'title')}}
            /><br />
            <br />
            <TextField
            hintText="Gag Description" value={this.state.gagDesc}
             onChange={(e) => {this.handleChange(e, 'desc')}}
            /><br />
            <input style={{'display': 'none'}} type="file" ref="imgInput" onChange={this._handleImageChange} />
            <RaisedButton label="Upload Image" onClick={this.triggerImgUpload} />
          <img src={this.state.imagePreviewUrl}></img>
          <RaisedButton label="Upload Gag" onClick={this._handleSubmit} />
        </Card> 
    );
  }
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps
)(GagUpload)
