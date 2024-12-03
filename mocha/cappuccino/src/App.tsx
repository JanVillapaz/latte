import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateNewFile from "./component/CreateNewFile";
import FileUpload from "./component/UploadFile";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";



const App: React.FC = () => {
  return (
      <Router>
        <div className="app">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create-new" element={<CreateNewFile />} />
              <Route path="/import-file" element={<FileUpload />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
  );
};

export default App;
