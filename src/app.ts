import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

// Routes
// Autenticacion
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
// User hacer una api rest de usuarios

export default app