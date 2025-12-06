import React, { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../data.json';
import { Publication } from '../types';

const publications = (data as { publications?: Publication[] }).publications ?? [];
const fallbackImage = 'https://influenctor.com/wp-content/uploads/2024/01/specific_details_in_text.jpg';

const Publications: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    if (!publications.length) {
        return null;
    }

    const total = publications.length;
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
    const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);

    return (
        <section id="publications" className="py-24 bg-white animate-on-scroll">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-iwl-blue font-semibold tracking-wide uppercase text-sm mb-2">Latest Work</h2>
                    <h3 className="text-4xl font-bold text-slate-900">Publications</h3>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Peer-reviewed research, field reports, and thought leadership from the lab.
                    </p>
                </div>

                <div className="relative flex items-center">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous publication"
                        className="hidden sm:flex absolute -left-10 lg:-left-14 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 hover:shadow-xl transition"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-900" />
                    </button>

                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-100 bg-white w-full">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {publications.map((pub) => {
                                const cover = pub.imageUrl || fallbackImage;

                                return (
                                    <div key={pub.id} className="w-full flex-shrink-0">
                                        <div className="grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-10">
                                            <div className="relative w-full h-full">
                                                <div className="absolute inset-0 bg-iwl-blue/10 transform translate-x-3 translate-y-3 rounded-xl -z-10"></div>
                                                <img
                                                    src={cover}
                                                    alt={pub.title}
                                                    className="w-full h-full max-h-[420px] min-h-[240px] object-cover rounded-xl shadow-2xl"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
                                            </div>                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 text-sm font-semibold text-iwl-blue uppercase tracking-[0.2em]">
                                                    <span>{pub.category}</span>
                                                </div>
                                                <h4 className="text-2xl sm:text-2xl font-bold text-slate-900 leading-snug">{pub.title}</h4>
                                                <p className="text-sm text-gray-600">{pub.author} | {pub.date}</p>
                                                {pub.link ? (
                                                    <a
                                                        href={pub.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-slate-200 transition-colors"
                                                    >
                                                        <BookOpen className="w-5 h-5 text-iwl-blue" />
                                                        <span>View abstract</span>
                                                    </a>
                                                ) : (
                                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 text-slate-900 font-semibold text-sm">
                                                        <BookOpen className="w-5 h-5 text-iwl-blue" />
                                                        <span>View abstract</span>
                                                    </div>
                                                )}                                                {pub.abstract && (
                                                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-6">
                                                        {pub.abstract}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        aria-label="Next publication"
                        className="hidden sm:flex absolute -right-10 lg:-right-14 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 hover:shadow-xl transition"
                    >
                        <ChevronRight className="w-6 h-6 text-slate-900" />
                    </button>
                </div>

                <div className="flex items-center justify-center gap-2 mt-8">
                    {publications.map((_, idx) => (
                        <button
                            key={idx}
                            aria-label={`Go to publication ${idx + 1}`}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-iwl-blue' : 'w-2.5 bg-slate-200'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
