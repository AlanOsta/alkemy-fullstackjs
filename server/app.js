import express from 'express'
import db from './config/db.js'
import OperationModel from './models/OperationsModel.js'

const app = express()

app.set('port', process.env.PORT || 8000)

try {
  await db.authenticate()
  await OperationModel.sync()
  console.log('Database successfully connected')
} catch (error) {
  console.log(`Connection error: ${error}`)
}

app.listen(app.get('port'), () => {
  console.log('Server running on port', app.get('port'))
})
