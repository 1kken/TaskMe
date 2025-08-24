import type {ZodError} from "zod";

export type ServerResponse = {
    message?: string
    errors?: Record<string, string[]>
}
export default function errorParser(actionData: ServerResponse) {
    let parsedMessage: string | null = null;
    let parsedErrors: Record<string, string | undefined> = {};
    if (actionData.errors) {
        Object.entries(actionData.errors).forEach(([field, messages]) => {
            parsedErrors[field] = Array.isArray(messages) ? messages[0] : String(messages)
        })
    }

    if (actionData.message && !actionData.errors) {
        parsedMessage = actionData.message;
    }

    return {parsedErrors,parsedMessage};
}

export function zodErrorParse(zodError:ZodError){
    let parsedErrors: Record<string, string | undefined> = {};

    zodError.issues.forEach(e => {
        parsedErrors[e.path[0].toString()] = e.message;
    })

    return {errors: parsedErrors};
}