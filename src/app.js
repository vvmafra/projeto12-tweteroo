import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

const users = []
const tweets = []

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body

    const newUsers = { username, avatar }

    users.push(newUsers)
    res.send("OK")
})

// app.get("", (req, res) => {
//     res.send()
// })

const PORT = 5000
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))