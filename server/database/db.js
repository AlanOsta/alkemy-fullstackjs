import { Sequelize } from "sequelize"

const db = new Sequelize('alanosta_alkemy', 'alanosta_user', 'Felix1402!', {
  host:'osta.com.ar',
  dialect: 'mysql'
})

export default db
