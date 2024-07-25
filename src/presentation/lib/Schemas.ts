import { z } from 'zod'

export const LoginUserSchema = z.object({
  username: z.string().min(1, 'Informe o nome do usuário'),
  password: z.string().min(4, 'A senha precisa pelo menos 4 caracteres'),
})

export const RegisterUserSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(4, 'A senha precisa pelo menos 4 caracteres'),
    confirmPassword: z.string().optional().nullable(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })
