import { Component } from "react";

import "../style/home.css";

export default class HomeController extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="controller">
        <h1 className="brand">MJOE</h1>
        <div className="quote-message">
          <div className="quote-box">
            <div className="quote">"A message to anyone who enters my page for any reason"</div>
          </div>
          <div className="timeline">
            <span className="branch-up"></span>
            <span className="rounder"></span>
            <span className="branch-down"></span>
          </div>
          <div className="letter-box">
            <div className="address">My Dear Visitor,</div>
            <div className="first-description message">
              I created this website to present my portfolio of my work and passion.
              The reason I choose this way to segregate constantly from any social media
              platform, which cannot fully guarantee the protection of my content or a freely
              designed interface overview about my several topics. This also gives a good practice
              to code in Typescript with React framework supported by Java server based API.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
