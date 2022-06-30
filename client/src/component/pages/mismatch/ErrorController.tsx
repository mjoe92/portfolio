import { FC } from "react";
import { PageFragment } from "../../../router/EPageFragment";

import "./style/mismatch.css";

export const ErrorController: FC = () => {
  return (
    <div className="background-mismatch">
      <div className="mismatch">
        <div className="url-code">404</div>
        <p className="message">The requested URL was not found.</p>
        <p className="return-link"><a href={PageFragment.HOME}>Return to main page</a></p>
      </div>
    </div>
  );
};
