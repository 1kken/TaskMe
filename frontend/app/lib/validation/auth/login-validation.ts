import * as z from "zod";

export const LoginValidation = z.object(
    {
        email: z.email(),
        password: z
            .string()
            .refine(
                (val) =>
                    val.length >= 8 &&
                    /[a-z]/.test(val) &&   // lowercase
                    /[A-Z]/.test(val) &&   // uppercase
                    /\d/.test(val) &&      // number
                    /[^A-Za-z0-9\s]/.test(val), // symbol (non-alphanumeric, no spaces)
                {
                    message:
                        "Password must be at least 8 characters long, contain both uppercase and lowercase letters, include at least one number, and one symbol.",
                }
            ),
    }
)