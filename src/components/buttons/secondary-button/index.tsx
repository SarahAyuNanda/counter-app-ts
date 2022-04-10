import PropTypes from 'prop-types';

interface IPropsSecondaryButton {
  label?: string,
  handler?: () => void
}

const SecondaryButton = (props: IPropsSecondaryButton) => (
  <button id='secondary-button' onClick={props.handler}>
    {props.label}
  </button>
);

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default SecondaryButton;