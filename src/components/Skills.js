'use client';

import { motion } from "framer-motion";
import { Reveal } from "@/components/ScrollReveal";
import { Database, Cloud, Brain, Code2 } from "lucide-react";
import {
  SiJavascript, SiNodedotjs, SiExpress, SiReact, SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiFirebase, SiGit, SiGithub, SiFlutter
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

export default function Skills() {
  return (
    <section id="skills" className="space-y-16 py-12 mt-20 mb-48">
      <Reveal width="100%">
        <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Skills</h2>
        </div>
      </Reveal>

      <Reveal width="100%">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-6xl mx-auto mt-12 px-4">
          {/* Languages */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
              />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Python", icon: SiPython, color: "text-blue-400" },
                { name: "Java", icon: FaJava, color: "text-orange-500" },
                { name: "C/C++", icon: Code2, color: "text-blue-600" },
                { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-400" },
                { name: "SQL", icon: TbSql, color: "text-cyan-500" },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                    <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
              />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">Frameworks & Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "React.js", icon: SiReact, color: "text-cyan-400" },
                { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
                { name: "Express.js", icon: SiExpress, color: "text-foreground" },
                { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
                { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
                { name: "scikit-learn", icon: SiScikitlearn, color: "text-orange-500" },

              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                    <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ML/AI */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
              />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">AI/ML</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Machine Learning", icon: Brain, color: "text-pink-400" },
                { name: "Deep Learning", icon: Brain, color: "text-purple-500" },
                { name: "NLP", icon: Brain, color: "text-violet-400" },
                { name: "Neural Nets", icon: Brain, color: "text-fuchsia-400" },
                { name: "LLMs", icon: Brain, color: "text-indigo-400" },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                    <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
              />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">Cloud & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "AWS (S3, EC2)", icon: Cloud, color: "text-orange-400" },
                { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
                { name: "Git", icon: SiGit, color: "text-orange-500" },
                { name: "GitHub", icon: SiGithub, color: "text-foreground" },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                    <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
