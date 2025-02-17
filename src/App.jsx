import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// installing the App using vite
// npm i bootstrap animate.css axios react-router-dom react-icons sweetalert2
// JSX - Component - Project Structure (Node - Node Modules - How Run The Project)
// Page ??  