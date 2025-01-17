import z from 'zod'
import { PlaylistModel } from '../../models/Playlist'


export interface GetPlaylistsInputDTO {

}

export type GetPlaylistsOutputDTO = PlaylistModel[]

export const GetPlaylistsSchema = z.object({
    token: z.string().min(1)
})