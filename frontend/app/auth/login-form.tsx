import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {Form, NavLink} from "react-router";
import logo from "public/logo.webp";
export default function LoginForm({
                              className,
                              ...props
                          }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    {/* React Router Form */}
                    <Form method="post" className="p-6 md:p-8 flex flex-col gap-6">
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-2xl font-bold">Welcome back</h1>
                            <p className="text-muted-foreground text-balance">
                                Login to your TaskMe account
                            </p>
                        </div>

                        {/* Email */}
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="grid gap-3">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <NavLink
                                    to="/auth/forgot-password"
                                    className="ml-auto text-sm underline-offset-2 hover:underline"
                                >
                                    Forgot your password?
                                </NavLink>
                            </div>
                            <Input id="password" name="password" type="password" required />
                        </div>

                        {/* Submit */}
                        <Button type="submit" className="w-full">
                            Login
                        </Button>

                        {/* Sign up link */}
                        <div className="text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <NavLink to="/auth/register" className="underline underline-offset-4">
                                Sign up
                            </NavLink>
                        </div>
                    </Form>

                    {/* Side image for desktop */}
                    <div className="bg-muted relative hidden md:block">
                        <img
                            src={logo}
                            alt="Login illustration"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our{" "}
                <NavLink to="/terms">Terms of Service</NavLink> and{" "}
                <NavLink to="/privacy">Privacy Policy</NavLink>.
            </div>
        </div>
    )
}
