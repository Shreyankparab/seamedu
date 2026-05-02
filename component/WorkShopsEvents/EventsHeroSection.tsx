import Image from 'next/image';

const EventsHeroSection = () => {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-6">
                    {/* Left Column: Text and Button */}
                    <div className="flex-1 space-y-8 ">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black ml-10 md:ml-20">
                            WHERE{" "}
                            <span className="text-blue-600  duration-[1.5s]">
                                LEARNING
                            </span>{" "}
                            MEETS THE{" "}
                            <span className="text-blue-600  delay-[0.5s] duration-[1.5s]">
                                REAL WORLD
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl ml-10 md:ml-20">
                            From{" "}
                            <span className="font-semibold text-blue-600">
                                industry talks
                            </span>{" "}
                            and{" "}
                            <span className="font-semibold text-blue-600">
                                workshops
                            </span>{" "}
                            to{" "}
                            <span className="font-semibold text-blue-600">
                                competitions
                            </span>{" "}
                            and{" "}
                            <span className="font-semibold text-blue-600">
                                showcases
                            </span>
                            , our events create platforms for{" "}
                            <span className="font-semibold text-blue-600">
                                learning, collaboration,
                            </span>{" "}
                            and{" "}
                            <span className="font-semibold text-blue-600">
                                professional growth
                            </span>
                            .
                        </p>

                        <button className="bg-blue-600 hover:bg-blue-700 ml-20 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-colors duration-300">
                            View All Events
                        </button>
                    </div>

                    {/* Right Column: Illustration with Animation Effects */}
                    <div className="flex-1 relative hidden md:block">
                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src="/images/WorkShopsEvents/EventHeroSection.svg" // Replace with the actual path to your image
                                alt="Event Illustration"
                                width={800} // Adjust based on your original image dimensions
                                height={600}
                                className="w-full h-auto"
                            />

                            {/* Ping Animation Effect - Placeholder (e.g., around the globe icon) */}
                            <span className="absolute top-[28%] left-[67.3%] transform -translate-x-1/2 -translate-y-1/2 flex h-8 w-8">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                                {/* You can add a subtle pointer here if desired */}
                                {/* <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span> */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsHeroSection;