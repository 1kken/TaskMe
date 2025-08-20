import { Button } from "~/components/ui/button"
import { Zap, ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-tight">
                        Streamline Your Team's
                        <span className="text-primary block">Workflow with TaskMe</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        Powerful task management with role-based access control. From super admins to clients, everyone gets the
                        right tools for their responsibilities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6">
                            Start Free Trial
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                            Watch Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
