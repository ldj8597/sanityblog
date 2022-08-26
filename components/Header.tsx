import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";

const links = [
  { title: "About", target: "/about", accent: false },
  { title: "Contact", target: "/contact", accent: false },
  { title: "Follow", target: "/follow", accent: true },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-5 flex items-center justify-between gap-6">
      {/* Logo */}
      <Link href="/">
        <a>
          <img
            src="https://links.papareact.com/yvf"
            className="w-44 object-contain"
          />
        </a>
      </Link>

      {/* Hamburger */}
      <button className="z-10  md:hidden" onClick={() => setOpen(true)}>
        <div className="relative w-6 h-6">
          <div
            className={clsx("absolute top-0 w-full h-0.5", {
              "bg-white": open,
              "bg-slate-800": !open,
            })}
          />
          <div
            className={clsx("absolute top-2 w-full h-0.5", {
              "bg-white": open,
              "bg-slate-800": !open,
            })}
          />
          <div
            className={clsx("absolute top-4 w-full h-0.5", {
              "bg-white": open,
              "bg-slate-800": !open,
            })}
          />
        </div>
      </button>

      {/* Navigation */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-96 pl-10 pt-7 md:pl-0 md:pt-0 bg-slate-800/40 md:bg-transparent md:h-auto md:w-auto md:static flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between items-start md:items-center md:flex-1",
          {
            "translate-x-full md:translate-x-0": !open,
          }
        )}
      >
        <button
          className="md:hidden flex items-center gap-1"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-6 h-6">
            <div className="absolute w-2/3 h-0.5 top-1/2 bg-white rotate-45" />
            <div className="absolute w-2/3 h-0.5 top-1/2 bg-white -rotate-45" />
          </div>
          <div className="text-white">Close</div>
        </button>
        <nav className=" flex flex-col md:flex-row items-start md:items-center gap-5">
          {links.map((link) => (
            <Link key={link.title} href={link.target}>
              <a
                className={clsx("text-xl text-white", {
                  " md:bg-green-600 md:rounded-full md:px-5 md:py-1":
                    link.accent,
                  "md:text-slate-800": !link.accent,
                })}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </nav>
        <div className=" flex flex-col md:flex-row items-start gap-5 md:items-center">
          <button className="text-xl text-green-200 md:text-green-600 ">
            Sign in
          </button>
          <button className="text-xl text-green-200 md:text-green-600 md:px-5 md:py-1 md:border md:border-green-600 md:rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
