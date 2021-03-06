import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const EntriesModel = db.define('entries', {
  concept: { type: DataTypes.STRING },
  amount: { type: DataTypes.DECIMAL },
  date: { type: DataTypes.DATE },
  type: { type: DataTypes.STRING },
  user_id: { type: DataTypes.NUMBER }
})

export default EntriesModel
