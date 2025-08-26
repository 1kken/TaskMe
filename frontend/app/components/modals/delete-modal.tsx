import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"
import React, {useState} from "react";
import {
    Form,
    FormField,
} from "~/components/ui/form"
import {useOrganizationsStore} from "~/lib/dashboard-store/organizations-store";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
interface DeleteModalProps {
    trigger: React.ReactNode;
    title?: string;
    description?: string;
    id:string,
    url:string,
}

import {Input} from "~/components/ui/input";
import {axiosInstance} from "~/lib/axios";
import {toast} from "sonner";
import {Trash2} from "lucide-react";

const formSchema = z.object({
    id: z.string(),
})

export function DeleteModal({ trigger, title = "Delete Item", description = "Are you sure?", id,url   }: DeleteModalProps) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchOrganizationStore = useOrganizationsStore((state) => state.fetchOrganizations);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: id,
        },
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)
            const { id} = values
                await axiosInstance.delete(`${url}/${id}`)
                form.reset()
                setOpen(false);
                await fetchOrganizationStore();
                toast.success(`Organization deleted successfully!`)
        } catch (error: any) {
                toast.error("Something went wrong!");
        } finally {
            setLoading(false)
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="id"
                                render={({field}) => (
                                    <Input hidden  {...field} />
                                )}
                            />
                        <div className="flex justify-end gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" variant={"destructive"} disabled={loading}>
                                <Trash2 />
                                {loading ? "Deleting..." : "Delete"}
                            </Button>
                        </div>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}
