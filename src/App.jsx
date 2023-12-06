import './App.css'
import Home from './assets/pages/Home'
import DetailPage from './assets/Components/DetailPage'
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        
          <Route path="/detail/:name" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
