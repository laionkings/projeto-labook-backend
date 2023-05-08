import z from 'zod'

export interface DeletePlaylistInput {
    token: string,
    idToDelete: string
}

export type DeletePlaylistOutput = undefined

export const DeletePlaylistSchema = z.object({
    token: z.string().min(1),
    idToDelete: z.string().min(1),
})