import express from "express";
import multer from "multer";
import cors from "cors"
import {
  atualizarNovoPost,
  listarPosts,
  postarNovoPost,
  uploadImagem,
} from "../controllers/postsController.js";


const corsOptions = {
  origin:"http://localhost:8000",
  optionsSuccesStatus:200
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname);
  },
});
const upload = multer({dest:"./uploads",storage});

const routes = (app) => {
  // Configura o servidor para processar requisições no formato JSON
  app.use(express.json());

  app.use(cors(corsOptions))
  // Define a rota GET "/posts" para listar todos os posts
  app.get("/posts", listarPosts);

  // function buscarId(id){
  //     return posts.findIndex((post) =>{
  //         return post.id === Number(id);
  //     })
  // } 
  // app.get("/post/:id",(req,res) => {
  //     const index = buscarId(req.params.id);
  //     res.status(200).json(posts[index])
  // })

  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
  app.put("/upload/:id", atualizarNovoPost);

};

export default routes;
