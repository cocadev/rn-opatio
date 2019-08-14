import { combineReducers } from 'redux'
import common from './common'
import job from './job'
import lotes from './lotes'

export default combineReducers({
  common,
  job,
  lotes
})