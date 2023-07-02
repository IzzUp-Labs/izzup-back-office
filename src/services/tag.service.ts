import ExtraTagModel from "../models/extra-tag.model.ts";
import http from '../http-common.ts';

class TagService {

    async create(tag: ExtraTagModel) {
        return http.post("/tag", tag).then((res) => {
            return res.data as ExtraTagModel;
        });
    }

    async findAll() {
        return http.get("/tag").then((res) => {
            return res.data as Array<ExtraTagModel>;
        });
    }

    async findOne(id: number) {
        return http.get("/tag/"+id).then((res) => {
            return res.data as ExtraTagModel;
        });
    }

    async update(id: number, tag: ExtraTagModel) {
        return http.put("/tag/"+id, tag).then((res) => {
            return res.data as ExtraTagModel;
        });
    }

    async remove(id: number) {
        return http.delete("/tag/"+id).then((res) => {
            return res.data as ExtraTagModel;
        });
    }
}
export default new TagService();