import React from 'react';
import { CheckCircle2, Globe, GraduationCap, Scale, Briefcase, HeartHandshake, Plane, FileCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800" id="about">

            {/* About Intro */}
            <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <span className="text-[#009B8F] font-bold tracking-widest text-xs uppercase mb-4 block">Who We Are</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#011E26] mb-8">About Nex Overseas</h2>
                    <p className="text-lg leading-relaxed text-slate-600">
                        Nex Overseas is a global education and immigration consultancy dedicated to guiding students and professionals through every step of their international journey. We offer a comprehensive suite of services that includes university admissions, immigration legal support, travel coordination, pre-arrival coaching, and skill development. Our mission is to empower individuals to thrive abroad with confidence, preparation, and expert guidance.
                    </p>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 bg-slate-50 px-6 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#011E26] mb-6">Our Mission & Values</h2>
                        <p className="text-slate-600 leading-relaxed">
                            At Nex Overseas, our mission is to empower individuals to pursue global education and career opportunities with clarity, confidence, and complete preparation. We believe that studying or relocating abroad is more than a paperwork process — it is a life-changing transition that deserves thoughtful guidance, ethical support, and a structured pathway.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Integrity & Transparency",
                                desc: "We provide honest, realistic guidance based on facts, not false promises. Every recommendation is rooted in what is genuinely best for the student or professional, ensuring trust at every step.",
                                icon: <Scale className="w-8 h-8 text-[#009B8F]" />
                            },
                            {
                                title: "Excellence in Preparation",
                                desc: "Success abroad begins long before departure. We focus on building strong applications, developing essential skills, and preparing students academically, culturally, and emotionally for life in a new country.",
                                icon: <CheckCircle2 className="w-8 h-8 text-[#009B8F]" />
                            },
                            {
                                title: "Student-Centric Support",
                                desc: "Every individual has a unique story, background, and ambition. We tailor our approach to match your strengths, challenges, and long-term goals, ensuring you receive guidance that feels personal and relevant.",
                                icon: <HeartHandshake className="w-8 h-8 text-[#009B8F]" />
                            },
                            {
                                title: "Global Perspective, Local Understanding",
                                desc: "We combine international expertise with an understanding of local needs. This balance allows us to bridge the gap between where you are and where you want to be.",
                                icon: <Globe className="w-8 h-8 text-[#009B8F]" />
                            },
                            {
                                title: "Commitment to Growth & Learning",
                                desc: "The world of education and immigration evolves constantly. Our team stays updated with the latest policies, university trends, and global opportunities so you always receive current, accurate, and strategic advice.",
                                icon: <GraduationCap className="w-8 h-8 text-[#009B8F]" />
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 border-t-4 border-[#009B8F] shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4">{value.icon}</div>
                                <h3 className="text-xl font-serif text-[#011E26] mb-3">{value.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3">
                        <span className="text-[#009B8F] font-bold tracking-widest text-xs uppercase mb-4 block">Our Advantage</span>
                        <h2 className="text-4xl font-serif text-[#011E26] mb-6">Why Choose Us</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Choosing Nex Overseas means choosing a partner who understands the full journey — not just the application stage. We stand apart because we offer a complete ecosystem of support designed to make your transition abroad smooth, informed, and successful.
                        </p>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {[
                            { title: "End-to-End Services Under One Roof", desc: "From admissions and coaching to visas, travel, and legal guidance, we streamline every stage so you don’t have to coordinate with multiple agencies." },
                            { title: "Expert Advisors Across 20+ Countries", desc: "Our team brings deep knowledge of global education systems, immigration pathways, and cultural expectations, helping you make informed decisions with confidence." },
                            { title: "Personalised Roadmaps", desc: "We study your academic background, goals, strengths, and preferences to create a customised plan that maximises your chances of success." },
                            { title: "Strong Focus on Quality & Compliance", desc: "We ensure every document, application, and submission meets the highest standards and aligns with the latest regulations." },
                            { title: "Holistic Preparation for Life Abroad", desc: "Beyond admissions and visas, we prepare you for interviews, academic expectations, communication skills, cultural adaptation, and practical readiness." },
                            { title: "Reliable Support Throughout the Journey", desc: "Our relationship doesn’t end once you receive an offer or visa. We continue to guide you through travel, arrival, and early settlement so you feel supported from start to finish." }
                        ].map((item, i) => (
                            <div key={i}>
                                <h3 className="text-lg font-bold text-[#011E26] mb-2 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#009B8F] rounded-full"></div>
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed pl-4 border-l border-slate-200 ml-1">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20 bg-[#011E26] text-white px-6 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif mb-6">Our Process</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Our process is designed to remove confusion and replace it with structure, clarity, and progress. Every stage is intentional and focused on preparing you for long-term success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Initial Consultation & Goal Mapping", desc: "We begin by understanding your academic history, career aspirations, preferred destinations, and long-term vision." },
                            { step: "02", title: "Personalised Strategy & Country Selection", desc: "Based on your profile, we recommend the best countries, institutions, and programs outlining timelines and requirements." },
                            { step: "03", title: "Application Preparation & Documentation", desc: "Our team assists with course selection, SOPs, personal statements, references, CVs, and all required documents." },
                            { step: "04", title: "Coaching & Skill Development", desc: "We prepare you for language tests, academic expectations, interviews, and essential skills such as digital literacy." },
                            { step: "05", title: "Visa & Legal Guidance", desc: "Our immigration advisors guide you through the visa process, ensuring compliance, accuracy, and strong documentation." },
                            { step: "06", title: "Travel, Accommodation & Pre-Arrival", desc: "We help you plan your travel, arrange airport pickup, secure accommodation, and understand local orientation essentials." },
                            { step: "07", title: "Post-Arrival & Ongoing Support", desc: "Once you arrive, we remain available to assist with settling in, adjusting to your new environment, and planning your next steps." }
                        ].map((step, i) => (
                            <div key={i} className="bg-[#022B36] p-6 rounded-sm border border-[#009B8F]/20 hover:border-[#009B8F] transition-colors group">
                                <div className="text-4xl font-bold text-[#009B8F]/20 mb-4 group-hover:text-[#009B8F] transition-colors">{step.step}</div>
                                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16 px-6 md:px-8 bg-[#009B8F] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-serif mb-6">Additional Services</h3>
                    <p className="text-lg font-light flex flex-wrap justify-center gap-x-8 gap-y-2">
                        <span>Job search assistance</span>
                        <span className="opacity-50">•</span>
                        <span>Internships</span>
                        <span className="opacity-50">•</span>
                        <span>Investment migration</span>
                        <span className="opacity-50">•</span>
                        <span>Business setup</span>
                        <span className="opacity-50">•</span>
                        <span>Translation and notarization</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
