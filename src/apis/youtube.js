import axios from "axios";

const KEY = "AIzaSyCLbNUNkqZwkUXZuxCo-Pg8bgl0kxgIvdM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
