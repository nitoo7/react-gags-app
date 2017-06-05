import axios from 'axios';
import bluebird from 'bluebird';
let gagInfoUrl = ''

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function fetchGagInfo(matchData) {
  return (dispatch) => {  
    console.log('HEEEEEEEEEEEEEEEEEE')
    axios.get('http://10.4.0.48:3000/getGags?id=57f3a561dcba0f79a91e234b').then((response)=> {
      return dispatch({
        type: 'FETCH_GAG_INFO',
        response: response.data
      });
    })
  }
}

export function fetchGagsData() {
      console.log('HEEEEEEEEEEEEEEEEEE')
  return (dispatch) => {  
    axios.get('http://10.4.0.48:3000/getGags').then((response)=> {
      return dispatch({
        type: 'FETCH_GAGS_DATA',
        response: {'gagsData': response.data}
      });
    })
  }
}

export function uploadGag(gagData) {
  console.log('nit==>', gagData)
  return (dispatch) => {  
    axios.post('http://10.4.0.48:3000/addGags',gagData).then((response)=> {
      console.log('GA==>', response)
      // return dispatch({
      //   type: 'FETCH_GAGS_DATA',
      //   response: {'gagsData': response}
      // });
    })
  }  
}
