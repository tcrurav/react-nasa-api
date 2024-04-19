import { useEffect, useState } from "react";
import marsPhotos from "../../services/mars-photos/marsPhotos"
import "./ApiPhotos.css"
import ImageModal from "../image-modal/ImageModal";

function ApiPhotos({ sol, camera }) {
  const [photos, setPhotos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImageSource, setSelectedImageSource] = useState("");

  const showModal = (imageSource) => {
    window.overf
    setSelectedImageSource(imageSource.toString());
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

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
            <img src={p.img_src} alt="api photo" onClick={() => showModal(p.img_src)} />
          </div>
        ))}
      </div>
      {openModal ? <ImageModal closeModal={closeModal} selectedImageSource={selectedImageSource} /> : ""}
    </>

  )
}

export default ApiPhotos;