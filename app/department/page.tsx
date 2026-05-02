import React from "react";
// import HeroSection from "@/component/department/NewHeroSection";
import Certificates from "@/component/department/Certificates";
import ProgramExplorer from "@/component/department/ProgramExplorer";
import TopPlacement from "@/component/main/TopPlacement";
import PlacementPartners from "@/component/department/PlacementPartners";
import FAQsSection from "@/component/main/FAQsSection";
import Footer from "@/component/Footer";
import CertificationsOffered from "@/component/university/CertificationOffered";
import PlacementPartner from "@/component/main/PlacementPartner";
import HeroSections from "@/component/department/HeroSection";

export default function DepartmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSections />
            {/* <HeroSection /> */}
            <CertificationsOffered />
            <ProgramExplorer />
            <TopPlacement />
            {/* <PlacementPartners /> */}
            <PlacementPartner titlePart1="Hiring" count="100" />
            <FAQsSection />
            {/* <Footer /> */}
        </main>
    );
}
