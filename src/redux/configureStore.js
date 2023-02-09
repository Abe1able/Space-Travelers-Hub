import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionReducer';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;