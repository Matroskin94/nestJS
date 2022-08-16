import { FC } from "react";
import { CheckboxInput, StyledLabel, ToggleSlider } from "./Toggle.styles";

export const Toggle: FC<{}> = () => {
  return (
    <StyledLabel>
      <CheckboxInput type="checkbox" />
      <ToggleSlider />
    </StyledLabel>
  );
};
