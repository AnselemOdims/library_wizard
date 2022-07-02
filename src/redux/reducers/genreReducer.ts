import { GenreInterface, SubGenreInterface } from '../../utils/types';
import { ADD_GENRE, addGenre } from '../actions/genreActions';

interface ActionInterface {
  type: string;
  payload: GenreInterface
}

const initialState: GenreInterface = {
  id: 0,
  name: '',
  subgenres: []
}

const genreReducer = (state=initialState, action: ActionInterface) => {
  switch(action.type) {
    case ADD_GENRE:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}

export default genreReducer;
