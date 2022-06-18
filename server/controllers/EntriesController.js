import EntriesModel from '../models/EntriesModel.js'

// Get all entries
export const getAllEntries = async (req, res) => {
  try {
    const entries = await EntriesModel.findAll()
    res.json(entries)
  } catch (error) {
    res.json( {message: error.message} )
  }
}

// Get entry by id
export const getEntry = async (req, res) => {
  try {
    const entry = await EntriesModel.findAll({
      where:{ id: req.params.id }
    })
    res.json(entry[0])
  } catch (error) {
    res.json( {message: error.message} )
  }
}

// Add new entry
export const addEntry = async (req, res) => {
  try {
    await EntriesModel.create(req.body)
    res.json( {message: 'New entry successfully created'} )
    
  } catch (error) {
    res.json( {message: error.message} )
  }
}

// Update entry by id
export const updateEntry = async (req, res) => {
  try {
    await EntriesModel.update(req.body, {
      where:{ id: req.params.id }
    })
    res.json( {message: 'Entry successfully updated'} )
  } catch (error) {
    res.json( {message: error.message} )
  }
}

// Delete entry by id
export const deleteEntry = async (req, res) => {
  try {
    await EntriesModel.destroy({
      where:{ id: req.params.id }
    })
    res.json( {message: 'Entry successfully deleted'} )
  } catch (error) {
    res.json( {message: error.message} )
  }
}
