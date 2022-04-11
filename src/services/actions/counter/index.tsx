import ACTIONS from "../../constants/actionTypes";
import { IAction } from "../../models";

export const decrement = ():IAction => (
  {
    type: ACTIONS.DECREMENT
  }
)

export const increment = ():IAction => (
  {
    type: ACTIONS.INCREMENT
  }
)

export const reset = ():IAction => (
  {
    type: ACTIONS.RESET
  }
)