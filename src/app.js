import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

const users = []
const tweeteros = []


app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body

    const newUsers = { username, avatar }

    users.push(newUsers)
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    const userfind = users.find((u) => u.username === username);

    if (!userfind) {
        return res.status(401).send("UNAUTHORIZED")
    }

    const newTweets = { userfind, tweet }

    tweeteros.push(newTweets);
    res.send("OK");
  });

app.get("/tweets", (req, res) => {

    let last10Tweets = [];
    const lastestTweets = [];

    last10Tweets = tweeteros.slice(-10).reverse();
     
    last10Tweets.map((l) => {
      lastestTweets.push({
        username: l.userfind.username,
        avatar: l.userfind.avatar,
        tweet: l.tweet,
      });
    });
    res.send(lastestTweets);
  });

const PORT = 5000
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))