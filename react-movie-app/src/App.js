import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />{/*http://localhost:3000/*/}
            <Route path="/movie/:id" element={<Detail />} />{/*http://localhost:3000/movie*/}
        </Routes>
    )
}

export default App;