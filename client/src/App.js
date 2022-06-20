import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import ShowEntries from './components/ShowEntries.jsx'
import AddEntry from './components/AddEntry.jsx'
import EditEntry from './components/EditEntry.jsx'


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowEntries/> }/>
          <Route path='/add' element={ <AddEntry/> }/>
          <Route path='/edit/:id' element={ <EditEntry/> }/>
        </Routes>
      </BrowserRouter>      
    </Container>
  );
}

export default App;
