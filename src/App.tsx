import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Before from "./routes/Before";
import Subscription from "./routes/Subscription";


export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeBody />} />
            <Route path="before" element={<Before/>}/>
          </Route>
          <Route path="/subscription" element={<Subscription/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


