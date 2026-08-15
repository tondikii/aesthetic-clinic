import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Treatments } from "@/components/sections/Treatments";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Doctors } from "@/components/sections/Doctors";
import { Reasons } from "@/components/sections/Reasons";
import { Testimonials } from "@/components/sections/Testimonials";
import { Clinic } from "@/components/sections/Clinic";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";

export default function Home() {
  return <MotionProvider><main className="overflow-hidden"><Navbar /><Hero /><TrustBar /><Treatments /><BeforeAfter /><Doctors /><Reasons /><Clinic /><Testimonials /><FAQ /><FinalCTA /><Footer /></main></MotionProvider>;
}
