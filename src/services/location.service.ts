import LocationModel from "../models/location.model.ts";
import axios from "axios";

class LocationService {
    async getAllLocations() {
        return await axios.get(import.meta.env.VITE_API_URL + "/location", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': '*',
            }
        }).then((res) => {
            return res.data as Array<LocationModel>;
        });
    }
}
export default new LocationService();