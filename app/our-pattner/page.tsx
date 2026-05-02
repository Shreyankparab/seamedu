import OurCampuses from "@/component/main/campuses";
import SeameduPartners from "@/component/OurPattners/HeroSection";
import IndustryPartners from "@/component/OurPattners/IndustryPartner";
import PlacementPartner from "@/component/OurPattners/PlacementPartner";



export default function OurPartner() {
  return (
    <><main className="bg-white">
      <SeameduPartners />
      <OurCampuses />
      <IndustryPartners />
      <PlacementPartner />
    </main>

    </>
  );
}