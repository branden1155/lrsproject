import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/dashboard'
import NavBar from './Components/Header/navBar';
import ContactUs from './Pages/Contactus/contactUs';
import Grading from './Pages/Services/grading';
import TreeRemoval from './Pages/Services/treeRemoval'
import BrushClearing from './Pages/Services/brushClearing';
import ErosionControl from './Pages/Services/erosionControl';


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/treeRemoval" element={<TreeRemoval />} />
      <Route path="/brushClearing" element={<BrushClearing />} />
      <Route path="/grading" element={<Grading />} />
      <Route path="/erosionControl" element={<ErosionControl />} />
    </Routes>
    </div>
  )
}

export default App
