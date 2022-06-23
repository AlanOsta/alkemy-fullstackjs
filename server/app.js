import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import entriesRoutes from './routes/routes.js'

const app = express()

app.set('port', process.env.PORT || 8000);
app.use(cors())
app.use(express.json())
app.use('/entries', entriesRoutes)

try {
  await db.authenticate()
  console.log('Database successfully connected')
} catch (error) {
  console.log(`Connection error: ${error}`)
}

app.listen(app.get('port'), () => {
  console.log('Server running on port ', app.get('port'))
})
