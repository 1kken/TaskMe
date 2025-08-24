import { useState, useEffect } from "react"
import { Form, NavLink, useActionData, useNavigation } from "react-router"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { cn } from "~/lib/utils"
import { PasswordInput } from "~/components/ui/password-input"
import errorParser from "~/lib/validation/errorParser";

type ServerResponse = {
    message?: string
    errors?: Record<string, string[]>
}

export default function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
    const actionData = useActionData() as ServerResponse | null
    const navigation = useNavigation()   // 👈 get navigation state
    const isSubmitting = navigation.state === "submitting"

    const [errors, setErrors] = useState<Record<string, string | undefined>>({})
    const [generalError, setGeneralError] = useState<string | null>(null)

    useEffect(() => {
        if (!actionData) return

        const {parsedErrors,parsedMessage} = errorParser(actionData);

        if(parsedMessage){
            setGeneralError(parsedMessage)
        }else{
            setGeneralError(null);
        }

        if(parsedErrors){
            setErrors(parsedErrors)
        }else{
            setErrors({})
        }
    }, [actionData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
        if (generalError) setGeneralError(null)
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0 ">
                <CardContent className="grid p-0 md:grid-cols-2 w-[900px]">
                    <Form method="post" className="p-6 md:p-8 flex flex-col gap-6">
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-2xl font-bold">Welcome</h1>
                            <p className="text-muted-foreground text-balance">
                                Register to use TaskMe
                            </p>
                        </div>

                        {generalError && <p className="text-red-500 text-center">{generalError}</p>}

                        {/* Name */}
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Juan De La Cruz"
                                required
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
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
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div className="grid gap-3">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <PasswordInput
                                id="password"
                                name="password"
                                required
                                onChange={handleChange}
                            />
                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="grid gap-3">
                            <div className="flex items-center">
                                <Label htmlFor="password_confirmation">Confirm Password</Label>
                            </div>
                            <PasswordInput
                                id="password_confirmation"
                                name="password_confirmation"
                                required
                                onChange={handleChange}
                            />
                            {errors.password_confirmation && (
                                <p className="text-red-500 text-xs">{errors.password_confirmation}</p>
                            )}
                        </div>

                        {/* Submit button with spinner */}
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <div className="flex items-center justify-center gap-2">
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                    Registering...
                                </div>
                            ) : (
                                "Register"
                            )}
                        </Button>

                        <div className="text-center text-sm">
                            Already have an account?{" "}
                            <NavLink to="/auth/login" className="underline underline-offset-4">
                                Login
                            </NavLink>
                        </div>
                    </Form>

                    <div className="bg-muted relative hidden md:block">
                        <img
                            src="/logo.webp"
                            alt="Login illustration"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
