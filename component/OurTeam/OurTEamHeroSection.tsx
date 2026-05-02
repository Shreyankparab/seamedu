"use client";

export default function OurTeamHeroSections() {

    return (
        <>
            <section className="relative flex bg-white min-h-screen ">
                <div className="flex absolute inset-0 justify-center items-center z-0 lg:justify-end ">
                    <img src="/images/IndustyExpert/IndustryExpertHero.svg" alt="Seamedu Our Team Hero Section Image"
                        className="w-full lg:object-cover   lg:w-auto h-auto lg:h-full object-cover " />
                </div>
                {/* Hero Section Content */}
                <div className="max-w-xl ml-24 mt-40">

                    <h3 className="text-blue-600 font-black tracking-wider uppercase text-4xl md:text-5xl lg:text-6xl ">
                        OUR TEAM
                    </h3>

                    <h1 className="mt-3 z-50 absolute flex flex-col text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                        SHAPING FUTURE <br /> <span className="text-blue-600">CREATORS</span>

                    </h1>

                    {/* Description */}
                    <p className="mt-44 text-gray-600 text-lg leading-relaxed">
                        Our faculty and mentors come from the worlds of{" "}
                        <span className="text-blue-600 font-semibold">design</span>,{" "}
                        <span className="text-blue-600 font-semibold">technology</span>,{" "}
                        <span className="text-blue-600 font-semibold">media</span>, and{" "}
                        <span className="text-blue-600 font-semibold">innovation</span>{" "}
                        bringing <span className="text-blue-600 font-semibold">real-world experience</span>{" "}
                        into every classroom.
                    </p>

                    {/* Button */}
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                        Meet Our Faculty
                    </button>

                </div>

            </section>
        </>
    )
}


// Meet the Team Shaping the Future of Creators
// Our faculty and mentors come from the worlds of design, technology, media, and innovation bringing real-world experience into every classroom.