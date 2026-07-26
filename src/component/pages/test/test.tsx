import React, { Component } from "react";
import "./test.css";

type IProps = {};
export default class Test extends Component {
  constructor(
    props: IProps
  ) {
    super(props);
  }

  render() {
    return (
      <div className="asdf-container">
        <div className="asdf" id="a1">a1</div>
        <div className="asdf" id="a2">a2</div>
        <div className="asdf" id="a3">a3</div>
        <div className="asdf" id="a4">a4</div>
        <div className="asdf" id="a5">a5</div>
        <div className="asdf" id="a6">a6</div>
      </div>
    );
  }
}
