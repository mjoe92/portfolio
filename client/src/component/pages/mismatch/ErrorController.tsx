import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import SvgReactIcon from "../../icon/SvgReactIcon";

import "./style/mismatch.css";

export const ErrorController: FC = () => {
  const getPublicUrl = (url: string): string => {
    const slash = url[0] == "/" ? "" : "/";

    return process.env.PUBLIC_URL + slash + url;
  };

  return (
    <div className="mismatch">
      <SvgReactIcon
        icons={[faLinkSlash]}
        description={
          <p>
            <b>Error code:</b> <em>404</em>
          </p>
        }
        startWithIcon={true}
      />
      <p>
        <b>Cause:</b> Requested URL was not found, you cannot reach this page!
      </p>
      <p>
        <b>Solution:</b> Use the <em>navigation bar</em> or{" "}
        <em>
          return to <a href="http://localhost:3001/">main</a> page
        </em>
        ...!
      </p>
    </div>
  );
};
