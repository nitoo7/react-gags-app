import axios from 'axios';
import bluebird from 'bluebird';
let gagInfoUrl = ''

const dispatchHeroData = () => {
  return {
    type: 'FETCH_GAG_INFO',
    response: {'gagInfo': {
      'gagId': '1',
      'gagName': 'gag...1',
      'gagDesc': 'gag...1....desc',
      'gagImg': 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg',
      'likes': 5,
      'dislikes': 6
    }}
  }
}


export function fetchGagInfo(matchData) {
  return (dispatch) => {  
    return dispatch({
    type: 'FETCH_GAG_INFO',
    response: {
        'gagInfo': {
        'gagId': '1',
        'gagName': 'gag...1',
        'gagDesc': 'gag...1....desc',
        'gagImg': 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg',
        'likes': 5,
        'dislikes': 6
      }
    }
  });
  }
}

export function fetchGagsData() {
  
  console.log('AAAAAAAAAAAAAAAAAAA')
  return (dispatch) => {  
    return dispatch({
        type: 'FETCH_GAGS_DATA',
        response: {
          'gagsData': [
             {
               'gagId': '1',
               'gagName': 'gag...1',
               'gagDesc': 'gag...1....desc',
               'gagImg': 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg',            
               'likes': 5,
               'dislikes': 6
             },
             {
               'gagId': '',
               'gagName': 'gag...2',
               'gagDesc': 'gag...2....desc',
               'gagImg': 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg',            
               'likes': 3,
               'dislikes': 4
             }                   
         ]}     
      })
    };
  }
