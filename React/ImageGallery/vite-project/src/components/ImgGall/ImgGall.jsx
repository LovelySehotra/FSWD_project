

import { Link } from 'react-router-dom';
import './ImgGall.css'

function ImgGall({image,id})
{

    return(
        <div className="imgGall">
           <Link to={`/ImgGall/${id}`}>
            <div>
                <img 
                className="imgGall-img"
                src={image} />
            </div>
            </Link> 
        </div>
        
    )
}
export default ImgGall;