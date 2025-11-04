import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import BlackVarejo from './pages/BlackVarejo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/varejo" element={<BlackVarejo />} />
      </Routes>
    </Router>
  )
}

export default App
