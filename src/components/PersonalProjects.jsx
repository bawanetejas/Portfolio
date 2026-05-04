import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import StudyNotion from "../assets/StudyNotion.png"
import Collab from "../assets/Collab.png"

export default function PersonalProjects() {

    const personalProjects = [
        {
            title: "StudyNotion Ed-Tech Concept",
            description: "Developed a functional full-stack Edtech platform focusng on scalable database schema and secure checkout flows.",
            features: [
                "User authentication with email and JWT ",
                "Complex product filtering & search (MongoDB)",
                "Razorpay API integration for course buy payments",
                "Admin,User,Teacher dashboard for growth  management"
            ],
            tech: [
                "Node.js",
                "React.js",
                "Redux-Toolkit",
                "Tailwind Css",
                "Express.js",
                "JWT",
                "MongoDB",
                "Git-Hub",
                "Postman",
                "Render",
                "Vercel"
            ],
            imagePlaceholder: StudyNotion,
            name: 'Study Notion',
            view: "https://study-notion-frontend-one-drab.vercel.app/",
            code: "https://github.com/bawanetejas/StudyNotion-Hosting"
        },
        {
            title: "Real-time Collaborative Task Manager",
            description: "Built a Trello-like application emphasizing WebSocket implementation for instant updates across multiple clients.",
            features: [
                "Real-time drag-and-drop state sync via Socket.io",
                "Optimistic UI updates for seamless UX",
                "Project-based team permissions",
                "Activity logs per task card"
            ],
            tech: [
                "Node.js",
                "React.js",
                "Redux-Toolkit",
                "Tailwind Css",
                "Express.js",
                "JWT",
                "MongoDB",
                "Git-Hub",
                "Postman",
                "Render",
                "Vercel"
            ],
            imagePlaceholder: Collab,
            name: 'Collab',
            view: "https://collab-ten-blue.vercel.app/",
            code: "https://github.com/bawanetejas/Collab_Project"
        },
        // {
        //     title: "AI Image Generation SaaS Dashboard",
        //     description: "Explored API integrations by building a full-stack dashboard utilizing OpenAI's DALL-E models with user usage tracking.",
        //     features: [
        //         "OpenAI DALL-E 3 API integration",
        //         "Image hosting on AWS S3",
        //         "Credit-based system for generation limits",
        //         "Responsive image gallery UI"
        //     ],
        //     tech: ["Next.js", "OpenAI API", "AWS S3", "Prisma", "Tailwind"],
        //     imagePlaceholder: "AI_GEN"
        // }
    ];

    return (
        <section className="py-32 bg-[#020617] relative z-20">
            <div className="max-w-7xl mx-auto w-full px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold border-b border-[#1E293B] pb-6 mb-16"
                >
                    03. The Learning Curve (Personal)
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {personalProjects.map((project, index) => (
                        <PersonalProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PersonalProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 flex flex-col group hover:border-[#38BDF8]/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300 relative overflow-hidden"
        >
            {/* Subtle Cyan Top Glow on Hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Image/Visual Placeholder Slot */}
            <div className="w-full h-48 rounded-xl bg-[#020617] border border-[#1E293B] mb-6 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:border-[#38BDF8]/30 transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#38BDF8]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src={project.imagePlaceholder} alt={project.name} />
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#38BDF8] transition-colors">{project.title}

                <a href={project.view} target='_blank' className="px-3 ml-1 py-1 bg-[#020617] text-slate-400 text-xs rounded-full border border-[#1E293B] font-mono group-hover:border-[#38BDF8]/20 group-hover:text-slate-200 transition-colors">
                    view
                </a>

                <a href={project.code} target='_blank' className="px-3 py-1 bg-transperent text-slate-400 text-xs rounded-full border border-[#1E293B] font-mono group-hover:border-[#38BDF8]/20 group-hover:text-slate-200 transition-colors">
                    Code
                </a>

            </h3>

            <p className="text-slate-400 text-sm mb-5 leading-relaxed flex-grow">
                {project.description}
            </p>

            {/* Key Features List */}
            <div className="mb-6 space-y-2">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">Key Features</p>
                {project.features.map(feature => (
                    <div key={feature} className="flex items-start gap-2.5 text-slate-300 text-sm">
                        <span className="text-[#38BDF8] mt-1.5 leading-none">•</span>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E293B]">
                {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-[#020617] text-slate-400 text-xs rounded-full border border-[#1E293B] font-mono group-hover:border-[#38BDF8]/20 group-hover:text-slate-200 transition-colors">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}