import { MouseEventHandler } from "react";
import "./style/dropdown.css";

export default function BasicDropdown(
  showDropdown: boolean,
  setShowDropdown: MouseEventHandler<HTMLButtonElement> | undefined,
  items: JSX.Element
): JSX.Element {
  return (
    <div className="dropdown-wrapper">
      <button onClick={setShowDropdown} className="trigger-button"></button>
      <div className={showDropdown ? "active" : ""}>{items}</div>
    </div>
  );
}
