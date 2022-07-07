import { Component } from "react";
import IUriProps from "./IUriProps";

export default abstract class AFragmentController extends Component<IUriProps> {
  constructor(props: IUriProps) {
    super(props);
  }

  /**
   * getUrlFragment
   */
  public getUrlFragment() {
    return this.props.urlFragment;
  }
}