import PrimaryButton from "../components/buttons/primary-button";
import SecondaryButton from "../components/buttons/secondary-button";
import './index.css';

const App = () => {
  const onClickDecrement = () => console.log('decrement');
  const onClickIncrement = () => console.log('increment');
  const onClickReset = () => console.log('reset');

  return (
    <div className='main-page'>
      <h2>Counter</h2>
      <div className='main-content'>
        <PrimaryButton label='-' handler={onClickDecrement} />
        <p className='counter-result'>0</p>
        <PrimaryButton label='+' handler={onClickIncrement} />
      </div>
      <SecondaryButton label='Reset' handler={onClickReset} />
    </div>
  );
};

export default App;