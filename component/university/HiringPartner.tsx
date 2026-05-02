"use client";

import Image from "next/image";

const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Systems_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
];

export default function HiringPartners() {
    return (
        <section className="py-16 bg-gray-100 overflow-hidden">

            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900">
                    HIRING <span className="text-blue-600">PARTNERS</span>
                </h2>

                {/* <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-2"></div> */}
            </div>

            {/* Slider */}
            <div className="overflow-hidden w-full">

                <div className="flex items-center gap-14 w-max animate-scroll hover:[animation-play-state:paused]">

                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">

                            <Image
                                src={logo}
                                alt="partner logo"
                                width={120}
                                height={40}
                                className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}