
import type { Route } from "./+types/index";

export async function clientLoader({
                                       params,
                                   }: Route.ClientLoaderArgs) {
    console.log(params.slug);
}

export default function Index(){
    return (
        <>
            <h1>Hello Organization</h1>
        </>
    )
}