import express from "express";
import routes from "./src/routes/PostRoutes.js";

// const posts = [
//     {
//         id: 1,
//         descricao: "uma foto",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 2,
//         descricao: "Um lindo pôr do sol",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 3,
//         descricao: "Minha gata adorável",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 4,
//         descricao: "Paisagem montanhosa",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 5,
//         descricao: "Comida deliciosa",
//         imagem: "https://placecats.com/millie/300/150"
//     }
// ];


// Cria uma instância do servidor Express

const app = express();
app.use(express.static("uploads"))
routes(app)
// Inicia o servidor na porta 3000 e exibe uma mensagem no console indicando que ele está ativo

app.listen(3000,() =>{
    console.log("servidor escultando ");
})






