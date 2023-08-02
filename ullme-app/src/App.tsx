import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import UploadPage from "./pages/upload/Upload";
import ResultPage from "./pages/result/Result";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="" element={<ErrorPage />} />
        <Route element={<ErrorPage />} /> 
        page
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
