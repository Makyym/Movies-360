import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingMovies } from "./operations";

interface MoviesState {
    trendingMovies: any[];
    favoritesMovies: any[];
    genres: any[];
    searchList: any[];
    isError: string | null;
    isLoading: boolean;
};

const initialState: MoviesState = {
    trendingMovies: [],
    favoritesMovies: [],
    genres: [],
    searchList: [],
    isError: null,
    isLoading: false,
};


const handlePending = (state: MoviesState): void => {
    state.isLoading = true;
    state.isError = null;
};

const handleRejected = (state: MoviesState, action: { payload: string }): void => {
    state.isLoading = false;
    state.isError = action.payload;
};

const slice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchTrendingMovies.pending, handlePending)
        .addCase(fetchTrendingMovies.rejected, handleRejected)
        .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.trendingMovies = action.payload.results;
        })
    },
});

export const moviesReducer = slice.reducer;