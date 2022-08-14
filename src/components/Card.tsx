import React, { FC, PropsWithChildren, useState } from "react";

export enum cardBorder {
  border = "border",
  light = "light",
}

interface cardProps {
  width: string;
  height: string;
  padding?: string;
  border: cardBorder;
  onClick: (num: number) => void;
}

const Card: FC<PropsWithChildren<cardProps>> = ({
  height,
  padding,
  width,
  border,
  onClick,
  children,
}) => {
  const [state, setState] = useState(0);
  return (
    <div
      onClick={() => {
        onClick(state);
        setState(state + 1);
      }}
      style={{
        width,
        height,
        padding,
        border:
          border === cardBorder.border
            ? "1px solid red"
            : border === cardBorder.light
            ? "2px solid yellow"
            : "none",
        background: "gray",
      }}
    >
      card
      {children}
    </div>
  );
};

export default Card;
