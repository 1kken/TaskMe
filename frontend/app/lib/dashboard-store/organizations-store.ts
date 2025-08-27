
import { create } from "zustand";
import {axiosInstance} from "~/lib/axios";

export interface Organization{
    id:string,
    slug:string,
    name:string,
    description:string,
    created_at:string,
    updated_at:string,
}

interface OrganizationsStore{
    organizations: Organization[] | [];
    setOrganizations:(organizations:Organization[]) => void;
    updateOrganizations:(organizations:Organization[]) => void;
    fetchOrganizations:()=>Promise<void>;
    clearOrganizations:() => void;
}

export const useOrganizationsStore = create<OrganizationsStore>((set)=>({
    organizations: [],
    setOrganizations:(organizations) => set({organizations}),
    updateOrganizations:(organizations)=> set({organizations}),
    clearOrganizations:() => set({organizations:[]}),
    fetchOrganizations: async () => {
        const result = await axiosInstance.get('/api/organization');
        const organizations = result.data.organizations;
        set({organizations:organizations})
    }
}));