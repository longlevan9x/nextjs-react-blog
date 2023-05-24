import axios from "axios";

const axiosClient = axios.create({
    headers: {
        origin: process.env.BASE_URL
    },
    baseURL: 'http://127.0.0.1:3000/'
})
export default class Api {
    static getPosts() {
        return axiosClient.get('app/posts');
    }

    static getSliders() {
        return axiosClient.get('app/sliders');
    }
}