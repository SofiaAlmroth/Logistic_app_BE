import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(3, { message: "Name is too short" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(5, { message: "Password is too short" }),
});

const updateSchema = z.object({
  name: z.string().min(3, { message: "Name is too short" }).optional(),
  email: z.string().email({ message: "Invalid email" }).optional(),
  password: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function validate(body: FormData) {
  return schema.safeParse(body);
}

export function validateUpdatedUser(body: FormData) {
  return updateSchema.safeParse(body);
}
