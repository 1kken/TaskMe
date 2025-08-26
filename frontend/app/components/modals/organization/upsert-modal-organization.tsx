"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Plus} from "lucide-react"
import {Pencil} from "lucide-react";
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"

import {Input} from "~/components/ui/input"
import {Textarea} from "~/components/ui/textarea"
import {Button} from "~/components/ui/button"
import {axiosInstance} from "~/lib/axios"
import {useState} from "react"
import {useOrganizationsStore} from "~/lib/dashboard-store/organizations-store";
import {toast} from "sonner";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Organization name must be at least 1 character.",
    }).max(255),
    description: z.string().max(255).optional(),
    id: z.string().optional(),
})

interface Organization {
    id: string,
    name: string,
    description: string,
}

export default function UpsertModalOrganization({update, organization}: {
    update?: boolean;
    organization?: Organization
}) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchOrganizationStore = useOrganizationsStore((state) => state.fetchOrganizations);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: organization?.name ?? "",
            description: organization?.description ?? "",
            id: organization?.id ?? "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)
            const {name, description, id} = values
            if (!update) {
                //create
                await axiosInstance.post("/api/organization", {name, description})
                form.reset()
                setOpen(false);
                await fetchOrganizationStore();
                toast.success(`Organization ${name} created successfully!`)
            } else {
                //update
                await axiosInstance.put(`/api/organization/${id}`, {name, description})
                await fetchOrganizationStore();
                setOpen(false);
                toast.success(`Organization ${name} updated successfully!`)
            }

        } catch (error: any) {
            if (error.response?.status === 422) {
                const errors = error.response.data.errors;
                Object.keys(errors).forEach((field) => {
                    form.setError(field as keyof typeof formSchema.shape, {
                        type: "server",
                        message: errors[field][0],
                    });
                });
            } else {
                toast.error("Something went wrong!");
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {update ?
                    <div className="flex items-center text-sm gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
                        <Pencil className="text-muted-foreground" size={12} />
                        <span>Update Organization</span>
                    </div>
                    :
                    <Button variant="ghost" >
                        <Plus size={12}/>
                    </Button>
                }
            </DialogTrigger>

            <DialogContent aria-describedby="Create modal organization">
                <DialogHeader>
                    <DialogTitle>
                        {update ? "Update Organization" : "Create Organization" }
                    </DialogTitle>
                    <DialogDescription>Lets you {update ? "update" : "create"} an Organization.</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Organization Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. TarsierLabs" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Description..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        {update  &&
                            <FormField
                                control={form.control}
                                name="id"
                                render={({field}) => (
                                            <Input hidden  {...field} />
                                )}
                            />
                        }
                        <div className="flex justify-end gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={loading}>
                                    {loading
                                        ? update
                                            ? "Updating..."
                                            : "Creating..."
                                        : update
                                            ? "Update"
                                            : "Create"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

