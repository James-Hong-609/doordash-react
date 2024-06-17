import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import './App.css'
import Sidebar from './components/Sidebar.jsx';
import Mainside from './components/Mainside.jsx'

function App() {

  return (
    <>
     {/* <Routes>
        <Route path='/miami' element={<Miami />} />
     </Routes> */}
     <div>
       <Navbar />
       <Sidebar />
       <Mainside />
     </div>
    </>
  )
}

export default App
