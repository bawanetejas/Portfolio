import React, { useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { supabase } from '../lib/supabase';

// --- Reusable SVG Icons (No external libraries) ---
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const ChevronDownIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

const ShieldIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    function handleInput(e) {
        const { name, value } = e.target;
        setFormData((pre) => ({
            ...pre,
            [name]: value
        }));

    }
    const [honeypot, setHoneypot] = useState('');

    async function formHandler(e) {
        e.preventDefault();
        if (honeypot) {
            console.warn("bot detected");
            return;
        }
        await supabase
            .from("contacts")
            .insert([formData]);

    }
    return (
        <section className="min-h-screen bg-[#0F172A] flex flex-col relative z-20 transition-colors duration-1000">
            <div className="grow flex items-center justify-center px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl w-full text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">The Handshake</h2>
                    <p className="text-slate-400 mb-12 text-lg">
                        Ready to architect reliable systems and optimize execution? Let's initiate a dialogue.
                    </p>

                    <form className="flex flex-col gap-6 text-left" onSubmit={formHandler}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm text-slate-400 mb-2 font-mono">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInput}
                                    className="bg-[#020617] border border-[#1E293B] rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* HONEYPOT - Hidden from humans, visible to bots */}
                            <div
                                style={{ position: "absolute", left: "-9999px" }}
                                aria-hidden="true"
                            >
                                <label htmlFor="website">Website</label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm text-slate-400 mb-2 font-mono">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInput}
                                    id="email"
                                    className="bg-[#020617] border border-[#1E293B] rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-sm text-slate-400 mb-2 font-mono">Message</label>
                            <textarea
                                id="message"
                                name='message'
                                value={formData.message}
                                onChange={handleInput}
                                rows="5"
                                className="bg-[#020617] border border-[#1E293B] rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-all resize-none"
                                placeholder="Discussing architecture..."
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            aria-label="Submit Contact Form"
                            className="mt-4 px-8 py-4 bg-[#38BDF8] text-[#020617] font-bold rounded-lg hover:bg-sky-300 transition-colors shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] w-full md:w-auto md:self-center"
                        >
                            Transmit Message
                        </button>
                    </form>
                </motion.div>
            </div>

            <footer className="border-t border-[#1E293B] p-8 text-center bg-[#020617]">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://www.linkedin.com/in/tej-bawane1" aria-label="LinkedIn" className="text-slate-400 hover:text-[#38BDF8] transition-colors"><LinkedinIcon /></a>
                    <a href="https://github.com/bawanetejas" aria-label="GitHub" className="text-slate-400 hover:text-[#38BDF8] transition-colors"><GithubIcon /></a>
                </div>
                <p className="text-slate-500 text-sm font-mono">
                    © {new Date().getFullYear()} Architect of Trust. All systems nominal.
                </p>
            </footer>
        </section>
    );

}
