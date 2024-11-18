import express from 'express';

const app = express();
app.listen(3000, () => { //3000 é a porta do server
    console.log('servidor escutando...');
}); 

app.get('/api', (req, res)=>{
    res.status(200).send('Boas vindas a Imersão!');
});
