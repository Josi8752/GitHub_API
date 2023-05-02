import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Before from "./routes/Home/ResultGithub";



export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeBody />} />
            <Route path="before" element={<Before/>}/>
          </Route>
          <Route index element={<Navigate to= '/'/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


