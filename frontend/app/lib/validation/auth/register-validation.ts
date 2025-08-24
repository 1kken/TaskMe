import {z} from "zod";

const PasswordSchema = z
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
        );
export const RegisterValidation = z.object({
    name: z.string().refine((val) =>
            val.length >= 3,
        {
            message: "Name must be at least 3 characters long."
        }
    ),
    email: z.string(),
    password: PasswordSchema,
    password_confirmation:z.string()
}).refine((data) => data.password === data.password_confirmation,{
    path:['password'],
    message:"Password do not match",
})