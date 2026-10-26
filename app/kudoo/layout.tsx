import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Tracking } from "./Tracking";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kudoo – Weight loss without calorie counting",
  description:
    "Kudoo turns every meal into points. One simple daily budget and two goals: eat smart and move daily.",
};

export default function KudooLayout({ children }: LayoutProps<"/kudoo">) {
  return (
    <div className={`${poppins.variable} contents`}>
      {children}
      <Tracking />
    </div>
  );
}
