import HeroSection from "@/component/student-work/HeroSection";
import StudentWorkGrid from "@/component/student-work/StudentWorkGrid";
import React from "react";

export const metadata = {
  title: "Student Work & Industry News | Seamedu",
  description: "Explore the latest student work, industry insights, and career guidance from Seamedu students and experts.",
};

export default function StudentWorkPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StudentWorkGrid />
      {/* Additional sections can be added here */}
    </main>
  );
}
