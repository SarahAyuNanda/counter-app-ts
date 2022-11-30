import { useDispatch, useSelector } from "react-redux";
import BaseButton from "../components/buttons/BaseButton";
import CONSTANTS from "../services/constants";
import { IAppState } from "../services/models";
import * as Action from "../services/actions/counter"
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: IAppState) => state.counter);

  const disableReset = counter.number === 0;

  const onClickDecrement = () => dispatch(Action.decrement());
  const onClickIncrement = () => dispatch(Action.increment());
  const onClickReset = () => dispatch(Action.reset());

  return (
    <div className='main-page'>
      <h2>{CONSTANTS.TITLE.COUNTER}</h2>
      <div className='main-content'>
        <BaseButton label={CONSTANTS.SYMBOL.MINUS} onClick={onClickDecrement} variant={'primary'} />
        <p className='counter-result'>{counter.number}</p>
        <BaseButton label={CONSTANTS.SYMBOL.PLUS} onClick={onClickIncrement} variant={'primary'} />
      </div>
      <BaseButton label={CONSTANTS.DESCRIPTION.RESET} onClick={onClickReset} variant={'secondary'} disabled={disableReset} />
    </div>
  );
};

export default App;