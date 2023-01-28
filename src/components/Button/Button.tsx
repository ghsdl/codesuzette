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
    type={type}
    className={`button ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
