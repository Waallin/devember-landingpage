import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductAnalytics } from "@/components/ProductAnalytics";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { projects, techStack } from "@/lib/content";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main id="top">
        <Hero />
        <Projects projects={projects} />
        <ProductAnalytics />
        <TechStack groups={techStack} />
        <About />
      </main>
      <Footer />
    </div>
  );
}
