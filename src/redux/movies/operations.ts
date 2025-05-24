import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const ApiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTg1MWIyMTk1YjhhNzRkYjBmOTUxMDBiZWMzMGYwYyIsIm5iZiI6MTczMjMwNTkzOC43Njg2MDc5LCJzdWIiOiI2NzQwZDY0OTdiODI1ZTY4NWI0ZTM0NGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BvLD0BrP_sxDoxHi2VLwyZtPfx5-7ST-DwBxt94InVE';

const options = {
    headers: {
        Authorization: `Bearer ${ApiToken}`
    }
};

interface Movie {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

interface TrendingMoviesResponse {
    results: Movie[];
    page: number;
    total_pages: number;
    total_results: number;
};

export const fetchTrendingMovies = createAsyncThunk<
  TrendingMoviesResponse, // Return type for a successful response
  void,                   // No argument expected
  { rejectValue: string } // Custom error message type for reject
>(
    'movies/Trends',
    async (_, thunkAPI) => {
        try {
        const response: AxiosResponse<TrendingMoviesResponse> = await axios.get(
            'trending/movie/day?language=en-US', options
        );
        console.log(response.data);
        return response.data;
        } catch (error) {
        let errorMessage = 'Failed to fetch trending movies';
        if (axios.isAxiosError(error)) {
            errorMessage = (error.response?.data as any)?.message || error.message;
        }
        return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);