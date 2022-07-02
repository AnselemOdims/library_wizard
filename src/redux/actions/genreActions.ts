import { GenreInterface } from "../../utils/types";

// Action Types
export const ADD_GENRE = 'genre/ADD_GENRE';
export const ADD_SUB_GENRE = 'genre/ADD_SUB_GENRE';
export const TRACK_STEP = 'genre/TRACK_STEP';

// Action Creators
export const addGenre = (payload: GenreInterface) => ({
  type: ADD_GENRE,
  payload,
})