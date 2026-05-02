import React from "react";

interface StatBoxProps {
  value: React.ReactNode;
  label: string;
  dark?: boolean;
  blueText?: boolean;
}

const StatBox: React.FC<StatBoxProps> = ({
  value,
  label,
  dark = false,
  blueText = false,
}) => (
  <div
    className={`p-6 md:p-8 flex flex-col justify-center items-center text-center rounded-2xl transition-all duration-300 hover:shadow-lg ${dark ? "bg-[#1e2126] text-white hover:bg-[#2a2d34]" : "bg-[#f3f4f6] text-gray-800 hover:bg-[#e5e7eb]"}`}
  >
    <span
      className={`text-4xl md:text-5xl font-bold mb-2 ${blueText ? "text-blue-600" : ""}`}
    >
      {value}
    </span>
    <span className="text-sm md:text-base font-medium opacity-90">{label}</span>
  </div>
);

interface StudentMiniCardProps {
  name: string;
  company: string;
  packageAmt: string;
  imageUrl: string;
  logo: string;
}

const StudentMiniCard: React.FC<StudentMiniCardProps> = ({
  name,
  company,
  packageAmt,
  imageUrl,
  logo,
}) => (
  <div className="flex flex-col items-center p-6 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl min-w-[260px] mx-4 shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
    <div className="relative w-28 h-28 mb-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover rounded-full border-4 border-blue-50 shadow-sm"
      />
      <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-md border border-slate-50">
        <img src={logo} alt={company} className="h-7 w-7 object-contain" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-900">{name}</h3>
    <p className="text-sm text-slate-500 mb-3 font-medium">
      Placed at {company}
    </p>
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100">
      ₹{packageAmt} LPA
    </div>
  </div>
);

