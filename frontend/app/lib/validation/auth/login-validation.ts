import * as z from "zod";

export const LoginValidation = z.object(
    {
        email: z.email(),
        password: z.string(),
    }
)