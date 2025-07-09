import { ShowOnScroll } from "./ShowOnScroll";

export const Home = () => {
  const desc = `{
  name: "Gail Lobo",
  role: "Front-End Developer",
  techStack: {
    languages: ["HTML", "CSS", "JavaScript", "SQL"],
    libraries: ["React", "Redux Toolkit"],
    stylingFrameworks: ["Material UI", "TailwindCSS"]
  }
}`.trim();

  return (
    <ShowOnScroll>
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-neutral-900 text-neutral-100 overflow-hidden">

        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-transparent to-blue-800/20 pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hello, I'm Gail
          </h1>
          <pre className="bg-neutral-800 rounded-xl p-4 text-left whitespace-pre-wrap overflow-x-auto text-xs sm:text-sm md:text-base max-w-lg mx-auto border border-neutral-700 shadow-lg mb-6">
            <code>{desc}</code>
          </pre>
          <div className="max-w-xl mx-auto text-left px-2">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-300">
              My work centers on user interaction and experience, application performance, accessibility, and writing modular, reusable code. Fun fact: I quote Disney movies unprompted.
            </p>
          </div>
        </div>
      </section>
    </ShowOnScroll>
  );
};
