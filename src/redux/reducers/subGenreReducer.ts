import { SubGenreInterface } from '../../utils/types';
import 
  { RESET_STATE,
SELECT_SUB_GENRE } 
  from '../actions/genreActions';


interface SubGenreReducerType extends SubGenreInterface {
  addNew: boolean
}

interface ActionInterface {
  type: string;
  payload: SubGenreReducerType
}

const initialState: SubGenreReducerType = {
  id: 0,
  name: '',
  isDescriptionRequired: false,
  addNew: false
}

const subGenreReducer = (state=initialState, action: ActionInterface) => {
  switch(action.type) {
    case SELECT_SUB_GENRE:
      return { ...state, ...action.payload }
    case RESET_STATE:
      return { ...initialState }
    default:
      return state;
  }
}

export default subGenreReducer;
