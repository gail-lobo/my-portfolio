import { ShowOnScroll } from "./ShowOnScroll";

const workExperiences = [
    {
        title: "Best Brains, Canada",
        subtitle: "Coding Instructor (Apr 2025 - Current)",
        skills: ["Python", "JavaScript", "HTML", "CSS"],
    },
    {
        title: "Vosyn, Canada",
        subtitle: "Front-End Developer (May 2024 - Mar 2025)",
        skills: ["React.js", "Redux Toolkit", "JavaScript", "Material UI"],
    },
    {
        title: "Conestoga College, Canada",
        subtitle: "Post Graduate Certificate in Web Development",
        skills: [],
    },
    {
        title: "Visvesvaraya Technological University, India",
        subtitle: "Bachelor of Computer Science & Engineering",
        skills: [],
    },
];

const Experience = () => {
    return (
        <ShowOnScroll>
            <section
                id="experience"
                aria-label="Work and education experience timeline"
                className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-neutral-100 px-4 py-20 relative overflow-hidden"
            >

                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/20 pointer-events-none"
                    aria-hidden="true"
                ></div>

                <h2 className="text-4xl md:text-6xl font-bold mb-12 z-10">Experience</h2>

                <div className="relative max-w-2xl w-full z-10">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-700"></div>

                    <div className="flex flex-col gap-16">
                        {workExperiences.map((item, index) => (
                            <TimelineItem item={item} key={index} />
                        ))}
                    </div>
                </div>

            </section>
        </ShowOnScroll>
    );
};

const TimelineItem = ({ item }) => {
    return (
        <div className="relative flex flex-col items-center">
            <div
                className="bg-blue-500 rounded-full w-4 h-4 border-2 border-neutral-900 z-10"
                aria-hidden="true"
            ></div>

            <div className="bg-gradient-to-br from-blue-900/30 via-neutral-800 to-blue-900/30 border border-neutral-700 rounded-xl p-8 shadow-lg w-full max-w-md mt-4 text-center">
                <h3 className="text-xl font-semibold text-neutral-100">{item.title}</h3>
                <p className="text-neutral-300 mt-2">{item.subtitle}</p>
                {item.skills.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {item.skills.map((skill, idx) => (
                            <span
                                aria-hidden="true"
                                key={idx}
                                className="bg-neutral-700 text-neutral-200 text-sm px-3 py-1 rounded transition-colors duration-200 hover:bg-blue-600 hover:text-white cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Experience;
