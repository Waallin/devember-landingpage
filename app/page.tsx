import { DesktopLanding, MobileLanding } from "@/components/devember/Landing";
import "./devember.css";

export default function Home() {
  return (
    <div className="dl-root" data-spec-root="start">
      <div className="dl-desktop">
        <DesktopLanding />
      </div>
      <div className="dl-mobile">
        <MobileLanding />
      </div>
    </div>
  );
}
