import { Component } from "react";
import IUriProps from "./IUriProps";

export default abstract class AFragmentController extends Component<IUriProps> {
  protected constructor(props: IUriProps) {
    super(props);
  }

  public getUrlFragment() {
    return this.props.urlFragment;
  }
}
