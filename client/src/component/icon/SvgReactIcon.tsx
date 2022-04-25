import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icons: IconDefinition[];
  iconClassName?: string;
  textClassName?: string;
  text?: string;
  startWithIcon?: boolean;
}

export default function SvgReactIcon(props: Props): JSX.Element {
  let iconClassName: string = "svg-icon";
  let textClassName: string = "text";

  if (props.iconClassName) {
    iconClassName = props.iconClassName;
  }
  if (props.textClassName) {
    textClassName = props.textClassName;
  }

  let result: JSX.Element = (
    <div className="svg-icon-series">
      {props.icons.map((image) => {
        return <FontAwesomeIcon className={iconClassName} icon={image} />;
      })}
    </div>
  );

  if (props.text) {
    if (props.startWithIcon) {
      result = (
        <>
          {result}
          <div className={textClassName}>{props.text}</div>
        </>
      );
    } else {
      result = (
        <>
          <div className={textClassName}>{props.text}</div>
          {result}
        </>
      );
    }
  }

  return <div className="svg-extended-icon">{result}</div>;
}
