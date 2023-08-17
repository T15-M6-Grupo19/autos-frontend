import { z } from "zod";

export const schema = z
  .object({
    name: z.string().nonempty("Deve possuir um nome"),
    email: z.string().email("Deve ser um e-mail"),
    CPF: z.string().nonempty("Deve possuir um CPF").min(11, "No mínimo 11 caracteres"),
    mobile: z.string().nonempty("Deve colocar um número de telefone"),
    birth_date: z.string().nonempty("Deve colocar uma data"),
    description: z.string().max(50).nullish(),
    ZIP_code: z.string().nonempty("Deve possuir um CEP"),
    state: z.string().nonempty("Deve colacar um estado"),
    city: z.string().nonempty("Deve colocar uma cidade"),
    street: z.string().nonempty("Deve colocar uma rua"),
    number: z.string().nonempty("Deve colocar o número da rua"),
    additional_details: z.string().max(40).nullish(),
    account_type: z.string().optional(),
    password: z.string().nonempty("Senha é obrigatória"),
    confirmPassword: z.string().nonempty("É necessário confirmar a senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
  });

export type RegisterData = z.infer<typeof schema>;
