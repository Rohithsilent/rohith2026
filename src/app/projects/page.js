'use client';

import ProjectItem from "@/components/ProjectItem";
import VerticalLines from "@/components/VerticalLines";
import { motion } from "framer-motion";
import Image from "next/image";
import GmailIcon from "@/components/ui/gmail-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";


// Import images (Copied from src/app/page.js)
// Assuming paths are relative to this file, we need to adjust ../assets to ../../assets
import urbanhero from "../../assets/Projectimages/urbanhero.jpeg";
import bridge from "../../assets/Projectimages/bridge.jpeg";
import docmind from "../../assets/Projectimages/docmind-tzug.onrender.com_user_dashboard.png";
import eduverse from "../../assets/Projectimages/eduverse.png";
import pop from "../../assets/Projectimages/pop.png";
import thor from "../../assets/images/Thor.jpg";

// Additional projects can be added here
const projects = [
    {
        id: "01",
        title: "UrbanHero",
        subtitle: "Waste Reporting Platform",
        stacks: ["Flutter", "Firebase"],
        desc: "An intelligent waste reporting platform that empowers citizens to report urban issues seamlessly using AI-powered image analysis and real-time location tracking.",
        github: "https://github.com/Rohithsilent/UrbanHero",
        live: "Private",
        image: urbanhero
    },
    {
        id: "02",
        title: "Bridge",
        subtitle: "Messaging Application",
        stacks: ["Flutter", "Firebase"],
        desc: "A lightweight messaging application designed for simple, fast, and reliable real-time communication. Built with a clean interface and focus on usability.",
        github: "https://github.com/Rohithsilent/bridge",
        live: "Private",
        image: bridge,
        imageFit: "fill"
    },
    {
        id: "03",
        title: "DocMind",
        subtitle: "Healthcare Web Application",
        stacks: ["React.js", "Firebase"],
        desc: "An offline-first healthcare web application designed to manage medical documents and essential health information reliably, even in low-connectivity environments.",
        github: "https://github.com/Rohithsilent/doc-mind-app",
        live: "https://docmind-tzug.onrender.com/",
        image: docmind
    },

    {
        id: "04",
        title: "EduVerse",
        subtitle: "AI-Powered Learning Platform",
        stacks: ["Node.js", "Express.js", "EJS", "Firebase"],
        desc: "An AI-driven learning platform designed to deliver personalized learning paths, adaptive quizzes, and interactive coding practice through a clean and intuitive web experience.",
        github: "https://github.com/Rohithsilent/eduverse",
        live: "https://eduverse-nnb0.onrender.com",
        image: eduverse
    },

    {
        id: "05",
        title: "Pulse of Public",
        subtitle: "AI-Powered YouTube Sentiment & Insights Platform",
        stacks: ["Python", "Streamlit", "Google Gemini AI", "YouTube Data API",],
        desc: "Pulse of Public is an AI-powered analytics platform that transforms YouTube comments into actionable creator insights. It performs sentiment analysis, generates Gemini AI–driven recommendations, and visualizes audience feedback.",
        github: "https://github.com/Rohithsilent/P_o_P",
        live: "https://pulseofpublic.streamlit.app/",
        image: pop
    }



];


export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex justify-center">

            {/* Left Blank Space (Responsive) */}
            <div className="hidden xl:block w-[15vw] relative">
                <VerticalLines />
            </div>

            {/* Main Content */}
            <div className="w-full max-w-5xl px-6 md:px-12 py-32">
                <div className="flex flex-col items-center mb-24 space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-accent text-xs uppercase tracking-[0.3em]"
                    >
                        Digital Archive
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-medium tracking-tight text-center flex flex-col items-center"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                        Projects
                        <span className="text-lg md:text-xl text-[#e9204f] font-serif italic tracking-wider font-light translate-x-16 md:translate-x-24">
                            by rohith
                        </span>
                    </motion.h1>
                    {/* <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent mt-8"
                    /> */}
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-32 relative w-full h-[80vh] rounded-3xl overflow-hidden group">
                    <Image
                        src={thor}
                        alt="Hire Me"
                        fill
                        className="object-cover"
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-6 p-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                            Hire me as your Developer
                        </h2>
                        <div className="text-white/80 text-lg md:text-xl font-light flex items-center gap-2 justify-center flex-wrap">
                            <span>Just shoot me a dm via</span>
                            <a href="mailto:rohithccb0909@gmail.com" className="flex items-center gap-1 text-white hover:text-accent border-b border-white/30 hover:border-accent transition-colors pb-0.5 group/link">
                                <GmailIcon className="w-5 h-5 group-hover/link:text-accent transition-colors" />
                                <span>Gmail</span>
                            </a>
                            <span>or reach out on</span>
                            <a href="https://x.com/RohithP727496" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white hover:text-accent border-b border-white/30 hover:border-accent transition-colors pb-0.5 group/link">
                                <TwitterXIcon className="w-4 h-4 group-hover/link:text-accent transition-colors" />
                                <span>Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Blank Space (Responsive) */}
            <div className="hidden xl:block w-[15vw] relative">
                <VerticalLines />
            </div>

        </main>
    );
}
