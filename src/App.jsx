import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ScrollToTop} from "./ui/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey/:id" element={<Article />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App