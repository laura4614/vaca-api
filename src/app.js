import express from 'express';
import router from './routes/index.js'; 

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/mi-vaquita', router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});