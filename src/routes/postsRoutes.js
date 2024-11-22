import express from "express";
import multer from "multer";
import {listarPosts, postarNovoPost, uploadImagem} from "../controllers/postsController.js";

// Necessário para dispositivos com Windows para não salvar arquivo com nome formado por números aleatórios
// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
  });
  
  // Cria uma instância do middleware Multer
  const upload = multer({ storage: storage });

const routes = (app) => {
    // Habilita o middleware JSON para que o Express possa entender requisições com corpo JSON
    app.use(express.json());

    // Rota para buscar todos os posts
    app.get('/posts', listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);

};
export default routes;
