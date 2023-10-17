import ExtraTagModel from "../models/extra-tag.model.ts";
import axios from "axios";

class TagService {

    async create(tag: ExtraTagModel) {
        return await axios.post(import.meta.env.VITE_API_URL + "/tag", tag, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': '*',
            }
        }).then((res) => {
            return res.data as ExtraTagModel;
        });
    }

    async findAll() {
        return await axios.get(import.meta.env.VITE_API_URL + "/tag", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': '*',
            }
        }).then((res) => {
            return res.data as Array<ExtraTagModel>;
        });
    }

    async findOne(id: string) {
        return await axios.get(import.meta.env.VITE_API_URL + "/tag/"+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': '*',
            }
        }).then((res) => {
            return res.data as ExtraTagModel;
        });
    }

    async update(id: string, tag: ExtraTagModel) {
        return await axios.patch(import.meta.env.VITE_API_URL + "/tag/"+id, tag, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': '*',
            }
        }).then((res) => {
            return res.data as ExtraTagModel;
        });
    }

    async remove(id: string) {
        return await axios.delete(import.meta.env.VITE_API_URL + "/tag/"+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': '*',
            }
        }).then((res) => {
            return res.data as ExtraTagModel;
        });
    }
}
export default new TagService();