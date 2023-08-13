import { useState ,useEffect} from "react";
import axios from "axios";
import './ImgList.css'
import ImgGall from "../ImgGall/ImgGall";

function ImgList() {
    const [imgList, setImgList] = useState([]);
    const [isloading, setIsloading] = useState(true);//isloading showing during the data is fetching from server
    const imgdexUrl ='https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20';
    async function downloadImage(){
        setIsloading(true);
        const response = await axios.get(imgdexUrl);//fetch the data
        const imgResult = response.data.photos;//we get the array of photo
        console.log(response.data);
        console.log(imgResult);

       

        const imgData = await axios.all(imgResult);

        // console.log(imgData)
        const res = imgData.map((img)=>{
           
            return{
                id:img.id,
                name: img.title,
                image:img.url
            }
        })
        console.log(res);
        setImgList(res);
        setIsloading(false);
}
useEffect(()=>{
    downloadImage();
},[imgdexUrl]);

return(

    <div className="img-list-wrapper">
    <div className="img-wrapper">
      {isloading
        ? "Loading ..."
        : imgList.map((p) => (
            <ImgGall name={p.title} image={p.image} key={p.id} id={p.id}  />
          ))}
    </div>
   
  </div>
)
}
export default ImgList;