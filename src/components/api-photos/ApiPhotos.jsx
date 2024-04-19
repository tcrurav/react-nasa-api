import { useEffect, useState } from "react";
import marsPhotos from "../../services/mars-photos/marsPhotos"
import "./ApiPhotos.css"

function ApiPhotos({ sol, camera }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    marsPhotos.get(sol, camera).then((response) => {
      console.log(JSON.stringify(response.data));
      setPhotos(response.data.photos)
    })
      .catch((error) => {
        console.log(error);
        setPhotos([])
      });
  }, [sol, camera]);

  return (
    <>
      <div className="api-photos-images-wrapper">
        {photos.map((p, index) => (
          <div key={index} className="api-photos-image-wrapper">
            <img src={p.img_src} alt="api photo" />
          </div>
        ))}
      </div>
    </>
  )
}

export default ApiPhotos;