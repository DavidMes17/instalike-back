import express from 'express';

const posts = [
    {
        descricao: 'uma foto teste',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        descricao: 'Gato fazendo yoga',
        imagem: 'https://placekitten.com/400/300'
    },
    {
        descricao: 'Cachorro sorrindo',
        imagem: 'https://placepuppy.com/200/200'
    },
    {
        descricao: 'Paisagem montanhosa',
        imagem: 'https://source.unsplash.com/random/300x200/?mountain'
    },
    {
        descricao: 'Comida deliciosa',
        imagem: 'https://loremflickr.com/320/240/food'
    },
    {
        descricao: 'Citação inspiradora',
        imagem: 'https://picsum.photos/id/237/200/300'
    },
    {
        descricao: 'Arte abstrata',
        imagem: 'https://unsplash.it/300/200'
    }
];
let id = 1;
posts.forEach((post) => {
    post.id = id;
    id++;
});

const app = express();
app.use(express.json()); //tudo que reconhecer, vai converter em json

app.listen(3000, () => { //3000 é a porta do server
    console.log('servidor escutando...');
});

app.get('/boas-vindas', (req, res) => {
    res.status(200).send('Boas vindas a Imersão!');
});
app.get('/posts', (req, res) => {
    res.status(200).json(posts)
});

function buscarPostPorId(id) {
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });
};

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});
