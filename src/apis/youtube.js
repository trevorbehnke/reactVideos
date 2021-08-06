import axios from "axios";

const KEY = "AIzaSyATAGXY0-0FGKgc53QCz8vk5wOptUaAgfk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
