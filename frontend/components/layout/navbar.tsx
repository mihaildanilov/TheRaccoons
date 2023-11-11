"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { LanguageChoiceDropDownMenu } from "../language-choice-dropdown";

import { Button } from "../ui/button";
import Link from "next/link";
interface NavbarProps {
  navLinks: {
    route: string;
    path: string;
  }[];
}

export default function Navbar({ navLinks }: NavbarProps) {
  const [navbar, setNavbar] = useState(false);
  const handleClick = async () => {
    setNavbar(false);
  };

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navbar]);

  return (
    <header className="mb-20 flex justify-center ">
      <nav className="fixed top-0 left-0 bg-background w-full  md:flex md:items-center px-5 md:px-20 gap-x-10">
        <div className="flex items-center justify-between w-full py-3 md:block md:py-5">
          <Link href="/" onClick={handleClick}>
            <h1 className="text-2xl font-bold duration-200">
              {siteConfig.name}
            </h1>
          </Link>
          <div className="flex  md:hidden gap-x-2">
            <LanguageChoiceDropDownMenu />

            <button
              className="rounded-md p-2 text-primary outline-none focus:border focus:border-primary"
              aria-label="Hamburger Menu"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute left-0 right-0 z-10 m-auto justify-self-center rounded-md border bg-background p-4 md:static md:flex md:border-none md:p-0 ${
            navbar ? "block" : "hidden"
          }`}
          style={{ width: "100%", maxWidth: "16rem" }}
        >
          <ul className="flex flex-col items-center space-y-4 text-primary opacity-60 md:flex-row md:space-y-0">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href={link.path} onClick={handleClick}>
                    {link.route}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <LanguageChoiceDropDownMenu />
        </div>
      </nav>
    </header>
  );
}
