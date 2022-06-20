import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'


const URI = 'http://localhost:8000/entries/'

const AddEntry = () => {
  const [concept, setConcept] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [type, setType] = useState('')
  const navigate = useNavigate()
  
  const addEntry = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
      concept: concept,
      amount: amount,
      date: date,
      type: type
    })
    navigate('/')
  }

  return (
    <Container>
      <h3>Add New Entry</h3>
      <Form className='border rounded p-3' onSubmit={addEntry}>
        <Form.Group className="mb-3" controlId="formConcept">
          <Form.Label>Concept</Form.Label>
          <Form.Control 
            value={concept}
            onChange={ (e) => setConcept(e.target.value)}
            type="text" 
            placeholder="Entry's description" />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control 
            value={amount}
            onChange={ (e) => setAmount(e.target.value)}
            type="number" 
            placeholder="Entry's amount" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            value={date}
            onChange={ (e) => setDate(e.target.value)}
            type="date" 
            placeholder="Entry's Date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formType">
          <Form.Label>Type</Form.Label>
          <Form.Select aria-label="type" onClick={ (e) => setType(e.target.value) }>
            <option value="income">Income</option>
            <option value="expense">Expense</option>      
          </Form.Select>
        </Form.Group>      
                
        <Button variant="primary" type="submit">Add new entry</Button>
    </Form>
    </Container>
  )
}

export default AddEntry