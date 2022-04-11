import { ICounterState } from "./counter"

export interface IAction {
  type: string
}

export interface IAppState {
  counter: ICounterState
}