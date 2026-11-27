import z from "zod";

export const sendMessageSchema = z.object({
  lastName: z.string().trim().min(1, "Le nom est obligatoire"),
  firstName: z.string().trim().min(1, "Le prénom est obligatoire"),
  phone: z.e164("Numéro invalide").trim().optional(),
  email: z.email("Email invalide").min(1, "L'email est obligatoire"),
  message: z.string().trim().min(1, "Le message est obligatoire"),
});

export type SendMessage = z.infer<typeof sendMessageSchema>;
