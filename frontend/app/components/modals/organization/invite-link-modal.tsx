import {Button} from "~/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import {Input} from "~/components/ui/input"
import {Forward} from "lucide-react";
import {axiosInstance} from "~/lib/axios";
import {toast} from "sonner";
import {useEffect, useState} from "react";
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;


interface Props {
    organization_id: string,
}

export function InviteLinkModal({organization_id}: Props) {
    const [loading, setLoading] = useState(false)
    const [inviteLink, setInviteLink] = useState("");


    useEffect(() => {
        const getInviteToken = async () => {
            try {
                const result = await axiosInstance.post('/api/organization/invite', {organization_id});
                const token = result.data.invite.id;
                setInviteLink(`${FRONTEND_URL}/invite?token=${token}`);
                setLoading(true);
            } catch (err) {
                toast.error("Error! Please refresh page!");
            } finally {
                setLoading(false);
            }
        }
        getInviteToken();
    }, [organization_id]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(inviteLink);
            toast.info("Invite link copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex items-center text-sm gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
                    <Forward className="text-muted-foreground" size={12}/>
                    <span>Share Organization</span>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Share Organization</DialogTitle>
                    <DialogDescription>
                        Share the organization with a user via a link.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="flex items-center space-x-2">
                        <Input type="text" value={inviteLink} readOnly/>
                        <Button onClick={handleCopy} disabled={loading}>Copy</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
