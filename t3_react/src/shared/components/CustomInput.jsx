
import { TextField } from "@mui/material";

function CustomInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error = false,
  helperText = "",
}) {
  return (
    <TextField
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
      size="small"
    />
  );
}

export default CustomInput;
