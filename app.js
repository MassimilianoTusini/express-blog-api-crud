// Import di express
const express = require("express");

const app = express();

const port = 3000;

const postRouter = require("./routers/posts")

// Middleware per servire file statici 

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("<h1>I nostri prodotti caserecci</h1>")
});

// Rotte per i prodotti
app.use("/posts", postRouter);

// Ascolto della porta
app.listen(port, () => {
    console.log(`Server Attivo su http://lolahost:${port}`)
})
