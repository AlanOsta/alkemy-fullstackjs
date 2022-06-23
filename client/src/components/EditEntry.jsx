import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'

const URI = 'http://localhost:8000/entries/'

const EditEntry = () => {
  const [concept, setConcept] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('') 
  const [type, setType] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()

  const editEntry = async (e) => {
    e.preventDefault()
    await axios.put(URI+id, {
      concept: concept,
      amount: amount,
      date: date,
    })

    navigate('/')
  }
  
  const getEntryById = async () => {
    const res = await axios.get(URI+id)
    setConcept(res.data.concept)
    setAmount(res.data.amount)
    setDate(res.data.date)
    setType(res.data.type)
  }
  
  useEffect( () => { getEntryById() }, [])


  return (
    <Container>
      <h3>Edit Entry</h3>
      <Form className='border rounded p-3' onSubmit={editEntry}>
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
          <Form.Label>Type - You can not edit this field</Form.Label>
          <Form.Select disabled aria-label="type">
            <option value={type}>{type}</option>                  
          </Form.Select>
        </Form.Group>      
                
        <Button variant="primary" type="submit" className='mx-1'>Submit</Button>
        <Link to='/' className='btn btn-secondary mx-1'>Back</Link>
    </Form>
    </Container>
  )

}


export default EditEntry
