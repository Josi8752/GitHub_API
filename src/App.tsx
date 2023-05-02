import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import ResultGithub from "./routes/Home/ResultGithub";



export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomeBody />} />
            <Route path="buscar" element={<ResultGithub />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


