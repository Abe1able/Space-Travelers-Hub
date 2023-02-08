import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ROCKET = "GET_ROCKET";

const initialState = {
  rockets: [],
  isLoading: false,
};
export const fetchRockets = createAsyncThunk(GET_ROCKET, async () => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");
    const responseApi = [];
    response.data.forEach((data) => {
      const {
        id,
        rocket_name: rocketName,
        description,
        flickr_images: flickrImages,
      } = data;

      const newRocket = {
        id,
        rocketName,
        description,
        flickrImages,
        reserved: false,
      };
      responseApi.push(newRocket);
    });
    return responseApi;
  } catch (error) {
    return error;
  }
});

const rocketSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    booking: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      }),
    }),
    cancelBooking: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      }),
    }),
  },

  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      state.rockets = action.payload;
      state.isLoading = false;
    },
    [fetchRockets.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchRockets.pending]: (state) => {
      state.isLoading = true;
    },
  },
});
export const { booking, cancelBooking } = rocketSlice.actions;
export default rocketSlice.reducer;
