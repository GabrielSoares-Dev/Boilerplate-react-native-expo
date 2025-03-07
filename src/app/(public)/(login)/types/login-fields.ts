import z from 'zod'
import { loginSchema } from '@app/(public)/(login)/schemas'

export type LoginFields = z.infer<typeof loginSchema>
