import ACTIONS from "../../constants/actionTypes";
import { IAction } from "../../models"
import { ICounterState } from "../../models/counter"

const initialState: ICounterState = {
  number: 0
}

const counter = (state: ICounterState = initialState, action: IAction): ICounterState => {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return {
        ...state,
        number: --state.number
      }
    case ACTIONS.INCREMENT:
      return {
        ...state,
        number: ++state.number
      }
    case ACTIONS.RESET:
      return {
        ...state,
        number: 0
      }
    default:
      return state
  }
}

export default counter