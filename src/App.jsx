import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Layout from './components/layout/Layout';
import DisabilitySelector from './components/DisabilitySelector';
import AccessibilityMenu from './components/AccessibilityMenu';

import Home from './pages/Home';
import Community from './pages/Community';
import Training from './pages/Training';
import GameInterface from './pages/GameInterface';
import Login from './pages/Login';
import Register from './pages/Register';
import Matches from './pages/Matches';
import NotFound from './pages/NotFound';

function App() {
  const [disabilitySelected, setDisabilitySelected] = useState(false);

  if (!disabilitySelected) {
    return <DisabilitySelector onComplete={() => setDisabilitySelected(true)} />;
  }

  return (
    <Router>
      <div className="relative">
        <Layout>
          <AccessibilityMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comunidad" element={<Community />} />
            <Route path="/capacitacion" element={<Training />} />
            <Route path="/entrevista-rv" element={<GameInterface />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/matches/:candidateId" element={<Matches />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;