
import { Button } from "@mui/material";

function CustomButton({
  children,
  onClick,
  type = "button",
  color = "primary",
  variant = "contained",
  fullWidth = true,
  disabled = false,
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
