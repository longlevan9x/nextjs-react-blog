import axios from "axios";

const axiosClient = axios.create({
    headers: {
        origin: process.env.BASE_URL
    },
    baseURL: process.env.API_URL
})
export default class Api {
    static getPosts() {
        return axiosClient.get('app/posts');
    }

    static getPostDetail(id: string) {
        return axiosClient.get(`app/posts/${id}`);
    }
    static getPostDetailContent(id: string) {
        return axiosClient.get(`app/posts/${id}/content`);
    }

    static getSliders() {
        return axiosClient.get('app/sliders');
    }
}