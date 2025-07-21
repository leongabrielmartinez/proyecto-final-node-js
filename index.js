import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import authRouter from './src/routes/auth.router.js';
import productsRouter from './src/routes/products.router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'Proyecto final node js' });
});

app.use('/api', productsRouter);

app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
