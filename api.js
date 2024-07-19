// import { Key } from "@mui/icons-material";
import axios from "axios";

const  request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        // eslint-disable-next-line no-undef
        Key: import.meta.env.VITE_APPWRITE_KEY
    }
})

console.log(import.meta.env.VITE_APPWRITE_KEY)

export default request ;