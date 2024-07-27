import { z } from 'zod'

// User
export const AuthSchema = {
  login: z.object({
    username: z.string().min(1, 'Informe o nome do usuário'),
    password: z.string().min(4, 'A senha precisa pelo menos 4 caracteres'),
  }),
  register: z
    .object({
      name: z.string().min(1, 'Nome é obrigatório'),
      email: z.string().email('E-mail inválido'),
      password: z.string().min(4, 'A senha precisa pelo menos 4 caracteres'),
      confirmPassword: z.string().optional().nullable(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'As senhas não coincidem',
      path: ['confirmPassword'],
    }),
}

// Courses
export const CourseSchema = {
  create: z.object({
    courseName: z.string().min(1, 'Preencha o nome do curso'),
    pointsWorth: z
      .string()
      .min(1, 'Informe a pontuação do curso')
      .refine(
        (val) => {
          const parsed = Number(val)
          return !isNaN(parsed) && parsed > 0
        },
        { message: 'A pontuação deve ser um número maior que zero' },
      )
      .transform((val) => Number(val)),
  }),
  update: z.object({
    courseId: z
      .string()
      .refine(
        (val) => {
          const parsed = Number(val)
          return !isNaN(parsed) && parsed > 0
        },
        { message: 'ID inválido' },
      )
      .transform((val) => Number(val)),
    courseName: z.string().min(1, 'Preencha o nome do curso'),
    pointsWorth: z
      .string()
      .min(1, 'Informe a pontuação do curso')
      .refine(
        (val) => {
          const parsed = Number(val)
          return !isNaN(parsed) && parsed > 0
        },
        { message: 'A pontuação deve ser um número maior que zero' },
      )
      .transform((val) => Number(val)),
  }),
}

// Atividades
export const ActivitySchema = {
  create: z.object({
    courseId: z
      .string()
      .refine(
        (val) => {
          const parsed = Number(val)
          return !isNaN(parsed) && parsed > 0
        },
        { message: 'ID inválido' },
      )
      .transform((val) => Number(val)),
    question: z.string().min(1, 'Informe o enunciado'),
    option1: z.string().min(1, 'Informe a opção A'),
    option2: z.string().min(1, 'Informe a opção B'),
    option3: z.string().min(1, 'Informe a opção C'),
    option4: z.string().min(1, 'Informe a opção D'),
    correctAnswer: z.string().min(1, 'Informe a resposta correta'),
  }),
  update: z.object({
    courseId: z
      .string()
      .refine(
        (val) => {
          const parsed = Number(val)
          return !isNaN(parsed) && parsed > 0
        },
        { message: 'ID inválido' },
      )
      .transform((val) => Number(val)),
    activityId: z
      .string()
      .refine(
        (val) => {
          const parsed = Number(val)
          return !isNaN(parsed) && parsed > 0
        },
        { message: 'ID inválido' },
      )
      .transform((val) => Number(val)),
    question: z.string().min(1, 'Informe o enunciado'),
    option1: z.string().min(1, 'Informe a opção A'),
    option2: z.string().min(1, 'Informe a opção B'),
    option3: z.string().min(1, 'Informe a opção C'),
    option4: z.string().min(1, 'Informe a opção D'),
    correctAnswer: z.string().min(1, 'Informe a resposta correta'),
  }),
}
