import ACTION from "services/constants/actionTypes";
import { IAction } from "services/models";

const decrement = (): IAction => (
  {
    type: ACTION.DECREMENT
  }
)

const increment = (): IAction => (
  {
    type: ACTION.INCREMENT
  }
)

const reset = (): IAction => (
  {
    type: ACTION.RESET
  }
)

export {
  decrement,
  increment,
  reset,
}