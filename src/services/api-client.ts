import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '390a03b75d89418087ac2f3167ddb163'
  }
});