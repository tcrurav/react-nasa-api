import axios from "axios";

const get = (sol, camera) => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${import.meta.env.VITE_API_KEY}`,
    headers: {}
  };

  return axios.request(config);
}

export default {
  get
}