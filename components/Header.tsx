import Image from "next/image";
import icon from "@/app/icon.png";
import { EmberText } from "@/components/EmberText";
import { site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-glass backdrop-blur-[6px] backdrop-saturate-[1.2]">
      <div className="mx-auto flex min-h-16 max-w-[1120px] flex-wrap items-center justify-between gap-x-6 gap-y-0 px-6">
        <a
          href="#top"
          className="site-nav-link inline-flex min-h-11 items-center gap-2.5 text-base leading-5 font-semibold tracking-[0.8px] text-snow uppercase hover:text-snow"
        >
          <Image
            src={icon}
            alt=""
            className="size-8"
          />
          <EmberText text={site.name} />
        </a>
        <nav
          aria-label="Primary"
          className="flex gap-6 font-mono text-[13px] leading-5 tracking-[0.26px]"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-nav-link inline-flex min-h-11 items-center text-muted hover:text-snow"
            >
              <EmberText text={item.label} />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
