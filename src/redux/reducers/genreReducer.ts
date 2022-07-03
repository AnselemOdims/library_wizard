import { GenreInterface, StateType, SubGenreInterface } from '../../utils/types';
import { ADD_GENRE, CREATE_SUB_GENRE, RESET_STATE } from '../actions/genreActions';

interface NewGenreInterface {
  id?: number,
  name?: string,
  subgenres?: NewSubgenreInterface[]
}
interface ActionInterface {
  type: string;
  payload: NewGenreInterface
}

const initialState: NewGenreInterface = {
  id: 0,
  name: '',
  subgenres: [{
    id: 0,
    name: '',
    isDescriptionRequired: false,
  }]
}

interface NewSubgenreInterface {
  id?: number;
  name?: string;
  isDescriptionRequired?: boolean;
}

const addSubgenre = (state:NewGenreInterface, payload: NewSubgenreInterface) => {
  if(Array.isArray(state.subgenres)){
    const newItem = { ...payload }
    return { 
      ...state,
      subgenres: [
        ...state.subgenres,
        newItem
      ]
    };
  }
}

const genreReducer = (state=initialState, action: ActionInterface): NewGenreInterface => {
  switch(action.type) {
    case ADD_GENRE:
      return { ...state, ...action.payload }
    case CREATE_SUB_GENRE:
      return { ...addSubgenre(state, action.payload)}
    case RESET_STATE:
      return { ...initialState }
    default:
      return state;
  }
}

export default genreReducer;
