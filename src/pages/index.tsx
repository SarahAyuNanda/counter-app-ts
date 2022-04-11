import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../components/buttons/primary-button";
import SecondaryButton from "../components/buttons/secondary-button";
import CONSTANTS from "../services/constants";
import { IAppState } from "../services/models";
import * as Action from "../services/actions/counter"
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: IAppState) => state.counter);
  
  const onClickDecrement = () => dispatch(Action.decrement());
  const onClickIncrement = () => dispatch(Action.increment());
  const onClickReset = () => dispatch(Action.reset());

  return (
    <div className='main-page'>
      <h2>{CONSTANTS.TITLE.COUNTER}</h2>
      <div className='main-content'>
        <PrimaryButton label={CONSTANTS.SYMBOL.MINUS} handler={onClickDecrement} />
        <p className='counter-result'>{counter.number}</p>
        <PrimaryButton label={CONSTANTS.SYMBOL.PLUS} handler={onClickIncrement} />
      </div>
      <SecondaryButton label={CONSTANTS.DESCRIPTION.RESET} handler={onClickReset} />
    </div>
  );
};

export default App;