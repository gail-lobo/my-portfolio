import { ShowOnScroll } from "./ShowOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus(""), 5000);
            })
            .catch(() => {
                setStatus("Unable to send message. Please try again.");
                setTimeout(() => setStatus(""), 5000);
            });
    };

    return (
        <ShowOnScroll>
            <section
                id="contact"
                className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-neutral-900 text-neutral-100 px-4"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/20 pointer-events-none"
                    aria-hidden="true"
                ></div>

                <div className="w-full max-w-lg z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Contact</h2>

                    {status && (
                        <p
                            className={`text-center mb-4 ${status.includes("successfully") ? "text-green-400" : "text-red-400"
                                }`}
                            aria-live="polite"
                        >
                            {status}
                        </p>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                required
                                autoComplete="name"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                required
                                autoComplete="email"
                                placeholder="you@example.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                autoComplete="off"
                                value={formData.message}
                                placeholder="Your message..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </ShowOnScroll>
    );
};
