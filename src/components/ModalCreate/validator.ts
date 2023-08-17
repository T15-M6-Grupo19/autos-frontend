import { z } from "zod"

export const createContactSchema = z.object({
    fullname: z.string().min(2),
    email: z.string().email(),
    phoneNumber: z.string().length(11)
})

export type TCreateContactData = z.infer<typeof createContactSchema>