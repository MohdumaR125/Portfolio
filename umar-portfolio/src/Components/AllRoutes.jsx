import {Route,Routes} from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
const AllRoutes = () =>{
return(
    <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}>Home</Route>
        <Route path='/contact' element={<Contact/>}>Home</Route>
    </Routes>
)
}
export default AllRoutes