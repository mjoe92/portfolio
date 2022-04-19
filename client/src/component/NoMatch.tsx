import React, { FC } from "react";

export const NoMatch: FC = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <p>WRONG URL (ERROR CODE: 400)!</p>
    </main>
  );
};
