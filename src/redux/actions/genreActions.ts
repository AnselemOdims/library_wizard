import { GenreInterface, SubGenreInterface } from "../../utils/types";

// Action Types
export const ADD_GENRE = 'genre/ADD_GENRE';
export const SELECT_SUB_GENRE = 'subGenre/SELECT_SUB_GENRE';
export const CREATE_SUB_GENRE = 'subGenre/CREATE_SUB_GENRE';
export const TRACK_STEP = 'genre/TRACK_STEP';
export const RESET_STATE = 'genre/RESET_STATE';

// Action Creators
export const addGenre = (payload: GenreInterface) => ({
  type: ADD_GENRE,
  payload,
});

export const trackStep = (payload: string) => ({
  type: TRACK_STEP,
  payload,
});

export const selectSubGenre = (payload:SubGenreInterface) => ({
  type: SELECT_SUB_GENRE,
  payload,
});

export const createSubGenre = (payload:SubGenreInterface) => ({
  type: CREATE_SUB_GENRE,
  payload,
});

export const handleReset = () => ({
  type: RESET_STATE
})