import express from 'express'
import { addEntry, deleteEntry, getAllEntries, getEntry, updateEntry } from '../controllers/EntriesController.js'

const router = express.Router()

router.get('/', getAllEntries)
router.get('/:id', getEntry)
router.post('/', addEntry)
router.put('/:id', updateEntry)
router.delete('/:id', deleteEntry)

export default router
