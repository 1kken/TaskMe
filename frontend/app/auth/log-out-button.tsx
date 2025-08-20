import { Button } from "~/components/ui/button";
import { useSubmit } from "react-router";
import { useUserStore } from "~/lib/global-stores/user-store";

export default function LogoutButton() {
    const submit = useSubmit();
    const clearUser = useUserStore((state) => state.clearUser);
    
    const handleLogout = () => {
        // Clear user state immediately for better UX
        // The server will handle the actual logout
        clearUser();
        
        // Submit the logout form
        submit(null, { 
            method: "post", 
            action: "auth/logout"
        });
    };

    return (
        <Button
            variant="destructive"
            onClick={handleLogout}
        >
            Logout
        </Button>
    );
}

