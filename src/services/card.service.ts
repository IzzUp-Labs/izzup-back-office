import HomeCardModel from "../models/home-card.model.ts";
import axios from "axios";

class CardService {

    async create(card: HomeCardModel) {
        const formData = new FormData();
        formData.append('file', card.photo);
        formData.append('title', card.title);
        formData.append('description', card.description);
        formData.append('type', card.type);
        if (card.link){
            formData.append('link', card.link);
        }
        return await axios.post(import.meta.env.VITE_API_URL + "/homepage-card", formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            return res.data as HomeCardModel;
        });
    }

    async findAll() {
        return await axios.get(import.meta.env.VITE_API_URL + "/homepage-card", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res) => {
            return res.data as Array<HomeCardModel>;
        });
    }

    async findOne(id: string) {
        return await axios.get(import.meta.env.VITE_API_URL + "/homepage-card/"+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res) => {
            return res.data as HomeCardModel;
        });
    }

    async update(id: string, card: HomeCardModel) {
        return await axios.put(import.meta.env.VITE_API_URL + "/homepage-card/"+id, card, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((res) => {
            return res.data as HomeCardModel;
        });
    }

    async remove(id: string) {
        return await axios.delete(import.meta.env.VITE_API_URL + "/homepage-card/"+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((res) => {
            return res.data as HomeCardModel;
        });
    }
}
export default new CardService();