import { useState, useEffect, useRef, MutableRefObject } from 'react';
import Icon from '../Icon/Icon';
import { BsCheck } from 'react-icons/bs';
import classnames from 'classnames';
import './Checkbox.scss';

interface CheckboxProps {
  name: string;
  label: string;
  icon?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  className?: string;
  iconClassName?: string;
}

const Checkbox = ({
  checked,
  name,
  label,
  icon,
  onChange,
  className,
  iconClassName
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const inputElement = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className={`checkbox ${className}`}>
      <div className="checkbox__container">
        <div
          className={classnames('checkbox__box', {
            'checkbox__box--checked': checked
          })}
          onClick={() => {
            inputElement.current.click();
            setIsChecked(!isChecked);
          }}
        >
          {isChecked && (
            <Icon icon={<BsCheck />} className="checkbox__isChecked" />
          )}
        </div>
        <input
          type="checkbox"
          ref={inputElement}
          name={name}
          id={name}
          onChange={onChange}
          checked={isChecked}
          className="checkbox__input"
        />
        {icon && <Icon icon={icon} className={iconClassName} />}
        <label className="checkbox__label" htmlFor={name}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
