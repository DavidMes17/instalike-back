import getTodosPosts from "../models/postsModels.js";

async function listarPosts(req, res) {
    // chama a função para buscar os posts
    const posts = await getTodosPosts();
    // envia uma resposta HTTP com status 200 (OK) e os posts no formato
    res.status(200).json(posts);
}
export default listarPosts;
