const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

// Config Handlebars
app.engine("hbs", engine({ 
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "src/views/layouts"),
    partialsDir: path.join(__dirname, "src/views/partials")
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Rotas
app.get("/", (req, res) => res.render("home"));
app.get("/carrinho", (req, res) => res.render("cart"));

// Iniciar servidor
app.listen(3000, () => console.log("➡ Servidor rodando http://localhost:3000"));
