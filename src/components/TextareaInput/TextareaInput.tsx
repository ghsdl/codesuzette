import { useField } from 'formik';
import './TextareaInput.scss';

interface TextareaInputProps {
  placeholder: string;
  label: string;
  name: string;
  id: string;
  rows: number;
  cols: number;
  required?: boolean;
}
const TextareaInput = ({
  label,
  required,
  rows,
  cols,
  ...props
}: TextareaInputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="textareaInput">
      <textarea
        className="textareaInput__field"
        required={required}
        {...field}
        {...props}
        rows={rows}
        cols={cols}
      />
      <label className="textareaInput__label" htmlFor={props.id || props.name}>
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className="textareaInput__error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextareaInput;
