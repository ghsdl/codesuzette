import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  type: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
}

const Button = ({ type, children, onClick, className }: ButtonProps) => (
  <button type={type} className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
