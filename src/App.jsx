import './App.css'

import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import {Routes,Route} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import SettingsPage from './pages/SettingsPage'
import { BrowserRouter } from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
       <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/About" element={<AboutPage/>}/>
      <Route path="/Settings" element={<SettingsPage/>}/>
      <Route path="/Contact" element={<ContactPage/>}/>

      <Route path="/Products" element={<ProductsPage/>}/>



    </Routes>
       </BrowserRouter>

     {/* <HomePage/> */}
     {/* <Grid/> */}
     {/* <ProductsPage/> */}
     {/* <HomePage/> */}
    </>
  )
}

export default App
