import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import SvgReactIcon from "../../icon/SvgReactIcon";

import "./style/mismatch.css";

export const ErrorController: FC = () => {
  return (
    <div className="background-mismatch">
      <div className="mismatch">
        <div className="url-code">404</div>
        <p className="message">The requested URL was not found.</p>
        <p className="return-link"><a href="http://localhost:3001/home">Return to main page</a></p>
      </div>
    </div>
  );
};
