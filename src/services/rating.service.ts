import axios from "axios";
import UserInfoModel from "../models/user-info.model.ts";
import RatingModel from "../models/rating.model.ts";

class RatingService {

    async getUsersByRating(stars: number) {
        return await axios.get(import.meta.env.VITE_API_URL + "/rating/users/"+stars, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': '*',
            }
        }).then((res) => {
            return res.data as Array<UserInfoModel>;
        });
    }

    async getRatingStats(userId: string) {
        return await axios.get(import.meta.env.VITE_API_URL + "/rating/user-stats/"+userId, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': '*',
            }
        }).then((res) => {
            return res.data as RatingModel;
        });
    }
}
export default new RatingService();