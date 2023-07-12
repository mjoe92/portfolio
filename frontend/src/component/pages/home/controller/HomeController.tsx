import { Component, createRef, RefObject } from "react";

import "../style/home.css";

type IProps = {};

type IState = {};

export default class HomeController extends Component<IProps, IState> {
  private timerId: NodeJS.Timer | undefined | null;
  private myRef: RefObject<unknown>;

  constructor(props: any) {
    super(props);

    // window.addEventListener("mousemove", this.updateDisplay, false);
    // window.addEventListener("mouseenter", this.updateDisplay, false);
    // window.addEventListener("mouseleave", this.updateDisplay, false);
    this.myRef = createRef();
  }

  private updateDisplay = (event: MouseEvent) => {
    console.log(event.pageX);
    console.log(event.pageY);
  };

  handleNvEnter = (event: any) => {
    console.log("Nv Enter:", event);
  };

  componentDidMount = () => {
    // Changing the state after 2 sec
    // from the time when the component
    // is rendered
    // this.nv?.addEventListener("nv-enter", this.handleNvEnter);
    // // Testing
    // setInterval(
    //   () =>
    //     this.nv?.dispatchEvent(
    //       new CustomEvent("nv-enter", { detail: new Date() })
    //     ),
    //   1000
    // );
    // this.timerId = setInterval(() => {
    //   console.log("Trigger!");
    // }, 1000);
  };

  componentWillUnmount() {
    // clearInterval(this.timerId.)
  }

  // private shadow = (): void => {
  //   window.requestAnimationFrame(() => {
  //     return (callback: TimerHandler) => window.setTimeout(callback, 1000);
  //   });

  //   $(() => {
  //     var $shadow = $("#shadow");
  //     var shadowLimit = 200;
  //     var moveEvent =
  //       "ontouchstart" in document.documentElement ? "touchmove" : "mousemove";

  //     (function animloop() {
  //       requestAnimationFrame(animloop);

  //       $(window).bind(
  //         moveEvent,
  //         function (ev: {
  //           originalEvent: { touches: { clientX: number; clientY: number }[] };
  //           clientX: number;
  //           clientY: number;
  //         }) {
  //           var $this = $(this);
  //           var w = $this.width();
  //           var h = $this.height();
  //           var center = { x: w / 2, y: h / 2 };

  //           var evX =
  //             moveEvent == "touchmove"
  //               ? ev.originalEvent.touches[0].clientX
  //               : ev.clientX;
  //           var evY =
  //             moveEvent == "touchmove"
  //               ? ev.originalEvent.touches[0].clientY
  //               : ev.clientY;

  //           var shadowX = (center.x - evX) / 10;
  //           var shadowY = (center.y - evY) / 10;

  //           shadowX = shadowX > shadowLimit ? shadowLimit : shadowX;
  //           shadowX = shadowX < shadowLimit * -1 ? shadowLimit * -1 : shadowX;
  //           shadowY = shadowY > shadowLimit ? shadowLimit : shadowY;
  //           shadowY = shadowY < shadowLimit * -1 ? shadowLimit * -1 : shadowY;

  //           $shadow.css({
  //             textShadow:
  //               Math.ceil(shadowX) +
  //               "px " +
  //               Math.ceil(shadowY) +
  //               "px " +
  //               Math.abs(shadowX * shadowY) / 100 +
  //               "px rgba(0,0,0,0.4)",
  //           });
  //         }
  //       );
  //     })();
  //   });
  // };

  render() {
    return (
      <div className="background-home">
        <h1 className="brand">MJOE</h1>
        <div className="message-box">
          <div className="quote-box">
            <p className="quote protected">
              "A message to anyone who enters my page for any reason"
            </p>
          </div>
          <div className="branch">
            <span className="rounder"></span>
            <span className="line"></span>
            <span className="rounder"></span>
          </div>
          <div className="letter-box">
            <div className="address protected">My Dear Visitor,</div>
            <div className="first-description protected">
              I created this website to present my portfolio of my work and
              passion. The reason I choose this way to segregate constantly from
              any social media platform, which cannot fully guarantee the
              protection of my content or a freely designed interface overview
              about my several topics. The background application is constantly
              being developed, new features will be added from time to time.
              {/** supported by Java server based API */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
