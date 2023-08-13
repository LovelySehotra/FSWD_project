import axios from "axios";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";





function ImageDetails()
{
    const {id} = useParams();
    const[image,setImage] = useState({});
    async function downloadImage()
    {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        // console.log(response.data.photo);
        setImage({
            image:response.data.photo.url,
            name:response.data.photo.title,
            dis :response.data.photo.description
        })
    }
    useEffect(()=>{
        downloadImage();
    },[]);

    return(
        <div className="img-details-wrapper">

        <img className="img-details-image" src={image.image}/>    
        <div className="img-details-name">name: <span>{image.name}</span> </div>
        <div className="img-details-dis">Height:{image.dis}</div>

        


        </div>
        
    )

}
export default ImageDetails;