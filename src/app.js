import express from 'express';
import cors from 'cors';
import checkIn from './routes/checkIn.routes.js';

const app = express();

app.use(cors({}));
app.use(express.json());

app.use('/flights', checkIn);

app.use((req, res) => {
 res.status(404).json({
  code: 404,
  data: {},
 });
});

export default app;
