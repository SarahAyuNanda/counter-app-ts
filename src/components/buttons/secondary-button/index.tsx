import './index.css';

interface IPropsSecondaryButton {
  label: string,
  handler: () => void,
  disabled?: boolean
}

const SecondaryButton = (props: IPropsSecondaryButton) => (
  <button id='secondary-button' onClick={props.handler} disabled={props.disabled} >
    {props.label}
  </button>
);

SecondaryButton.defaultProps = {
  disabled: false
}

export default SecondaryButton;