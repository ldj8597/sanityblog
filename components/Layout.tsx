import React, { ReactNode } from "react";
import Header from "./Header";
import Hero from "./Hero";

interface Props {
  children: ReactNode;
  hasHero?: boolean;
}

function Layout({ children, hasHero = false }: Props) {
  return (
    <div className="max-w-5xl mx-auto container px-5">
      <Header />
      <main>
        {hasHero && <Hero />}
        {children}
      </main>
    </div>
  );
}

export default Layout;
