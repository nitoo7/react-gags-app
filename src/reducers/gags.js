// Reducers for login module

const gags = (state = {
  gagsData: [],
  gagInfo: {}
  }, action) => {
    console.log('REDUCER===>', action.response)
    switch (action.type) {
      case 'FETCH_GAGS_DATA':
        return {...state,
          gagsData: action.response.gagsData,
        }
      case 'FETCH_GAG_INFO':
            console.log('BBBBBBBB', action.response)
        return {...state,
          gagInfo: action.response,
        }   
      default:
        return state
    }
}

export default gags;
