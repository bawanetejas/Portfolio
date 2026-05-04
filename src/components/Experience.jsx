import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
export default function Experience() {

    return (
        <section className="relative w-full">
            <div className="max-w-5xl mx-auto w-full px-6 pt-6 pb-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold border-b border-[#1E293B] pb-6 mb-8"
                >
                    02. The Execution
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xl text-[#38BDF8] mb-6 font-mono"
                >
                    WEB Developer Intern @ Deep Thought (7 Months)
                </motion.p>
            </div>

            <ProjectScene
                number="01"
                title="Escalation Management System"
                description="Built a dashboard with advanced filters (date, brand, account) to help Ops teams detect performance abnormalities. Implemented automated escalation emails for abnormal account behavior and delivered the project end-to-end: RCA/CSA with Ops → MVP prototype → UI → final development. Optimized backend APIs, reducing data retrieval time by a factor of 10 (8s → 800ms)."
                tech={["Node.js", "AWS Lambda", "JavaScript", "HTML", "CSS/SCSS", "Nodebb"]}
            />

            <ProjectScene
                number="02"
                title="Gemini-Powered PDP Audit Agent"
                description="Developed and published a PDP Audit Agent on the Amazon App Store with Seller Central OAuth-based authorization. Built a Gemini-powered agent analyzing ASIN elements (title, bullets, images, description) to generate optimization scores and recommendations. Created the solution from scratch (RCA/CSA → prototype → UI → dev), increasing site performance and saving 2–3 minutes per ASIN during audits."
                tech={["GenAI", "Node.js", "JavaScript", "HTML", "CSS/SCSS", "Nodebb"]}
            />
        </section>
    );

}


const ProjectScene = ({ number, title, description, tech }) => {
    return (
        <div className="relative flex flex-col justify-center min-h-[70vh] py-8 bg-[#020617] z-20 border-b border-[#1E293B]/30 last:border-0">
            <div className="max-w-4xl mx-auto w-full px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-10%", once: true }}
                >
                    {/* Section Header Line */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[#38BDF8] font-mono text-xl block">Project {number}</span>
                        <div className="h-[1px] bg-[#1E293B] flex-grow max-w-[100px]"></div>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold mb-8">{title}</h3>

                    <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {tech.map((t) => (
                            <span key={t} className="px-4 py-2 bg-[#0F172A] text-slate-300 text-sm rounded-full border border-[#1E293B]">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Internal Tool Badge (Replaces Action Buttons) */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#1E293B]/30 border border-[#1E293B] rounded-md text-slate-400 text-sm font-mono w-fit select-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span>Internal Proprietary System</span>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};
