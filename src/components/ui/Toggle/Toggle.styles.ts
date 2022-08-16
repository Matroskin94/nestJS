import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 18px;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4d4545;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 17px;

  &:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 4px;
    bottom: 2px;
    background-color: #a5c9ca;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const CheckboxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${ToggleSlider} {
    background-color: #e7f6f2;
  }
  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }
  &:focus + ${ToggleSlider} {
    box-shadow: 0 0 1px #e7f6f2;
  }
`;
