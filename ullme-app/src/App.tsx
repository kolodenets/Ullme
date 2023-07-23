import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import UploadPage from "./pages/upload/UploadPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/upload" element={<UploadPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
