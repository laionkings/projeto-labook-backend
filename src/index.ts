import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { UserRouter } from './router/UserRouter'
import { playlistRouter } from './router/playlistRouter'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`)
})
app.use("/users", UserRouter)

app.use("/playlists", playlistRouter)

app.get("/ping", (req, res) => {
    res.send("pong")
})