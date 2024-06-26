import classnames from 'classnames';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  type: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  type,
  children,
  onClick,
  disabled,
  className
}: ButtonProps) => (
  <button
    role="button"
    type={type}
    className={classnames(`button ${className}`, {
      'button--disabled': disabled
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
