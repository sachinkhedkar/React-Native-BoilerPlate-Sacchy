import axios from 'axios';
import {baseURL} from './../utils/constant';

export default axios.create({
  baseURL: baseURL,
  responseType: 'json',
});
