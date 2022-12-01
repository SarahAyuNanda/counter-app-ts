import ACTIONS from "services/constants/actionTypes";
import { IAction } from "services/models";

const decrement = (): IAction => (
  {
    type: ACTIONS.DECREMENT
  }
)

const increment = (): IAction => (
  {
    type: ACTIONS.INCREMENT
  }
)

const reset = (): IAction => (
  {
    type: ACTIONS.RESET
  }
)

export {
  decrement,
  increment,
  reset,
}