import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import BaseButton from "components/button/BaseButton";
import LanguageToggle from "components/toggle/LanguageToggle";
import { IAppState } from "services/models";
import * as Action from "services/actions/counter"
import './index.css';

const App = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counter = useSelector((state: IAppState) => state.counter);

  const disableReset = counter.number === 0;

  const onClickDecrement = () => dispatch(Action.decrement());
  const onClickIncrement = () => dispatch(Action.increment());
  const onClickReset = () => dispatch(Action.reset());

  return (
    <div className='main-page'>
      <LanguageToggle />
      <h2>{t('counter')}</h2>
      <div className='main-content'>
        <BaseButton label={t('notation.minus')} onClick={onClickDecrement} variant={'primary'} />
        <p className='counter-result'>{counter.number}</p>
        <BaseButton label={t('notation.plus')} onClick={onClickIncrement} variant={'primary'} />
      </div>
      <BaseButton label={t('reset')} onClick={onClickReset} variant={'secondary'} disabled={disableReset} />
    </div>
  );
};

export default App;