const allCards = [
  {
    name: "Tanay Bhor",
    company: "Amazon",
    packageAmt: "44.00",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Tanay Bhor",
    company: "Microsoft",
    packageAmt: "51.00",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Tanay Bhor",
    company: "Google",
    packageAmt: "62.00",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Tanay Bhor",
    company: "Meta",
    packageAmt: "58.00",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Tanay Bhor",
    company: "Apple",
    packageAmt: "70.00",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Tanay Bhor",
    company: "Netflix",
    packageAmt: "55.00",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
];

const PlacementsOverviewNew = () => {
  return (
    <div className="py-16 md:py-24 bg-white font-sans text-slate-900 overflow-hidden flex flex-col justify-center">
      <style>{`
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
    .animate-scroll {
        animation: scroll 20s linear infinite;
    }
    .animate-scroll:hover {
        animation-play-state: paused;
    }
`}</style>

      <div className="max-w-7xl mx-auto w-full space-y-16 px-4 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Placement Center</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none">
            Placements &nbsp;<span className="text-blue-600 not-italic">Overview</span>
          </h3>
        </div>

        {/* Stats Grid - Full Width */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatBox value="100%" label="Placement Assistance" dark />
          <StatBox value="54 Lacs" label="Highest Package Offer" blueText />
          <StatBox value="40 Lacs" label="Highest Package Placed" blueText />
          <StatBox value="50+" label="Recruiting Partners" dark />
        </div>
      </div>

      {/* Placed Students Marquee - Extended slightly outside to look full width seamlessly */}
      <div className="relative w-full overflow-hidden mt-16 pt-4 pb-8">
        {/* Fading edges */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex w-max animate-scroll">
          {allCards.map((card, i) => (
            <StudentMiniCard key={i} {...card} />
          ))}
          {allCards.map((card, i) => (
            <StudentMiniCard key={"clone-" + i} {...card} />
          ))}
          {/* Extra duplicated cards for perfect continuous scrolling across ultra-wide monitors */}
          {allCards.map((card, i) => (
            <StudentMiniCard key={"clone2-" + i} {...card} />
          ))}
          {allCards.map((card, i) => (
            <StudentMiniCard key={"clone3-" + i} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementsOverviewNew;














// import React from "react";

// interface StatBoxProps {
//   value: React.ReactNode;
//   label: string;
//   dark?: boolean;
//   blueText?: boolean;
// }

// const StatBox = ({
//   value,
//   label,
//   dark = false,
//   blueText = false,
// }: StatBoxProps) => (
//   <div
//     className={`p-6 md:p-8 flex flex-col justify-center items-center text-center rounded-2xl transition-all duration-300 hover:shadow-lg ${dark ? "bg-[#1e2430] text-white hover:bg-[#252b3b] border border-white/10" : "bg-[#1a2035] text-white hover:bg-[#1e2640] border border-white/10"}`}
//   >
//     <span
//       className={`text-4xl md:text-5xl font-bold mb-2 ${blueText ? "text-blue-400" : "text-white"}`}
//     >
//       {value}
//     </span>
//     <span className="text-sm md:text-base font-medium opacity-90">{label}</span>
//   </div>
// );

// interface StudentMiniCardProps {
//   name: string;
//   company: string;
//   packageAmt: string;
//   imageUrl: string;
//   logo: string;
// }

// const StudentMiniCard = ({
//   name,
//   company,
//   packageAmt,
//   imageUrl,
//   logo,
// }: StudentMiniCardProps) => (
//   <div className="flex flex-col items-center p-6 bg-white border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] rounded-2xl min-w-[260px] mx-4 shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
//     <div className="relative w-28 h-28 mb-4">
//       <img
//         src={imageUrl}
//         alt={name}
//         className="w-full h-full object-cover rounded-full border-4 border-blue-900/50 shadow-sm"
//       />
//       <div className="absolute -bottom-2 -right-2 bg-[#0f1117] p-1.5 rounded-full shadow-md border border-white/10">
//         <img src={logo} alt={company} className="h-7 w-7 object-contain brightness-150" />
//       </div>
//     </div>
//     <h3 className="text-xl font-bold text-black">{name}</h3>
//     <p className="text-sm text-slate-400 mb-3 font-medium">
//       Placed at {company}
//     </p>
//     <div className="bg-gradient-to-r from-blue-900/60 to-indigo-900/60 text-blue-300 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-700/40">
//       ₹{packageAmt} LPA
//     </div>
//   </div>
// );

// const allCards = [
//   {
//     name: "Tanay Bhor",
//     company: "Amazon",
//     packageAmt: "44.00",
//     imageUrl:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//   },
//   {
//     name: "Tanay Bhor",
//     company: "Microsoft",
//     packageAmt: "51.00",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//   },
//   {
//     name: "Tanay Bhor",
//     company: "Google",
//     packageAmt: "62.00",
//     imageUrl:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//   },
//   {
//     name: "Tanay Bhor",
//     company: "Meta",
//     packageAmt: "58.00",
//     imageUrl:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
//   },
//   {
//     name: "Tanay Bhor",
//     company: "Apple",
//     packageAmt: "70.00",
//     imageUrl:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
//   },
//   {
//     name: "Tanay Bhor",
//     company: "Netflix",
//     packageAmt: "55.00",
//     imageUrl:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//   },
// ];

// const PlacementsOverviewNew = () => {
//   return (
//     <div className="py-16 md:py-24 bg-[#0f1117] font-sans text-white overflow-hidden flex flex-col justify-center">
//       <style>{`
//     @keyframes scroll {
//         0% { transform: translateX(0); }
//         100% { transform: translateX(-50%); }
//     }
//     .animate-scroll {
//         animation: scroll 20s linear infinite;
//     }
//     .animate-scroll:hover {
//         animation-play-state: paused;
//     }
// `}</style>

//       <div className="max-w-7xl mx-auto w-full space-y-16 px-4 md:px-12">
//         {/* Header Section */}
//         <div className="text-center space-y-4 max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight mb-8 md:mb-12 text-center">
//             <span className="text-white">Placements</span>{" "}
//             <span className="text-blue-400">Overview</span>
//           </h2>
//         </div>

//         {/* Stats Grid - Full Width */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//           <StatBox value="100%" label="Placement Assistance" dark />
//           <StatBox value="54 Lacs" label="Highest Package Offer" blueText />
//           <StatBox value="40 Lacs" label="Highest Package Placed" blueText />
//           <StatBox value="50+" label="Recruiting Partners" dark />
//         </div>
//       </div>

//       {/* Placed Students Marquee - Extended slightly outside to look full width seamlessly */}
//       <div className="relative w-full overflow-hidden mt-16 pt-4 pb-8">
//         {/* Fading edges */}
//         <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#0f1117] to-transparent z-10 pointer-events-none"></div>
//         <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#0f1117] to-transparent z-10 pointer-events-none"></div>

//         {/* Marquee Container */}
//         <div className="flex w-max animate-scroll">
//           {allCards.map((card, i) => (
//             <StudentMiniCard key={i} {...card} />
//           ))}
//           {allCards.map((card, i) => (
//             <StudentMiniCard key={"clone-" + i} {...card} />
//           ))}
//           {/* Extra duplicated cards for perfect continuous scrolling across ultra-wide monitors */}
//           {allCards.map((card, i) => (
//             <StudentMiniCard key={"clone2-" + i} {...card} />
//           ))}
//           {allCards.map((card, i) => (
//             <StudentMiniCard key={"clone3-" + i} {...card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacementsOverviewNew;
