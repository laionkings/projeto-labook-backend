import z from 'zod'

export interface LoginIputDTO {
    email: string,
    password: string
}

export interface LoginOutputDTO {
    token: string
}

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4)
})