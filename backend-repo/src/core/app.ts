import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from '../routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/user', userRoutes);

app.use((req, res, next) => {
    res.status(404).send({ message: 'Not Found' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;