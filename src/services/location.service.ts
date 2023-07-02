import http from '../http-common.ts';
import LocationModel from "../models/location.model.ts";

class LocationService {
    async getAllLocations() {
        return await http.get("/location").then((res) => {
            return res.data as Array<LocationModel>;
        });
    }
}
export default new LocationService();