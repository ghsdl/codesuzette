import './ButtonAlt.scss';

interface ButtonAltProps {
  children: React.ReactNode;
  type: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const ButtonAlt = ({
  type,
  children,
  onClick,
  disabled,
  className
}: ButtonAltProps) => (
  <button
    role="button"
    type={type}
    className={`buttonAlt ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default ButtonAlt;
