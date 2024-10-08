import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "O nome de usuário deve ter pelo menos 2 caracteres.")
    .max(50, "O nome de usuário deve ter no máximo 50 caracteres."),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de telefone inválido"
    ),
});
