import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Appreciations from "./pages/appreciations/Appreciations"
import Awards from "./pages/awards/Awards"
import Home from "./pages/home/Home"
import Nominations from "./pages/nominations/Nominations"
import TimeSheets from "./pages/timesheets/TimeSheets"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='appreciations' element={<Appreciations />} />
                    <Route path='awards' element={<Awards />} />
                    <Route path='nominations' element={<Nominations />} />
                    <Route path='timesheets' element={<TimeSheets />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
