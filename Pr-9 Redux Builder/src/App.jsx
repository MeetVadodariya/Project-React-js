
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import AddData from './Components/AddData/AddData'
import EditData from './Components/EditData/EditData'
import store from './Store/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='add' element={<AddData />} />
          <Route path='edit/:id' element={<EditData />} />
        </Routes>
    </>
  )
}

export default App
