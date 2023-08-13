
import {Link} from "react-router-dom"
import './App.css'
import ImgList from './components/ImgList/ImgList'
import Imgdex from './components/Imgdex/Imgdex'
import CustomRoutes from "./components/CustomRoutes/CustomRoutes"
function App() {
  

  return (
    
     <div className='outer-imgdex'>
       {/* heading of all page */}
     <h1 id="imgdex-heading">
      {/* add path to image of imglsit */}
     <Link to={"/"}>Images
     </Link>
      </h1>
      {/* <ImgList/> */}
   <CustomRoutes/>
    </div>
  
  
  )
}

export default App
