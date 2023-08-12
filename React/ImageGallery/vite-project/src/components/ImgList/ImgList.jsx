import { useState ,useEffect} from "react";
import axios from "axios";
import ImgGall from "../ImgGall/ImgGall";

function ImgList() {
    const [imgList, setImgList] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const[imgdexUrl , setImgdexUrl] = useState('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
    async function downloadImage(){
        setIsloading(true);
        const response = await axios.get(imgdexUrl);
        const imgResult = response.data.photos;
        console.log(response.data);
        console.log(imgResult);

        // const imgResultPromise = imgResult.map((img)=>
        //     axios.get(img.url)
        // );

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

    <div className="pokemon-list-wrapper">
    <div className="pokemon-wrapper">
      {isloading
        ? "Loading ..."
        : imgList.map((p) => (
            <ImgGall  image={p.image}  />
          ))}
    </div>
   
  </div>
)
}
export default ImgList;