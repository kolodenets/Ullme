import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import PhotoUploadPage from "./pages/photoUpload/PhotoUploadPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/uploadPhoto" element={<PhotoUploadPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
