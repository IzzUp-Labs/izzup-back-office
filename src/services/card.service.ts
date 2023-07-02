import HomeCardModel from "../models/home-card.model.ts";
import http from '../http-common.ts';

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
        const headers = { 'Content-Type': 'multipart/form-data' };
        return http.post("/homepage-card", formData, {headers}).then((res) => {
            return res.data as HomeCardModel;
        });
    }

    async findAll() {
        return http.get("/homepage-card").then((res) => {
            return res.data as Array<HomeCardModel>;
        });
    }

    async findOne(id: number) {
        return http.get("/homepage-card/"+id).then((res) => {
            return res.data as HomeCardModel;
        });
    }

    async update(id: number, card: HomeCardModel) {
        return http.put("/homepage-card/"+id, card).then((res) => {
            return res.data as HomeCardModel;
        });
    }

    async remove(id: number) {
        console.log(id);
        return http.delete("/homepage-card/"+id).then((res) => {
            return res.data as HomeCardModel;
        });
    }
}
export default new CardService();