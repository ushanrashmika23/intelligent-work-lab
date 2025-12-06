import React from 'react';
import { BarChart, Activity, Globe } from 'lucide-react';

const ImpactSection: React.FC = () => {
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

    return (
        <section id="impact" className="py-24 bg-slate-900 text-white relative overflow-hidden animate-on-scroll">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-iwl-blue/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-iwl-green/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-iwl-green font-bold tracking-wide uppercase text-sm mb-4">Our Achievements</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Lab Statistics</h3>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Quantifying our impact through key metrics and milestones in AI research and deployment.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="border-l-2 border-iwl-blue pl-6">
                                <div className="text-4xl font-bold text-white mb-1">50+</div>
                                <div className="text-sm text-gray-400">Research Papers Published</div>
                            </div>
                            <div className="border-l-2 border-iwl-green pl-6">
                                <div className="text-4xl font-bold text-white mb-1">25</div>
                                <div className="text-sm text-gray-400">Active Research Projects</div>
                            </div>
                            <div className="border-l-2 border-purple-500 pl-6">
                                <div className="text-4xl font-bold text-white mb-1">100+</div>
                                <div className="text-sm text-gray-400">Team Members</div>
                            </div>
                            <div className="border-l-2 border-yellow-500 pl-6">
                                <div className="text-4xl font-bold text-white mb-1">98%</div>
                                <div className="text-sm text-gray-400">Model Accuracy</div>
                            </div>
                        </div>
                    </div>

            <div className="relative">
                <img 
                    src="https://img.freepik.com/premium-photo/corridor-data-center-server-room-server-room-internet-communication-networks-ai-generativex9_28914-4589.jpg?w=2000" 
                    alt="Computer Science Research Lab" 
                    className="rounded-lg shadow-2xl  opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute -bottom-6 -left-6 bg-slate-800 p-6 rounded-lg border border-slate-600 shadow-xl max-w-xs hidden md:block">
                    <div className="flex items-center gap-3 mb-2">
                        <BarChart className="text-green-400" />
                        <span className="font-bold text-white">Growth Metrics</span>
                    </div>
                    <p className="text-sm text-gray-400">Research output increased 40% year-over-year. Funding secured for next 5 years.</p>
                </div>
            </div>                </div>
            </div>
        </section>
    );
};

export default ImpactSection;