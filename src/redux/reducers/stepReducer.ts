import { StateType } from "../../utils/types"
import { TRACK_STEP } from "../actions/genreActions"

interface ActionInterface {
  type: string;
  payload: string;
}

const initialState = {
  firstStep: false,
  secondStep: false,
  thirdStep: false,
}

const changeStatus = (state:StateType, payload: string) => {
  if(payload === '1') {
    return {
      ...state,
      firstStep: true,
    }
  } else if(payload === '2') {
    return {
      ...state,
      secondStep: true,
    }
  } else {
    return {
      ...state,
      secondStep: true,
    }
  }
}

const stepReducer = (state = initialState, action: ActionInterface) => {
  switch(action.type) {
    case TRACK_STEP:
      return {
        ...changeStatus(state, action.payload)
      }
    default:
      return state;
  }
}

export default stepReducer;