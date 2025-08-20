import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Settings, Users, FolderOpen, User, Eye } from "lucide-react"

export function RolesSection() {
    return (
        <section id="roles" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
                        Five Roles, One Powerful System
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Each role is designed with specific permissions and capabilities to maximize productivity
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border-border hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <Settings className="w-6 h-6 text-primary" />
                                </div>
                                <Badge variant="default">Super Admin</Badge>
                            </div>
                            <CardTitle className="font-heading">Complete Control</CardTitle>
                            <CardDescription>
                                Manages the entire application including users, roles, permissions, and system settings
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-border hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                                    <Users className="w-6 h-6 text-secondary" />
                                </div>
                                <Badge variant="secondary">Organization Admin</Badge>
                            </div>
                            <CardTitle className="font-heading">Organization Management</CardTitle>
                            <CardDescription>
                                Creates and manages projects within their organization, assigns roles to team members
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-border hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <FolderOpen className="w-6 h-6 text-primary" />
                                </div>
                                <Badge variant="outline">Project Manager</Badge>
                            </div>
                            <CardTitle className="font-heading">Project Leadership</CardTitle>
                            <CardDescription>
                                Creates tasks, assigns team members, tracks progress, and ensures project delivery
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-border hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                                    <User className="w-6 h-6 text-secondary" />
                                </div>
                                <Badge variant="secondary">Team Member</Badge>
                            </div>
                            <CardTitle className="font-heading">Task Execution</CardTitle>
                            <CardDescription>Works on assigned tasks, updates status, collaborates with team members</CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-border hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                        <CardHeader>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-accent" />
                                </div>
                                <Badge variant="outline">Client</Badge>
                            </div>
                            <CardTitle className="font-heading">Project Visibility</CardTitle>
                            <CardDescription>
                                Views progress of their assigned projects with read-only access to relevant information
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    )
}
