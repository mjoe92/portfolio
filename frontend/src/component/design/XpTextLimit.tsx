import { FC, useLayoutEffect, useRef, useState } from "react";
import { Constants } from "../../utils/Constants";

interface IProps {
  leftPos: number;
}

export const XpTextLimit: FC<IProps> = ({ leftPos }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // setWidth(divRef.current.offsetWidth);
  }, []);

  let limitPos = (left: number, width: number): string => {
    return left - width / 2 + Constants.PERCENT;
  };

  return (
    <>
      <div className="xp-bar" style={{ width: limitPos(leftPos, width) }}></div>
      <div
        className="xp-limit"
        style={{ left: limitPos(leftPos, width) }}
      ></div>
      <div
        className="xp-time-elapsed"
        style={{ left: limitPos(leftPos, width) }}
      >
        3 YEARS 12 MONTHS
      </div>
    </>
  );
};
