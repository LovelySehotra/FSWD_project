import { Routes,Route } from "react-router-dom";
import ImageDetails from "../ImgDetails/ImgDetails";
import ImgGall from "../ImgGall/ImgGall";
import Imgdex from "../Imgdex/Imgdex";

function CustomRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Imgdex/>}/>
      <Route path="/ImgGall/:id" element={<ImageDetails />} />
    </Routes>
  );
}
export default CustomRoutes;