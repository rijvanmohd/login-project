// external imports
import { combineReducers } from 'redux'

// reducers import
import DetailReducer from './detail'

export default combineReducers({
  detail: DetailReducer,
})
