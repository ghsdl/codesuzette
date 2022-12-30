import Paragraph from '../Paragraph/Paragraph';
import Checkbox from '../Checkbox/Checkbox';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import './Checkboxes.scss';

type Checkbox = {
  label: string;
  name: string;
};

type Values = {
  label: string;
  name: string;
}[];

interface CheckboxesProps {
  checkboxes: Checkbox[];
  values: Values;
  onChange: (values: Values) => void;
  label: string;
  className?: string;
  iconClassName?: string;
}

const Checkboxes = ({
  checkboxes,
  onChange,
  values,
  label,
  className
}: CheckboxesProps) => {
  return (
    <div className={`checkboxes ${className}`}>
      <Paragraph className="checkboxes__label">{label}</Paragraph>
      {checkboxes.map((checkbox, index) => {
        const checked = isEmpty(
          values.find((value) => isEqual(value, checkbox))
        );
        return (
          <Checkbox
            key={index}
            label={get(checkbox, 'label', '')}
            name={get(checkbox, 'name', '')}
            icon={get(checkbox, 'icon', '')}
            checked={!checked}
            onChange={() => {
              if (checked) {
                onChange([...values, checkbox]);
              } else {
                onChange(values.filter((value) => !isEqual(value, checkbox)));
              }
            }}
            iconClassName={get(checkbox, 'iconClassName', 'icon--purple')}
          />
        );
      })}
    </div>
  );
};

export default Checkboxes;
