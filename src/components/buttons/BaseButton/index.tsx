import clsx from "clsx";
import "./index.css";

type Variants = 'primary' | 'secondary';
type Sizes = 'small' | 'normal' | 'large';

interface IPropsBaseButton {
  variant: Variants,
  size?: Sizes,
  label: string,
  disabled?: boolean,
  onClick: () => void,
}

const BaseButton = (props: IPropsBaseButton) => {
  const styles = clsx(
    'base',
    props.variant,
    props.size,
  )

  return (
    <button
      type="button"
      onClick={props.onClick}
      className={styles}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  )
};

BaseButton.defaultProps = {
  disabled: false,
  size: 'normal'
}

export default BaseButton;