import { Sequelize } from "sequelize"

const db = new Sequelize('alanosta_alkemy_test', 'alanosta_alkemy', 'Alkemy2022!', {
  host:'osta.com.ar',
  dialect: 'mysql'
})

export default db
