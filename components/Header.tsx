import { site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-black/90 backdrop-blur-[6px]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-baseline justify-between gap-x-8 gap-y-4 px-6 py-[18px]">
        <a
          href="#top"
          className="text-base font-semibold tracking-[0.05em] uppercase"
        >
          {site.name}
        </a>
        <nav
          aria-label="Primary"
          className="flex gap-7 font-mono text-[13px] tracking-[0.02em]"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-0.5 hover:border-ember"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
