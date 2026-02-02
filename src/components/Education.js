'use client';

import { Reveal } from "@/components/ScrollReveal";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
    const education = [
        {
            year: "2024 – 2027",
            institution: "CMR College of Engineering and Technology",
            degree: "B.Tech in Artificial Intelligence and Machine Learning",
            location: "Hyderabad, Telangana",
            status: "Expected Graduation: May 2027"
        },
        {
            year: "2021 – 2024",
            institution: "Government Institute of Electronics",
            degree: "Diploma in Cloud Computing and Big Data",
            location: "Secunderabad, Telangana",
            cgpa: "8.89/10",
            status: "Completed"
        }
    ];

    return (
        <section id="education" className="space-y-16 py-12 mt-20 mb-48">
            <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Education</h2>
            </div>

            <div className="max-w-5xl mx-auto px-4">
                {education.map((item, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                        <div className="relative mb-32">
                            {/* Timeline Line - Vertical */}
                            {i < education.length - 1 && (
                                <div className="absolute left-4 md:left-6 top-8 h-full w-px bg-border/30" />
                            )}

                            <div className="flex gap-6 group">
                                {/* Timeline Dot and Year - Left Side */}
                                <div className="flex flex-col items-center gap-3 pt-6 shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-background border-2 border-accent z-10 shadow-[0_0_0_4px_rgba(0,0,0,1)]" />
                                    <span className="font-mono text-sm md:text-base font-medium text-accent whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
                                        {item.year}
                                    </span>
                                </div>

                                {/* Content Column */}
                                <div className="flex-1">
                                    <div className="group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300 p-6 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5">
                                        <div className="flex flex-col gap-4">
                                            {/* Institution Name - Match Projects font */}
                                            <div className="flex items-center gap-3">
                                                <GraduationCap className="w-5 h-5 text-accent/80" />
                                                <h3 className="text-2xl md:text-3xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                                                    {item.institution}
                                                </h3>
                                            </div>

                                            {/* Degree */}
                                            <p className="text-base md:text-lg font-light text-foreground/90">
                                                {item.degree}
                                            </p>

                                            {/* Location and CGPA */}
                                            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                                                <div className="flex items-center gap-2 text-foreground/70">
                                                    <MapPin className="w-4 h-4 text-accent/60" />
                                                    <span className="text-sm font-light">{item.location}</span>
                                                </div>
                                                {item.cgpa && (
                                                    <div className="flex items-center gap-2 text-foreground/70">
                                                        <span className="text-sm font-mono font-medium text-accent">CGPA: {item.cgpa}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Status */}
                                            <div className="flex items-center gap-2 mt-2">
                                                <Calendar className="w-4 h-4 text-accent/60" />
                                                <span className="text-sm text-foreground/60 font-light italic">{item.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
