import React from "react";
import { TypographyType } from "types/index";

export const Typography: React.FC<TypographyType> = ({ tag = "div", children, variant }) => {
  const Component = tag;
  return <Component className={variant}>{children}</Component>;
};
