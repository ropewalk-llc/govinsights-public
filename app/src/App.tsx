import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import SchoolDebtTimeline from './pages/SchoolDebtTimeline'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chowan/school-debt-timeline" element={<SchoolDebtTimeline />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
