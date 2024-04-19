import { useState } from "react";
import ApiPhotos from "../../components/api-photos/ApiPhotos";
import "./Home.css"

const cameras = [
  {
    abbreviation: "FHAZ",
    name: "Front Hazard Avoidance Camera"
  }, {
    abbreviation: "RHAZ",
    name: "Rear Hazard Avoidance Camera"
  }, {
    abbreviation: "MAST",
    name: "Mast Camera"
  }, {
    abbreviation: "CHEMCAM",
    name: "Chemistry and Camera Complex"
  }, {
    abbreviation: "MAHLI",
    name: "Mars Hand Lens Imager"
  }, {
    abbreviation: "MARDI",
    name: "Mars Descent Imager"
  }, {
    abbreviation: "NAVCAM",
    name: "Navigation Camera"
  }, {
    abbreviation: "PANCAM",
    name: "Panoramic Camera"
  }, {
    abbreviation: "MINITES",
    name: "Miniature Thermal Emission Spectrometer (Mini-TES)"
  },
]

function Home() {
  const [inputSolValue, setInputSolValue] = useState(1000);
  const [selectCameraValue, setSelectCameraValue] = useState(cameras[0].abbreviation)

  const handleInputSolValueChange = (e) => {
    setInputSolValue(e.target.value);
  }

  const handleSelectCameraValueChange = (e) => {
    setSelectCameraValue(e.target.value);
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="sol">Sol</label>
          <input type="number" id="sol" name="sol"
            value={inputSolValue}
            onChange={handleInputSolValueChange} />
        </div>
        <label>
          <span>Camera</span>
          <select name="camera" onChange={handleSelectCameraValueChange} value={selectCameraValue}>
            {cameras.map((c, index) => (
              <option key={index} value={c.abbreviation}>{c.name}</option>
            ))}
          </select>
        </label>
      </form>

      <ApiPhotos sol={inputSolValue} camera={selectCameraValue} />
    </>
  )
}

export default Home;