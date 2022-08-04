import { Sequelize } from "sequelize"

const db = new Sequelize('alan_budman', 'alan_budman', 'Fz82zftecunK', {
  host:'mysql.osta.com.ar',
  dialect: 'mysql'
})

export default db