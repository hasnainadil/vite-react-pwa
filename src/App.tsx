import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import DemoPage1 from './components/DemoPage1'
import DemoPage2 from './components/DemoPage2'
import DemoPage3 from './components/DemoPage3'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo1" element={<DemoPage1 />} />
      <Route path="/demo2" element={<DemoPage2 />} />
      <Route path="/demo3" element={<DemoPage3 />} />
    </Routes>
  )
}

export default App
