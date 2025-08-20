import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Shield, Users, Globe } from "lucide-react"

export function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
                        Everything You Need to Manage Tasks
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Built for modern teams with advanced role management and seamless collaboration
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="border-border hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Shield className="w-12 h-12 text-primary mb-4" />
                            <CardTitle className="font-heading">Role-Based Access</CardTitle>
                            <CardDescription>Granular permissions ensure everyone sees exactly what they need to see</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="border-border hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Users className="w-12 h-12 text-secondary mb-4" />
                            <CardTitle className="font-heading">Team Collaboration</CardTitle>
                            <CardDescription>Real-time updates and seamless communication across all team levels</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="border-border hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Globe className="w-12 h-12 text-primary mb-4" />
                            <CardTitle className="font-heading">Multi-Organization</CardTitle>
                            <CardDescription>Manage multiple organizations and projects from a single dashboard</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    )
}
