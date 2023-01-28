import { useField } from 'formik';
import './TextInput.scss';

interface TextInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
}
const TextInput = ({
  label,
  required,
  placeholder,
  ...props
}: TextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="textInput">
      <input
        {...field}
        {...props}
        required={required}
        placeholder={placeholder}
        className="textInput__field"
      />
      <label className="textInput__label" htmlFor={props.id || props.name}>
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className="textInput__error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
