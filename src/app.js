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
    console.log(users)
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body

    if (!users.find((user) => user.username === username)) {
        return res.status(401).send("UNAUTHORIZED")
    }

    const newTweets = { username, tweet }

    tweets.push(newTweets)
    console.log(tweets)
    res.send("OK")
})

// app.get("", (req, res) => {
//     res.send()
// })

const PORT = 5000
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))