import db from '../database/db'
import { DataTypes } from 'sequelize'

const EntriesModel = db.define('entries', {
  concept: { type: DataTypes.STRING },
  amount: { type: DataTypes.DECIMAL },
  date: { type: DataTypes.DATE },
  type: { type: DataTypes.STRING }
})

export default EntriesModel
