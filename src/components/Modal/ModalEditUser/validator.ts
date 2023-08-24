import { z } from "zod";


export const schema = z
  .object({
    name: z.string().nonempty("Deve possuir um Nome"),
    email: z.string().email().nonempty("Deve possuir um email"),
    CPF: z.string().nonempty("Deve possuir um CPF"),
    mobile: z.string().nonempty("Deve possuir um número de telefone"),
    birth_date: z.string().nonempty("Deve possuir uma data"),
    description: z.string().max(50).nullish(),
  })

export const schemaUpdateUser = schema.partial()

export type UpdateData = z.infer<typeof schemaUpdateUser>;