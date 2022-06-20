import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/esm/Button'

const URI = 'http://localhost:8000/entries/'

const ShowEntries = () => {
  const [entries, setEntry] = useState([])
  useEffect( () => {
    getEntries()
  },[])

  const getEntries = async () => {
    const res = await axios.get(URI)
    setEntry(res.data)
  }

  const deleteEntry = async (id) => {
    await axios.delete(`${URI}${id}`)
    getEntries()
    
  }

  return(
    <Container>
      <Row>
        <Col>
          <Link to='/add' className='btn btn-primary my-2'>Add new entry</Link>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Concept</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { entries.map( (entry) => (
                <tr key={entry.id}>
                  <td>{ entry.concept }</td>
                  <td>${ entry.amount }</td>
                  <td>{ entry.date }</td>
                  <td>{ entry.type }</td>
                  <td>
                    <Link to={`/edit/${entry.id}`} className='btn btn-info mx-1'><i className='fa-solid fa-pen'></i></Link>
                    <Button className='btn-danger mx-1' onClick={ () => deleteEntry(entry.id)}><i className='fa-solid fa-trash-can'></i></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )

}

export default ShowEntries