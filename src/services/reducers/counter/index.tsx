import ACTION from "services/constants/actionTypes"
import { IAction } from "services/models"
import { ICounterState } from "services/models/counter"


const initialState: ICounterState = {
  number: 0
}

const counter = (state: ICounterState = initialState, action: IAction): ICounterState => {
  switch (action.type) {
    case ACTION.DECREMENT:
      return {
        ...state,
        number: --state.number
      }
    case ACTION.INCREMENT:
      return {
        ...state,
        number: ++state.number
      }
    case ACTION.RESET:
      return {
        ...state,
        number: 0
      }
    default:
      return state
  }
}

export default counter