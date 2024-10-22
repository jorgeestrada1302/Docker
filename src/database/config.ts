// src/database/config.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('todo_db', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
