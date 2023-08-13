import axios from "axios";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import './ImgDetails.css'




function ImageDetails()
{
    // use pramas to get id
    const {id} = useParams();
    const[image,setImage] = useState({});
    async function downloadImage()
    {
        // not fetch the particulr image by using id
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
        // provide structure to detail of image
        <div className="img-details-wrapper">

        <img className="img-details-image" src={image.image}/>   
        <div className="imgdetails-box">
            <div className="img-details">Name: <span>{image.name}</span> </div>
            <div className="img-details">Description:{image.dis}</div>
            </div> 

        


        </div>
        
    )

}
export default ImageDetails;