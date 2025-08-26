import React from "react";
import { Skeleton } from "~/components/ui/skeleton";
import {LoadingSpinner} from "~/components/ui/LoadingSpinner";

export default function HydrateFallBackUI() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full relative">
            <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
                {/* Left Column - Big Skeletons */}
                <div className="col-span-2 flex flex-col gap-6">
                    <Skeleton className="h-40 w-full rounded-xl bg-red-200 animate-pulse" />
                    <Skeleton className="h-40 w-full rounded-xl bg-red-200 animate-pulse" />
                </div>

                {/* Right Column - Small Skeletons */}
                <div className="flex flex-col gap-6">
                    <Skeleton className="h-20 w-full rounded-lg bg-red-200 animate-pulse" />
                    <Skeleton className="h-20 w-full rounded-lg bg-red-200 animate-pulse" />
                    <Skeleton className="h-20 w-full rounded-lg bg-red-200 animate-pulse" />
                </div>
            </div>

        </div>
    );
}
