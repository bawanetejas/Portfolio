import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';


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

export default function HeroSection() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1],
        [1, 0, 0]);

    const titleText = "Full-Stack Developer";
    const letters = Array.from(titleText);

    const name = "Tejas Bawane";
    const nameLetters = Array.from(name);

    const containerVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
    };

    const letterVars = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
    };

    return (
        <motion.section ref={ref} style={{ y, opacity }} className="min-h-screen flex flex-col justify-center relative pt-20">
            <div className="max-w-5xl mx-auto w-full px-6">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[#38BDF8] uppercase tracking-widest text-sm font-semibold mb-4"
                >
                    Architect of Trust
                </motion.p>

                <motion.h1
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    {nameLetters.map((letter, index) => (
                        <motion.span key={index} variants={letterVars} className="inline-block">
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                >
                    {letters.map((letter, index) => (
                        <motion.span key={index} variants={letterVars} className="inline-block">
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
                >
                    Building scalable, high-performance systems and intelligent dashboards. Specializing in MERN stack execution and cross-functional leadership frameworks.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-wrap items-center gap-6"
                >
                    <a href="https://www.linkedin.com/in/tej-bawane1" target='_blank' aria-label="LinkedIn" className="p-3 border border-[#1E293B] rounded-full hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all bg-[#020617] relative group">
                        <div className="absolute inset-0 bg-[#38BDF8] opacity-0 group-hover:opacity-10 rounded-full transition-opacity"></div>
                        <LinkedinIcon />
                    </a>
                    <a href="https://github.com/bawanetejas" target='_blank' aria-label="GitHub" className="p-3 border border-[#1E293B] rounded-full hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all bg-[#020617] relative group">
                        <div className="absolute inset-0 bg-[#38BDF8] opacity-0 group-hover:opacity-10 rounded-full transition-opacity"></div>
                        <GithubIcon />
                    </a>

                    {/* LeetCode Knight Card */}
                    <div className="flex items-center gap-3 px-5 py-3 rounded-lg border border-[#38BDF8]/30 bg-[#1E293B]/40 shadow-[0_0_15px_rgba(56,189,248,0.15)] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <ShieldIcon className="text-[#38BDF8]" />
                        <div>
                            <a href='https://drive.google.com/file/d/1E9xzqXgZ3tUVGd6u_SwkGqsaDk_G3M1G/view?usp=sharing' target='_blank'
                                className="text-xs text-slate-200 uppercase tracking-wider font-bold">Resume</a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#38BDF8] opacity-70"
            >
                <ChevronDownIcon />
            </motion.div>
        </motion.section>
    );

}
