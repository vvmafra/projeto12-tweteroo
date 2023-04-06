import express from "express"

const app = express()
app.use(cors())

app.get("", (req, res) => {


    res.send()
})

const PORT = 5000
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))