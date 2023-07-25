import React, { Component } from "react";
import "./test.css";

type IProps = {};
export default class Test extends Component {
  constructor(
    props: IProps,
    private buttonRef: React.RefObject<HTMLButtonElement>
  ) {
    super(props);
    this.buttonRef = React.createRef();
  }

  private createShadowMouseMove(): void {
    const btn = this.buttonRef.current;
    if (btn !== null) {
      btn.onmousemove = function (mouseEvent: MouseEvent) {
        if (btn !== null) {
          const x = mouseEvent.pageX - btn.offsetLeft;
          const y = mouseEvent.pageY - btn.offsetTop;
          btn.style.setProperty("--x", x + "px");
          btn.style.setProperty("--y", y + "px");
        }
      };
    }
  }

  render() {
    this.createShadowMouseMove();
    return (
      <h1 id="shadow">
        <span className="top">
          somewhat <span className="white">creepy when your</span>
        </span>
        <div className="shadow">SHADOW</div>
        <span className="bottom">
          follows <span className="us">you & me</span> around
        </span>
      </h1>
    );
  }
}
