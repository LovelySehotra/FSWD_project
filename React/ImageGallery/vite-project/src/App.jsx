
import {Link} from "react-router-dom"
import './App.css'
import ImgList from './components/ImgList/ImgList'
import Imgdex from './components/Imgdex/Imgdex'
import CustomRoutes from "./components/CustomRoutes/CustomRoutes"
function App() {
  

  return (
    
     <div className='outer-imgdex'>
     <h1 id="imgdex-heading">
     <Link to={"/"}>Images
     </Link>
      </h1>
      {/* <ImgList/> */}
   <CustomRoutes/>
    </div>
  
  
  )
}

export default App
