import Navbar from './Components/Navbar';
import {  Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';



function App() {


  return (
    <>
      <Navbar />



      <Routes>
        <Route path="/" element={<HomePage />} />
        

      </Routes>
    </>










  );
}

export default App;
