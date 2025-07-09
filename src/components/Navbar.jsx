import { useEffect } from "react";

export const Navbar = ({ menuExpand, setMenuExpand }) => {
    useEffect(() => {
        document.body.style.overflow = menuExpand ? "hidden" : "";
    }, [menuExpand]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="flex items-center">
                        <span className="text-2xl" aria-hidden="true">&#127968;</span>
                        <span className="sr-only">Home</span>
                    </a>

                    <button
                        type="button"
                        aria-label={menuExpand ? "Close menu" : "Open menu"}
                        onClick={() => setMenuExpand((prev) => !prev)}
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-3xl focus:outline-none"
                    >
                        &#9776;
                    </button>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                            Experience
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
