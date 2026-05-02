import FAQsSection from "@/component/main/FAQsSection";
import PlacementPartner from "@/component/main/PlacementPartner";
import TopPlacement from "@/component/main/TopPlacement";
import CertificationsOffered from "@/component/university/CertificationOffered";
import CoursesGrid from "@/component/university/CoursesGrids";

import HeroSection from "@/component/university/HeroSection";
import HowToReachUs from "@/component/university/HowToReach";
import HiringPartners from "@/component/university/HiringPartner";
import OurCampuses from "@/component/university/OurCampuse";
import UniversityHighlight from "@/component/university/UniversityHighlights";
import WhyUs from "@/component/university/WhyUs";




export default function UniversityPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />

            <UniversityHighlight />
            <WhyUs />
            <CertificationsOffered />

            <CoursesGrid />
            <TopPlacement />
            <PlacementPartner titlePart1="Hiring" count="100" />
            <OurCampuses />
            <FAQsSection />
            <HowToReachUs />
        </main>
    )
}