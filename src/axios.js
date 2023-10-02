import axios from 'axios'
import {baseurl} from "./constants/constants.js"

const instance = axios.create({
    baseURL: baseurl,
  
  });

  export default instance