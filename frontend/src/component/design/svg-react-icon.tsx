import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  icons: IconDefinition[];
  key: string;
  iconClassName?: string;
  textClassName?: string;
  description?: React.JSX.Element;
  startWithIcon?: boolean;
}

export default function SvgReactIcon(props: Props): React.JSX.Element {
  let iconClassName: string = "svg-icon";
  let textClassName: string = "text-box";

  if (props.iconClassName) {
    iconClassName = props.iconClassName;
  }
  if (props.textClassName) {
    textClassName = props.textClassName;
  }

  let result: React.JSX.Element = (
    <div className="svg-icon-box">
      { props.icons.map((image) => {
        return (
          <FontAwesomeIcon
            key={ image.iconName.toString() }
            className={ iconClassName }
            icon={ image }
          />
        );
      }) }
    </div>
  );

  if (props.description) {
    if (props.startWithIcon) {
      result = (
        <>
          { result }
          <div className={ textClassName }>{ props.description }</div>
        </>
      );
    } else {
      result = (
        <>
          <div className={ textClassName }>{ props.description }</div>
          { result }
        </>
      );
    }
  }

  return <div className="svg-extended-icon">{ result }</div>;
}