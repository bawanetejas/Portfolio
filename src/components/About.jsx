import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
export default function About() {

    return (
        <section className="py-32 bg-[#020617] relative z-10">
            <div className="max-w-4xl mx-auto w-full px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold mb-8 text-[#38BDF8] font-mono"
                >
          // INITIALIZE_PROFILE
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 border border-[#1E293B] bg-[#0F172A]/50 rounded-xl shadow-[0_0_20px_rgba(30,41,59,0.5)]"
                >
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                        I’m a results-driven Full Stack Developer with hands-on experience building scalable, end-to-end web applications across the MERN ecosystem. During my internship at Deep Thought, I delivered impactful products like an Escalation Management System and a PDP Audit Agent, taking ideas from RCA/CSA discussions through prototyping to full production deployment.
                        <br /><br />
                        I optimized backend APIs to reduce response time from 8 seconds to 800 milliseconds and built intelligent automation systems that improved operational efficiency. With strong problem-solving skills and the ability to quickly learn and apply new technologies, I consistently develop clean, high-performance solutions that create real business value.
                    </p>
                </motion.div>
            </div>
        </section>
    );

}
