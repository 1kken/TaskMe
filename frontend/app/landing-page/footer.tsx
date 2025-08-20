import { CheckCircle } from "lucide-react"

export function Footer() {
    return (
        <footer id="contact" className="bg-muted/50 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold font-heading text-foreground">TaskMe</span>
                        </div>
                        <p className="text-muted-foreground mb-4 max-w-md">
                            Streamline your team's workflow with role-based task management designed for modern organizations.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold font-heading text-foreground mb-4">Product</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold font-heading text-foreground mb-4">Support</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; 2024 TaskMe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
