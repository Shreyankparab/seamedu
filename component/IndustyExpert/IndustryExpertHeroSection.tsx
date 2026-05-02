"use client";

export default function HeroSection() {
    return (
        <section className="bg-white min-h-screen font-sans relative flex items-center justify-center overflow-hidden">

            {/* ─── BACKGROUND IMAGE (MATCHING THE REQUIREMENT) ─── */}
            <div className="absolute inset-0 z-0 flex items-center justify-center lg:justify-end opacity-40 lg:opacity-100">
                <img
                    src="/images/IndustyExpert/IndustryExpertHero.svg"
                    alt="Seamedu Industry Experts Team"
                    // Removed max-width restriction to let it fill the space as a background
                    className="w-full lg:w-auto h-auto lg:h-full object-cover lg:object-contain rounded-xl"
                />
            </div>

            {/* ─── HERO CONTENT SECTION ─── */}
            <div className="container mx-auto px-6 py-12 lg:py-24 relative z-10 ml-20 mt-10">

                {/* SINGLE COLUMN (Stacked Layout) */}
                <div className="space-y-10 relative max-w-4xl">

                    {/* Heading */}
                    <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tighter">
                        <span className="text-blue-600 relative inline-block">
                            LEARN
                        </span>{" "}
                        FROM THOSE<br /> WHO <span className="text-blue-600">LEAD</span><br /> THE INDUSTRY
                    </h1>

                    {/* Paragraph */}
                    <p className="text-lg text-gray-700 leading-relaxed font-semibold max-w-2xl">
                        Our{" "}
                        <span className="text-blue-600 underline decoration-2 underline-offset-4">
                            Industry experts
                        </span>{" "}
                        bring real-world experience from design, media, technology, and
                        innovation –{" "}
                        <span className="text-blue-600 font-bold">
                            transforming classrooms into professional learning environments.
                        </span>
                    </p>

                    {/* Button */}
                    <button className="px-12 py-5 bg-blue-600 text-white font-black rounded-3xl shadow-xl hover:bg-blue-700 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-lg uppercase tracking-widest relative z-10">
                        Industry Leaders
                    </button>

                    {/* Watermark Text (Changed text color to match image visual) */}
                    <div className="absolute -bottom-16 left-[-150px] pointer-events-none select-none z-0">
                        <h2 className="text-gray-900 opacity-[0.03] font-black text-[180px] lg:text-[230px] tracking-widest leading-none">
                            INDUSTRY EXPERTS
                        </h2>
                    </div>

                </div>

            </div>

        </section>
    );
}