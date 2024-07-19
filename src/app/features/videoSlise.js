
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularVideo = createAsyncThunk(
  'getPopularVideo',
  async () => {
    try {
      const API_KEY = import.meta.env.VITE_APPWRITE_KEY; // Assuming environment variable is correctly set up
      const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/videos';

      const response = await axios.get(BASE_URL, {
        params: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          regionCode: 'IN',
          maxResults: 40,
          pageToken: '',
          key: API_KEY,
        },
      });

      console.log("testing",response.data)
      return response.data.items; // Return directly the items array from response.data
    } catch (error) {
      console.error('Error fetching popular videos:', error);
      throw error;
    }
  }
);




const videoSlice = createSlice({
  name: 'video',
  initialState:{
    popularVideos: [],
    loading: false,
    error: null,
  },

  reducers: {
    // Add reducers if needed
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getPopularVideo.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      .addCase(getPopularVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.popularVideos = action.payload; // Assuming action.payload contains fetched videos
      })
      .addCase(getPopularVideo.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message; // Assuming action.error.message contains the error message
      });
  },
});

export default videoSlice.reducer;






