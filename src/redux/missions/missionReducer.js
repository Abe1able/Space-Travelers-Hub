import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_MISSION = 'redux/missions/mession';
const apiLink = 'https://api.spacexdata.com/v3/missions';

const renderMission = (res) => res.map((arr) => {
  const { mission_id: missionId, mission_name: missionName, description } = arr;
  return {
    missionId, missionName, description,
  };
});

export const fetchMissions = createAsyncThunk(GET_MISSION, async () => {
  const response = await fetch(apiLink);
  const data = await response.json();
  return renderMission(data);
});

const missionSlice = createSlice({
  name: 'mission',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      let items = state;
      items = action.payload;
      return items;
    });
  },
});

export default missionSlice.reducer;
