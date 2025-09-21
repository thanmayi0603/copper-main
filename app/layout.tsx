// ⭐️ MOST IMPORT : Pulls in style from globals.css onto
// your NextJS
import "./globals.css";

import React, { PropsWithChildren } from "react";

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

// ⭐️ MOST IMPORT : Absolutely must export a default component
// from within this file
export default RootLayout;
