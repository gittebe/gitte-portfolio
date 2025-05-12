import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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