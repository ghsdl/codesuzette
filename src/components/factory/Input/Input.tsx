import './Input.scss';
import Icon from '../../factory/Icon/Icon';
import { BiSearchAlt } from 'react-icons/bi';

interface InputProps {
  type: 'search';
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  type,
  value,
  placeholder,
  onChange,
  className
}: InputProps) => (
  <div className={`input ${className}`}>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="input__field"
    />
    <Icon icon={<BiSearchAlt />} className="input__icon" />
  </div>
);

export default Input;
