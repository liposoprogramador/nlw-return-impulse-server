import express from 'express' 
import { corsConfig } from './configs/corsConfig';
import cors from 'cors';
import { routes } from './routes';

//GET, POST, PUT, PATCH, DELETE

// GET =   Buscar informações
// POST =  Cadastrar informações
// PUT =   Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE= Deletar uma informação


const app = express();

app.use(cors(corsConfig)); 
app.use(express.json());
app.use(routes); 




app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!');
});