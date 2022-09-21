import { FC } from "react";
import styled from "styled-components";

interface IDivider {
  isVertical?: boolean;
  color?: string;
  height?: string; // height in pixels
  marginRight?: string;
  marginLeft?: string;
}

const DividerStyles = styled.div<IDivider>`
  height: ${({ height }) => height};
  border-left: ${({ color }) => `1px solid ${color}`};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
`;

export const Divider: FC<IDivider> = ({
  isVertical = true,
  height = "auto",
  color = "black",
  marginRight = "0px",
  marginLeft = "0px",
}) => {
  return (
    <DividerStyles
      isVertical={isVertical}
      height={height}
      color={color}
      marginRight={marginRight}
      marginLeft={marginLeft}
    />
  );
};
