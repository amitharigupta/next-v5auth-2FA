import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string({ invalid_type_error: "Must be a string" }).email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }).max(255),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum is required" }),
  name: z.string().min(1, { message: "Name is required" })
});
