import PrimaryButton from "../components/buttons/primary-button";
import SecondaryButton from "../components/buttons/secondary-button";
import CONSTANTS from "../services/constants";
import './index.css';

const App = () => {
  const onClickDecrement = () => console.log('decrement');
  const onClickIncrement = () => console.log('increment');
  const onClickReset = () => console.log('reset');

  return (
    <div className='main-page'>
      <h2>{CONSTANTS.TITLE.COUNTER}</h2>
      <div className='main-content'>
        <PrimaryButton label={CONSTANTS.SYMBOL.MINUS} handler={onClickDecrement} />
        <p className='counter-result'>0</p>
        <PrimaryButton label={CONSTANTS.SYMBOL.PLUS} handler={onClickIncrement} />
      </div>
      <SecondaryButton label={CONSTANTS.DESCRIPTION.RESET} handler={onClickReset} />
    </div>
  );
};

export default App;