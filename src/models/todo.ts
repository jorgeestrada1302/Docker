// src/models/todo.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/config';

class Todo extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public completed!: boolean;
}

Todo.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'Todo',
  tableName: 'todos'
});

export default Todo;
