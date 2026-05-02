import Hero from "@/component/about-us/Hero";
import Foundations from "@/component/about-us/Foundations";
import FAQsSection from "@/component/main/FAQsSection";
import LeadershipSection from "@/component/about-us/LeadershipSection";

export default function AboutUsPage() {
    return (
        <main className="flex flex-col w-full overflow-x-hidden">
            <div className="relative z-10">
                <Hero />
            </div>

            <div className="relative z-20 -mt-20 md:-mt-24 lg:-mt-32">
                <Foundations />
            </div>

            <LeadershipSection />
        </main>
    );
}
