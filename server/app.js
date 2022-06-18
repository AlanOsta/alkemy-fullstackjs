import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import entriesRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/entries', entriesRoutes)

try {
  await db.authenticate()
  console.log('Database successfully connected')
} catch (error) {
  console.log(`Connection error: ${error}`)
}

app.get('/', (req, res) => {
  res.send('Testing...')
})

app.listen(8000, () => {
  console.log('Server running on port 8000')
})
