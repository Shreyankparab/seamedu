"use client";

/* NOTE: Using standard <img> tags for external URLs to avoid 
  next.config.js whitelisting errors for this demo.
*/

const partners = [
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com", url: "https://www.apple.com" },
  { name: "Ableton", logo: "https://logo.clearbit.com/ableton.com", url: "https://www.ableton.com" },
  { name: "Avid", logo: "https://logo.clearbit.com/avid.com", url: "https://www.avid.com" },
  { name: "Sennheiser", logo: "https://logo.clearbit.com/sennheiser.com", url: "https://www.sennheiser.com" },
  { name: "Wacom", logo: "https://logo.clearbit.com/wacom.com", url: "https://www.wacom.com" },
  { name: "Toolbox Studio", logo: "https://logo.clearbit.com/toolbox-studio.com", url: "https://www.toolbox-studio.com" },
  { name: "Unity", logo: "https://logo.clearbit.com/unity.com", url: "https://unity.com" },
  { name: "Autodesk", logo: "https://logo.clearbit.com/autodesk.com", url: "https://www.autodesk.com" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com", url: "https://www.adobe.com" },
];

export default function SeameduPartners() {
  return (
    <section className="bg-[#f0f4ff] min-h-screen flex items-center justify-center px-6 py-16 font-sans">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-48 items-center">

        {/* ─── LEFT CONTENT SECTION ─── */}
        <div className="flex flex-col gap-4 mt-12 -ml-10">
          <div>
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight flex flex-wrap gap-x-4">
              OUR <span className="text-blue-600">PARTNERS</span>
            </h1>
            <p className="text-gray-500 font-bold tracking-[0.2em] text-xs mt-3">
              — POWERED BY GLOBAL INDUSTRY LEADERS
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-gray-900">
              Why Our <span className="text-blue-600">Partnerships</span> Matter?
            </h2>

            {/* Feature Cards - Designed to match image exactly */}
            <div className="space-y-4 max-w-lg">
              {/* Card 1 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-start gap-4 border border-blue-50">
                <div className="p-2.5 bg-blue-50 rounded-xl shrink-0">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="w-7 h-7 opacity-80" alt="cert" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    Industry-Recognized <span className="text-blue-600">Certifications</span>
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mt-1">
                    Curriculum aligned with national skill councils and global certification authorities.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-start gap-4 border border-blue-50">
                <div className="p-2.5 bg-blue-50 rounded-xl shrink-0">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png" className="w-7 h-7 opacity-80" alt="tools" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    Hands-On <span className="text-blue-600">Learning</span> with <span className="text-blue-600">Professional Tools</span>
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mt-1">
                    Students train on software, hardware, and workflows actively used in the industry.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-start gap-4 border border-blue-50">
                <div className="p-2.5 bg-blue-50 rounded-xl shrink-0">
                  <img src="https://cdn-icons-png.flaticon.com/512/1063/1063302.png" className="w-7 h-7 opacity-80" alt="career" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    <span className="text-blue-600">Career</span> & Industry Readiness
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mt-1">
                    Direct exposure to studios, platforms, and ecosystems shaping today's creative economy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Placement Section */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" alt="student" />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">🛡️</span>
                <span className="font-black text-gray-900 text-lg uppercase">2000+ Students Placed</span>
              </div>
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">Many more are in training</p>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDE VISUAL SECTION ─── */}
        <div className="relative h-[600px] flex items-center justify-end ml-10">

          {/* Floating Logo Card - Adjusted position to clear face and added links */}
          <div className="absolute top-44 left-[-120px] lg:left-[-180px] z-50 bg-white/95 backdrop-blur-md p-8 rounded-[40px] shadow-2xl w-[360px] border border-white/60">
            <div className="grid grid-cols-3 gap-y-4 gap-x-2 items-center">
              {partners.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-125"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-8 w-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${item.name}&background=f0f4ff&color=2563eb&bold=true`;
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Blue Background Box */}
          <div className="bg-blue-600 w-full lg:w-[480px] h-[580px] rounded-[45px] relative overflow-hidden shadow-2xl flex items-end">

            {/* "SEAMEDU" Watermark Text */}
            <div className="absolute top-10 left-0 w-full text-center">
              <h2 className="text-white/20 text-7xl font-black tracking-[0.2em] select-none">
                SEAMEDU
              </h2>
            </div>

            {/* Professional Character Image */}
            <img
              src="/images/OurPattner/ourpattner.svg"
              alt="Professional Woman"
              className="relative z-10 ml-10 w-full h-auto object-contain translate-x-12 translate-y-4 scale-110"
            />
          </div>
        </div>

      </div>
    </section>
  );
}