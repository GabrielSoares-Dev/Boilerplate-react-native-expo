import z from 'zod'
import { loginSchema } from '@pages/public/login/schemas'

export type LoginFields = z.infer<typeof loginSchema>
