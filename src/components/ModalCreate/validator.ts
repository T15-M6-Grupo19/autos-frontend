import { z } from "zod"

export const createAdSchema = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.string().or(z.date()).optional(),
    fuel: z.string().optional(),
    kilometers: z.string(),
    color: z.string(),
    price: z.string(),
    description: z.string(),
    photos: z.string(),
    morePhotos: z.array(z.string()).optional()
})


export type TCreateAdData = z.infer<typeof createAdSchema>