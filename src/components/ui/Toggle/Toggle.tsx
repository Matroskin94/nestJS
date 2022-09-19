import { ChangeEvent, FC } from "react";
import { CheckboxInput, StyledLabel, ToggleSlider } from "./Toggle.styles";

interface IToggleProps {
  onChange(isChecked: boolean): void;
  isChecked: boolean;
}

export const Toggle: FC<IToggleProps> = ({ onChange, isChecked }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <StyledLabel>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <ToggleSlider />
    </StyledLabel>
  );
};
