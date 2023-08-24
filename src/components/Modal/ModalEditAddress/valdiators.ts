import { z } from "zod";

export const EditAddressSchema = z
  .object({
    ZIP_code: z.string().nonempty("Deve colocar CEP"),
    state: z.string().nonempty("Deve colacar um estado"),
    city: z.string().nonempty("Deve colocar uma cidade"),
    street: z.string().nonempty("Deve colocar uma rua"),
    number: z.string().nonempty("Deve colocar o número da rua"),
    additional_details: z.string().max(40).nullish(),
  })

// export const EditAddressSchema = Editschema.partial()
export type EditAddress = z.infer<typeof EditAddressSchema>;
