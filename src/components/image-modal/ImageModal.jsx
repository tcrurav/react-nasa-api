import { useEffect } from "react"
import "./ImageModal.css"

function ImageModal({closeModal, selectedImageSource}) {

  return (
    <div className="image-modal-wrapper">
      <div className="image-modal-img-wrapper">
        <span onClick={closeModal}>x</span>
        <img src={selectedImageSource} alt="image modal" /> 
      </div>
    </div>
  )
}

export default ImageModal;