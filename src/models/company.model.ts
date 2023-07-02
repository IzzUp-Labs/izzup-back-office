import LocationModel from "./location.model.ts";
import JobOfferModel from "./job-offer.model.ts";
import ActivitySectorModel from "./activity-sector.model.ts";

export default interface CompanyModel {
    id: number;
    place_id: string;
    name: string;
    address: string;
    location?: LocationModel;
    jobOffers?: JobOfferModel[];
    sectors?: ActivitySectorModel[];
}