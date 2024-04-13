import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="sign_in" element={<SignIn />} />
       <Route path="sign_up" element={<SignUp />} />
         {/*  <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
