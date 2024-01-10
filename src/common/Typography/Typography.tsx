import React from "react";
import { TypographyType } from "types/index";

export const Typography: React.FC<TypographyType> = ({ children, variant, ...props }) => {
  return (
    <div data-testid={children} className={`${variant} ${props.className}`}>
      {children}
    </div>
  );
};
