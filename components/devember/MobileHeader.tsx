"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/app/icon.png";

const nav = [
  { label: "Apps", href: "#apps-m" },
  { label: "About", href: "#about-m" },
  { label: "Contact", href: "#contact-m" },
];

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="dv-header" data-open={open ? "" : undefined} data-spec="start:e177">
      <div className="dv-container dv-header__inner" data-spec="start:e178">
        <a
          className="dv-logo"
          href="#top-m"
          aria-label="Devember, till toppen"
          onClick={() => setOpen(false)}
          data-spec="start:e179"
        >
          <Image src={logo} alt="" width={31} height={28} data-spec="start:e180" />
          <span className="dv-wordmark" data-spec="start:e181">
            Devember
          </span>
        </a>
        <button
          className="dv-iconbtn dv-menubtn"
          type="button"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          data-spec="start:e182"
        >
          <svg className="dv-icon dv-icon--sm" viewBox="0 0 24 24" aria-hidden="true" data-spec="start:e183">
            <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
        <nav id="mobile-nav" aria-label="Huvudmeny">
          <ul className="dv-nav">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
