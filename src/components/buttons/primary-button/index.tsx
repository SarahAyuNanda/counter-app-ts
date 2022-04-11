import PropTypes from 'prop-types';
import './index.css';

interface IPropsPrimaryButton {
  label?: string,
  handler?: () => void
}

const PrimaryButton = (props: IPropsPrimaryButton) => (
  <button id='primary-button' onClick={props.handler}>
    {props.label}
  </button>
);

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default PrimaryButton;