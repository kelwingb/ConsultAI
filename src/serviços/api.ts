import axios from "axios";

const api = axios.create({
  baseURL: "https://api-inference.huggingface.co/models/gpt2"
})

export default api;