import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import helpers from '../lib/helpers.js'

const URI = 'http://localhost:8000/entries/'

const ShowEntries = () => {
  const [entries, setEntries] = useState([])
  const [lastTenEntries, setLastTenEntries] = useState([])
  const [balance, setBalance] = useState(null)
  const [showWarning, setShowWarning] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
 
  useEffect( () => {
    getEntries()
  },[])

  const handleWarningClose = () => setShowWarning(false)

  const handleWarningShow = (id) => {
    setShowWarning(true)
    setDeleteId(id)
  }
    
  const getEntries = async () => {
    const res = await axios.get(URI)    
    setBalance(helpers.calcBalance(res.data))
    setLastTenEntries(helpers.getLastTenEntries(res.data))
    setEntries(res.data)    
  }
  
  const handleOnDelete = () => {    
    setShowWarning(false)
    deleteEntry(deleteId)
  }

  const deleteEntry = async (id) => {    
    await axios.delete(`${URI}${id}`)
    getEntries()    
  }

  return(
    <Container>
      <Row>
        <Col><h1>Total Balance: $ {balance}</h1></Col>
      </Row>  
      <Row>
        <Col>
          <Link to='/add' className='btn btn-primary my-2'>Add new entry</Link>
          
          <Table bordered hover>
            <thead>
              <tr>
                <th colSpan='5' className='text-center'><h3>Last ten entries</h3></th>
              </tr>
              <tr>
                <th>Concept</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { lastTenEntries.map( (entry) => (
                <tr key={entry.id} className={entry.type}>
                  <td>{ entry.concept }</td>
                  <td>${ entry.amount }</td>
                  <td>{ entry.date }</td>
                  <td>{ entry.type }</td>
                  <td>
                    <Modal show={showWarning} onHide={handleWarningClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to permanently delete this entry? </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleWarningClose}>
                            Close
                          </Button>
                          <Button variant="danger" onClick={() => handleOnDelete()}>
                            Delete!
                          </Button>
                        </Modal.Footer>
                    </Modal>
                    
                    <Link to={`/edit/${entry.id}`} className='btn btn-info mx-1'><i className='fa-solid fa-pen'></i></Link>
                    <Button className='btn-danger mx-1' onClick={() => handleWarningShow(entry.id)}><i className='fa-solid fa-trash-can'></i></Button>
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
