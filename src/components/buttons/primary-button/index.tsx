import './index.css';

interface IPropsPrimaryButton {
  label: string,
  handler: () => void
}

const PrimaryButton = (props: IPropsPrimaryButton) => (
  <button id='primary-button' onClick={props.handler}>
    {props.label}
  </button>
);

export default PrimaryButton;