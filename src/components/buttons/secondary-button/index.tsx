import PropTypes from 'prop-types';
import './index.css';

interface IPropsSecondaryButton {
  label?: string,
  handler?: () => void,
  disabled?: boolean
}

const SecondaryButton = (props: IPropsSecondaryButton) => (
  <button id='secondary-button' onClick={props.handler} disabled={props.disabled} >
    {props.label}
  </button>
);

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

SecondaryButton.defaultProps = {
  disabled: false
}

export default SecondaryButton;