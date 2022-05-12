import { FC } from "react";

import "./style/mismatch.css";

export const MismatchController: FC = () => {
  const getPublicUrl = (url: string): string => {
    const slash = url[0] == "/" ? "" : "/";

    return process.env.PUBLIC_URL + slash + url;
  };

  return (
    <div className="mismatch">
      <div className="img-box">
        <img src={getPublicUrl("images/profile/like_robert_de_niro.png")} />
      </div>
      <p>
        Error code: <b>404</b>
      </p>
      <p>Requested URL was not found, you cannot reach this page!</p>
      <p>
        Use the navigation bar or return to{" "}
        <a href="http://localhost:3001/">main</a> page...!
      </p>
    </div>
  );
};
