import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
export default function EducationSection() {

    const frameworks = [
        {
            year: "2023",
            title: "Electrical Engineering Graduate from SGGSI&T Nanded",
            desc: "Graduated with a degree in Electrical Engineering. Translated the rigorous analytical problem-solving and hardware systems design methodologies into scalable software engineering and full-stack development."
        },
        {
            year: "Continuous",
            title: "Systems Thinking & Architecture",
            desc: "Deep analysis of high-level organizational structures, focusing on cross-functional leadership models and P&L accountability frameworks."
        },

    ];

    return (
        <section className="py-32 bg-[#020617] relative z-20">
            <div className="max-w-5xl mx-auto w-full px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold border-b border-[#1E293B] pb-6 mb-16"
                >
                    03. Intellectual Framework & Education
                </motion.h2>

                <div className="relative border-l border-[#1E293B] ml-4 md:ml-6 space-y-16 py-8">
                    {frameworks.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute w-3 h-3 bg-[#38BDF8] rounded-full left-[-6.5px] top-1.5 shadow-[0_0_8px_#38BDF8]"></div>
                            <span className="text-sm font-mono text-[#38BDF8] mb-2 block">{item.year}</span>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed max-w-2xl">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

}
