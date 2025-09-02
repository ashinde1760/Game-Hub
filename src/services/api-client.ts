import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f4ea1493bb2c4aa3bfa8c7eebbe4718e",
  },
});
