import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const OperationModel = db.define('operations', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    initialAutoIncrement: true,
    primaryKey: true
  },
  concept: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: { 
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  date: { 
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  type: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: { 
    type: DataTypes.INTEGER,
    allowNull: false
   },
  category: { 
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "General"
   }
})

await OperationModel.sync()

export default OperationModel
