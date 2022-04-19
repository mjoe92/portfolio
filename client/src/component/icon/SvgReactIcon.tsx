import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function SvgReactIcon(props: FontAwesomeIconProps): JSX.Element {
  return (
    <div className="svg-icon">
      <FontAwesomeIcon {...(props = props)} />
    </div>
  );
}
