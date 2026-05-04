import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Techstack from './Skills';
export default function SkillSection() {

    const skills = [
        { name: "MongoDB", category: "Database" },
        { name: "Express.js", category: "Backend" },
        { name: "React", category: "Frontend" },
        { name: "Node.js", category: "Runtime" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Systems Design", category: "Architecture" },
    ];

    return (
        <section className="min-h-screen py-32 flex flex-col justify-center relative z-10 bg-transparent">
            <div className="max-w-5xl mx-auto w-full px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-3xl md:text-5xl font-bold mb-16 border-b border-[#1E293B] pb-6"
                >
                    01. The Core Logic
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <p className="text-lg text-slate-400 leading-relaxed">
                            My technical foundation is rooted in the <strong className="text-[#F8FAFC]">MERN stack</strong>, engineered for scalability and precise state management. I focus on reducing execution debt through clean architecture and rigorous event-loop optimization.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-4 border border-[#1E293B] bg-[#020617] rounded-md hover:border-[#38BDF8] transition-colors"
                                >
                                    <p className="text-xs text-[#38BDF8] mb-1">{skill.category}</p>
                                    <p className="font-semibold">{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Abstract Technical Foundation Diagram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="border border-[#1E293B] rounded-xl bg-[#0F172A]/50 p-8 flex items-center justify-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#38BDF8]/10 via-transparent to-transparent opacity-50"></div>

                        <Techstack />
                    </motion.div>
                </div>
            </div>
        </section>
    );

}
