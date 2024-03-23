import React from "react";

import { Icon } from "../Icon/Icon";
import { Button, Text } from "./FilterButton.styled";

export const FilterButton = (props) => {
  const { iconid, text, width = 32, height = 32 } = props;
  return (
    <Button type="button">
      <Icon iconid={iconid} width={width} height={height} />
      <Text>{text}</Text>
    </Button>
  );
};
