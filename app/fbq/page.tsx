import type { Metadata } from "next";
import "../devember.css";
import "./fbq.css";
import { Quiz } from "./Quiz";

// Tillfällig sida för ett quiz med vänner: ska inte indexeras.
export const metadata: Metadata = {
  title: "Fotbollsquiz · Devember",
  description: "Ett fotbollsquiz i jeopardy-stil med fem kategorier och 25 frågor.",
  robots: { index: false, follow: false },
};

export default function FotbollsquizPage() {
  return (
    <div className="dl-root" lang="sv">
      <Quiz />
    </div>
  );
}
