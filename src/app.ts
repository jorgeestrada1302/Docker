// src/app.ts
import express, { Application } from 'express';
import todoRoutes from './routes/todo.routes';
import sequelize from './database/config';

const app: Application = express();

app.use(express.json());
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.log('Error: ' + err));
