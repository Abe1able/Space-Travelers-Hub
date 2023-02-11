import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missionReducer';
import rocketSlice from './rocketslice';

const reducer = combineReducers({
  rockets: rocketSlice,
  mission: missionReducer,
});
const store = configureStore({
  reducer,
});
export default store;
