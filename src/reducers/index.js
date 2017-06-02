// Combine all reducers here. Maybe each container can contain different reducer?

import { combineReducers } from 'redux'
import gags from './gags'

const rootReducer = combineReducers({
  gags
})

export default rootReducer
