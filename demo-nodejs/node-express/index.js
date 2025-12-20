const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.urlencoded())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/profil/:userName', (req, res) => {
    const {userName} = req.params;
  res.send(`<h1>Bonsoir ${userName}</h1>`)
})

app.get("/users", (req, res) =>{
    const users = [
        {
            "username": "jean",
            "age": 25
        },
        {
            "username": "julien",
            "age": 30
        }
    ]

    res.json(users)
});

app.get("/signin", (req, res) =>{
    const signin = `
    <form method="post" action="/signin">
        <input type="text" name="nom" placeholder="Votre Nom">
        <button type="submit">Se connecter</button>
    </form>
    `;
    res.send(signin);
});

app.post("/signin", (req, res) =>{
    // console.log(req.body)
    // traitement des donnees de formulaire

    res.send(`Bienvenue ${req.body.nom}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
