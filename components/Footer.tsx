import { EmberText } from "@/components/EmberText";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-x-6 gap-y-4 px-6 py-8 font-mono text-xs leading-4 font-medium tracking-[0.6px] text-meta">
        <p className="m-0">
          <EmberText text={site.footer.legal} />
        </p>
        <p className="m-0">
          <EmberText text={site.footer.copyright} />
        </p>
      </div>
    </footer>
  );
}
