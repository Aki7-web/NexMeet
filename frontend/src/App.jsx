import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing.jsx'
import './App.css'
import Authentication from './pages/authentication.jsx';
import VideoMeetComponent from './pages/VideoMeet';
import { AuthProvider } from './contexts/AuthContext';
import HomeComponent from './pages/home';
import History from './pages/history';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/home's element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
          <Route path='/:url' element={<VideoMeetComponent />} />
        </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
