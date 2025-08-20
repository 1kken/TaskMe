import { Button } from "~/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-6">
                        Ready to Transform Your Team's Productivity?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join thousands of teams already using TaskMe to streamline their workflow
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6">
                            Start Free Trial
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
