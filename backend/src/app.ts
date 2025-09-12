import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
// Polyfill fetch em Node < 18
try {
  // @ts-ignore
  if (typeof fetch === 'undefined') {
    // Dinamicamente importa undici somente se necessário
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { fetch: undiciFetch } = require('undici');
    // @ts-ignore
    global.fetch = undiciFetch;
  }
} catch {
  // Ignora se undici não estiver instalado – veremos erro claro no log
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API funcionando' });
});

// Prefixo para as rotas da API
app.use('/api', productRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
