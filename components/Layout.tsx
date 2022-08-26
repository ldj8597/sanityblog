import React, { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="max-w-5xl mx-auto container px-5">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
