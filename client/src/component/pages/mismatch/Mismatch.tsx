import { FC } from "react";

import "./style/mismatch.css";

export const NoMatch: FC = () => {
  return (
    <>
      <p>
        Error code: <b>404</b>
      </p>
      <p>Requested URL was not found in the server!</p>
      <p>
        Return to <a href="http://localhost:3001/">main</a> page...
      </p>
    </>
  );
};
