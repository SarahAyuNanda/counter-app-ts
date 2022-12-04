import { useTranslation } from "react-i18next";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BaseButton from "components/button/BaseButton";
import LanguageToggle from "components/toggle/LanguageToggle";
import { IAppState } from "services/models";
import { decrement, increment, reset } from "services/reducers/counter";
import './index.css';

const App = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { number } = useSelector(({ counter }: IAppState) => ({
    number: counter.number
  }), shallowEqual);

  const disableReset = number === 0;

  const onClickDecrement = () => dispatch(decrement());
  const onClickIncrement = () => dispatch(increment());
  const onClickReset = () => dispatch(reset());

  return (
    <div className='main-page'>
      <LanguageToggle />
      <h2>{t('counter')}</h2>
      <div className='main-content'>
        <BaseButton label={t('notation.minus')} onClick={onClickDecrement} variant={'primary'} />
        <p className='counter-result'>{number}</p>
        <BaseButton label={t('notation.plus')} onClick={onClickIncrement} variant={'primary'} />
      </div>
      <BaseButton label={t('reset')} onClick={onClickReset} variant={'secondary'} disabled={disableReset} />
    </div>
  );
};

export default App;