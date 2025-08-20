import { HeroSection } from "./hero-section"
import { FeaturesSection } from "./features-section"
import { RolesSection } from "./roles-section"
import { CTASection } from "./cta-section"
import { Footer } from "./footer"

export default function TaskMeLanding() {
    return (
        <div className="min-h-screen py-1 ">
            <HeroSection />
            <FeaturesSection />
            <RolesSection />
            <CTASection />
            <Footer />
        </div>
    )
}