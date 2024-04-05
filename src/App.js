import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<SignIn />} />
        {/*<Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
