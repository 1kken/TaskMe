import { Button } from "~/components/ui/button"
import { useSubmit, useNavigation } from "react-router"
import { useUserStore } from "~/lib/global-stores/user-store"

export default function LogoutButton() {
    const submit = useSubmit()
    const navigation = useNavigation()
    const clearUser = useUserStore((state) => state.clearUser)

    const isLoggingOut =
        navigation.state === "submitting" &&
        navigation.formAction === "auth/logout"

    const handleLogout = () => {
        // Clear user state immediately for better UX
        clearUser()

        // Submit the logout form
        submit(null, {
            method: "post",
            action: "auth/logout",
        })
    }

    return (
        <Button
            variant="destructive"
            onClick={handleLogout}
            disabled={isLoggingOut}
        >
            {isLoggingOut ? (
                <div className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Logging out...
                </div>
            ) : (
                "Logout"
            )}
        </Button>
    )
}


