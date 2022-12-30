import './Icon.scss';

interface IconProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Icon = ({ icon, onClick, className }: IconProps) => (
  <div className={`icon ${className}`} onClick={onClick}>
    {icon}
  </div>
);

export default Icon;
