import { StyledInput, StyledTextarea, Label } from "./input.style";

const Input = ({
  name,
  placeholder,
  value,
  onChange,
  isTextarea = false,
  label,
}) => {
  const InputField = isTextarea ? StyledTextarea : StyledInput;

  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputField
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
