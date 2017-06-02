// Reducers for login module

const gags = (state = {
  gagsData: [],
  gagInfo: {}
  }, action) => {
    console.log('REDUCER===>', action)
    switch (action.type) {
      case 'FETCH_GAGS_DATA':
      console.log('BBBBBBBB', action.response)
        return {...state,
          gagsData: action.response.gagsData,
        }
      case 'FETCH_GAG_INFO':
        return {...state,
          gagInfo: action.response.gagInfo,
        }   
      default:
        return state
    }
}

export default gags;
